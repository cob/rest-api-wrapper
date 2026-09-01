/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: rmDefinitionSearch } = await import('../../src/rmDefinitionSearch.js')

const serverData = () => ({ data: { _definitions: { countries: { id: 1 } } } })

beforeEach(() => axios.get.mockReset())

test('URL-encodes the definition name, query and timezone, and forwards paging', async () => {
    axios.get.mockResolvedValue(serverData())
    await rmDefinitionSearch("Countries Series", "Arab world", 5, 20, "", undefined, "Etc/UTC")
    expect(axios.get).toHaveBeenCalledWith(
        `${SERVER}/recordm/recordm/definitions/search/name/Countries%20Series?from=5&size=20&q=Arab%20world&tz=Etc%2FUTC`)
})

test('adds an absolute resultsUrl in node, from the definition id in the response', async () => {
    axios.get.mockResolvedValue(serverData())
    const result = await rmDefinitionSearch("Countries", undefined, 0, 0, "", undefined, "Etc/UTC")
    expect(result.resultsUrl).toBe(`${SERVER}/recordm/#/definitions/1/q=*`)
})

test('accepts ascending as "asc"/"desc" or boolean', async () => {
    axios.get.mockResolvedValue(serverData())
    await rmDefinitionSearch("Countries", "*", 0, 0, "name", "asc", "Etc/UTC")
    expect(axios.get.mock.calls.at(-1)[0]).toContain("&sort=name&ascending=true")

    axios.get.mockResolvedValue(serverData())
    await rmDefinitionSearch("Countries", "*", 0, 0, "name", false, "Etc/UTC")
    expect(axios.get.mock.calls.at(-1)[0]).toContain("&sort=name&ascending=false")
})
