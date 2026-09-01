/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: dmEquipmentSearch } = await import('../../src/dmEquipmentSearch.js')

beforeEach(() => axios.get.mockReset())

test('searches confm with encoded query and paging', async () => {
    axios.get.mockResolvedValue({ data: {} })
    await dmEquipmentSearch("*room 1", 0, 10)
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/confm/confm/search?from=0&size=10&q=*room%201`)
})

test('adds a resultsUrl always prefixed with the server', async () => {
    axios.get.mockResolvedValue({ data: {} })
    const result = await dmEquipmentSearch("*room-1")
    expect(result.resultsUrl).toBe(`${SERVER}/confm/#/search/q=*room-1`)
})
