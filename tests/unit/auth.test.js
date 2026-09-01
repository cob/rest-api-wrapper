/** @jest-environment node */
import { jest } from '@jest/globals'
import { SERVER } from './helpers/mockAxios.js'

const axios = { get: jest.fn(), post: jest.fn(), delete: jest.fn(), defaults: {} }
const setCookieSync = jest.fn()

jest.unstable_mockModule('axios', () => ({ default: axios }))
jest.unstable_mockModule('axios-cookiejar-support', () => ({ wrapper: jest.fn() }))
jest.unstable_mockModule('tough-cookie', () => ({
    CookieJar: class {
        setCookieSync(...args) { setCookieSync(...args) }
    }
}))

const { default: auth } = await import('../../src/auth.js')

const loggedInResponse = (username) => ({ data: { loggedInUser: { username } } })

beforeEach(() => {
    axios.get.mockReset()
    axios.post.mockReset()
    setCookieSync.mockClear()
})

test('username/password posts the credentials and returns a fresh (unthrottled) loggedin user', async () => {
    axios.post.mockResolvedValue({})
    axios.get.mockResolvedValue(loggedInResponse("jest"))
    const result = await auth({ username: "jest", password: "pw" })
    expect(axios.post).toHaveBeenCalledWith(`${SERVER}/recordm/security/auth`, { username: "jest", password: "pw" })
    expect(result.username).toBe("jest")
    expect(result.throtle).toBeUndefined()
})

test('token auth sets the cobtoken cookie in the node cookie jar', async () => {
    axios.get.mockResolvedValue(loggedInResponse("jest"))
    const result = await auth({ token: "abc123" })
    expect(setCookieSync).toHaveBeenCalledWith('cobtoken=abc123;', SERVER)
    expect(axios.post).not.toHaveBeenCalled()
    expect(result.username).toBe("jest")
})

test('rejects with an Error when no credentials are given', async () => {
    await expect(auth()).rejects.toThrow("Specify a username/password OR a token")
    await expect(auth({})).rejects.toThrow("Specify a username/password OR a token")
})
