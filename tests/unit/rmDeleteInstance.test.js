/** @jest-environment node */
import { mockAxios, SERVER } from './helpers/mockAxios.js'

const axios = mockAxios()
const { default: rmDeleteInstance } = await import('../../src/rmDeleteInstance.js')

beforeEach(() => axios.delete.mockReset())

test('builds a valid query string (regression: the URL had a duplicated "?")', async () => {
    axios.delete.mockResolvedValue({ data: "ok" })
    await rmDeleteInstance(123)
    expect(axios.delete).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/instances/123?ignoreRefs=false`)
})

test('forwards ignoreRefs=true and returns the response data', async () => {
    axios.delete.mockResolvedValue({ data: "deleted" })
    await expect(rmDeleteInstance(123, true)).resolves.toBe("deleted")
    expect(axios.delete).toHaveBeenCalledWith(`${SERVER}/recordm/recordm/instances/123?ignoreRefs=true`)
})
