/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: rmListDefinitions } = await import('../../src/rmListDefinitions.js')
const { default: rmListDefinitionFields } = await import('../../src/rmListDefinitionFields.js')

beforeEach(() => axios.get.mockReset())

test('lists definitions with no filters by default', async () => {
    axios.get.mockResolvedValue({ data: [] })
    await rmListDefinitions()
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/definitions?`)
})

test('translates * wildcards to % and percent-encodes the name filter', async () => {
    axios.get.mockResolvedValue({ data: [] })
    await rmListDefinitions({ name: 'Countries*' })
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/definitions?name=Countries%25`)
})

test('forwards includeDisabled', async () => {
    axios.get.mockResolvedValue({ data: [] })
    await rmListDefinitions({ includeDisabled: true, name: null })
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/definitions?includeDisabled=true`)
})

test('rmListDefinitionFields fetches the definition by id', async () => {
    axios.get.mockResolvedValue({ data: { fieldDefinitions: [] } })
    const result = await rmListDefinitionFields(7)
    expect(axios.get).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/definitions/7`)
    expect(result.fieldDefinitions).toEqual([])
})
