/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: rmDefinitionAggregation } = await import('../../src/rmDefinitionAggregation.js')

const serverData = (hits = []) => ({ data: { _definitions: { countries: { id: 2 } }, hits: { hits } } })

beforeEach(() => axios.post.mockReset())

test('queries by defId for numeric definitions and by def for names', async () => {
    axios.post.mockResolvedValue(serverData())
    await rmDefinitionAggregation(2, {}, "*", 0, 10, "", "asc", "Etc/UTC")
    expect(axios.post.mock.calls.at(-1)[0]).toBe(`${SERVER}/recordm/recordm/definitions/search?defId=2`)

    axios.post.mockResolvedValue(serverData())
    await rmDefinitionAggregation("Countries Series", {}, "*", 0, 10, "", "asc", "Etc/UTC")
    expect(axios.post.mock.calls.at(-1)[0]).toBe(`${SERVER}/recordm/recordm/definitions/search?def=Countries%20Series`)
})

test('sends the query with AND operator, the given timezone, paging and aggregations', async () => {
    axios.post.mockResolvedValue(serverData())
    const agg = { x: { sum: { field: "value" } } }
    await rmDefinitionAggregation(2, agg, "Arab world", 5, 15, "", "asc", "Etc/UTC")
    const body = axios.post.mock.calls.at(-1)[1]
    expect(body).toEqual({
        query: {
            query_string: {
                query: "Arab world",
                time_zone: "Etc/UTC",
                default_operator: "AND",
                analyze_wildcard: true
            }
        },
        from: 5,
        size: 15,
        aggs: agg
    })
})

test('sorts the returned page client-side, unwrapping array values from _source', async () => {
    const hits = () => [
        { _source: { name: ["b"] } },
        { _source: { name: ["a"] } },
        { _source: { name: ["c"] } },
    ]
    axios.post.mockResolvedValue(serverData(hits()))
    const asc = await rmDefinitionAggregation(2, {}, "*", 0, 10, "name", "asc", "Etc/UTC")
    expect(asc.hits.hits.map(h => h._source.name[0])).toEqual(["a", "b", "c"])

    axios.post.mockResolvedValue(serverData(hits()))
    const desc = await rmDefinitionAggregation(2, {}, "*", 0, 10, "name", "desc", "Etc/UTC")
    expect(desc.hits.hits.map(h => h._source.name[0])).toEqual(["c", "b", "a"])
})

test('adds an absolute resultsUrl in node', async () => {
    axios.post.mockResolvedValue(serverData())
    const result = await rmDefinitionAggregation(2, {}, "Arab world", 0, 10, "", "asc", "Etc/UTC")
    expect(result.resultsUrl).toBe(`${SERVER}/recordm/#/definitions/2/q=Arab%20world`)
})
