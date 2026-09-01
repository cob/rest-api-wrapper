/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: rmDomainSearch } = await import('../../src/rmDomainSearch.js')

beforeEach(() => axios.get.mockReset())

test('forwards from and size to the server (regression: they were silently ignored)', async () => {
    axios.get.mockResolvedValue({ data: {} })
    await rmDomainSearch(2, "abc", 10, 50)
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/domains/search/2?from=10&size=50&q=abc`)
})

test('forwards sort and a normalized ascending flag', async () => {
    axios.get.mockResolvedValue({ data: {} })
    await rmDomainSearch(2, "*", 0, 0, "name", "desc")
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/domains/search/2?from=0&size=0&q=*&sort=name&ascending=false`)
})

test('omits sort/ascending by default and adds an absolute resultsUrl in node', async () => {
    axios.get.mockResolvedValue({ data: {} })
    const result = await rmDomainSearch(2)
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/domains/search/2?from=0&size=0&q=*`)
    expect(result.resultsUrl).toBe(`${SERVER}/recordm/#/domain/2/q=*`)
})
