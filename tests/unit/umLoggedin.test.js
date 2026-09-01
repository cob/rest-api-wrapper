/** @jest-environment node */
import { jest } from '@jest/globals'
import { SERVER } from './helpers/mockAxios.js'

const axios = { get: jest.fn(), post: jest.fn(), delete: jest.fn(), defaults: {} }

// umLoggedin keeps module-level cache state, so each test loads a fresh copy
async function freshUmLoggedin() {
    jest.resetModules()
    jest.unstable_mockModule('axios', () => ({ default: axios }))
    return (await import('../../src/umLoggedin.js')).default
}

const loggedInResponse = (username) => ({ data: { loggedInUser: { username } } })

beforeEach(() => axios.get.mockReset())

test('fetches the loggedin user and returns it without a throtle flag', async () => {
    const umLoggedin = await freshUmLoggedin()
    axios.get.mockResolvedValue(loggedInResponse("jest"))
    const result = await umLoggedin()
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/userm/userm/user/loggedin`)
    expect(result).toEqual({ username: "jest" })
})

test('serves a second call within 60s from cache, flagged with throtle', async () => {
    const umLoggedin = await freshUmLoggedin()
    axios.get.mockResolvedValue(loggedInResponse("jest"))
    const first = await umLoggedin()
    const second = await umLoggedin()
    expect(second).toEqual({ username: "jest", throtle: true })
    expect(axios.get).toHaveBeenCalledTimes(1)
    // the cached object must not be mutated by throttled reads
    expect(first.throtle).toBeUndefined()
})

test('refreshes after the 60s validity expires (regression: the cache never refreshed)', async () => {
    const umLoggedin = await freshUmLoggedin()
    const nowSpy = jest.spyOn(Date, 'now')
    try {
        nowSpy.mockReturnValue(1_000_000)
        axios.get.mockResolvedValue(loggedInResponse("jest"))
        await umLoggedin()

        nowSpy.mockReturnValue(1_000_000 + 61_000)
        axios.get.mockResolvedValue(loggedInResponse("jest2"))
        const result = await umLoggedin()
        expect(result.username).toBe("jest2")
        expect(axios.get).toHaveBeenCalledTimes(2)
    } finally {
        nowSpy.mockRestore()
    }
})

test('umLoggedin(false) bypasses the cache, and so does the legacy {throtle: false} form', async () => {
    const umLoggedin = await freshUmLoggedin()
    axios.get.mockResolvedValue(loggedInResponse("jest"))
    await umLoggedin()
    await umLoggedin(false)
    expect(axios.get).toHaveBeenCalledTimes(2)
    await umLoggedin({ throtle: false })
    expect(axios.get).toHaveBeenCalledTimes(3)
})

test('concurrent calls share the in-flight request', async () => {
    const umLoggedin = await freshUmLoggedin()
    let resolveGet
    axios.get.mockReturnValue(new Promise(resolve => { resolveGet = resolve }))
    const p1 = umLoggedin()
    const p2 = umLoggedin()
    expect(axios.get).toHaveBeenCalledTimes(1)
    resolveGet(loggedInResponse("jest"))
    await expect(p1).resolves.toEqual({ username: "jest" })
    await expect(p2).resolves.toEqual({ username: "jest" })
})

test('a 403 resolves to the anonymous user', async () => {
    const umLoggedin = await freshUmLoggedin()
    axios.get.mockRejectedValue({ response: { status: 403 } })
    await expect(umLoggedin()).resolves.toEqual({ username: "anonymous" })
})

test('a network error without a response is rethrown (regression: it raised a TypeError)', async () => {
    const umLoggedin = await freshUmLoggedin()
    const error = new Error("network down")
    axios.get.mockRejectedValue(error)
    await expect(umLoggedin()).rejects.toBe(error)
})
