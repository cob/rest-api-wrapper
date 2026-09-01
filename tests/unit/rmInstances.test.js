/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: rmGetInstance } = await import('../../src/rmGetInstance.js')
const { default: rmAddInstance } = await import('../../src/rmAddInstance.js')

beforeEach(() => {
    axios.get.mockReset()
    axios.post.mockReset()
})

test('rmGetInstance fetches the instance and adds an absolute resultsUrl in node', async () => {
    axios.get.mockResolvedValue({ data: { instanceLabel: ["ABW"] } })
    const result = await rmGetInstance(556)
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/instances/556`)
    expect(result.instanceLabel).toEqual(["ABW"])
    expect(result.resultsUrl).toBe(`${SERVER}/recordm/#/instance/556`)
})

test('rmAddInstance posts the definition name and values, and builds resultsUrl from the new id', async () => {
    axios.post.mockResolvedValue({ data: { id: 42 } })
    const result = await rmAddInstance("Test Person", { "Name": "Mr. Jest" })
    expect(axios.post).toHaveBeenCalledWith(
        `${SERVER}/recordm/recordm/instances/integration`,
        { type: "Test Person", values: { "Name": "Mr. Jest" } })
    expect(result.resultsUrl).toBe(`${SERVER}/recordm/#/instance/42`)
})
