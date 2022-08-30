import rmDefinitionSearch from "../../modules/helpers/src/rmDefinitionSearch"
import axios from "axios"

test('for the learning server, "countries series" count for "Arab world" is 20', async () => {
  const result = await rmDefinitionSearch("Countries Series", "Arab world")
  expect(result.hits.total.value).toBe(20)
})

test("the resultsUrl is added to the response and in learning Countries defId=1", async () => {
  const result = await rmDefinitionSearch("Countries")
  expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/1/q=*")
})

test("default size return 0 instances", async () => {
  const result = await rmDefinitionSearch("Countries")
  expect(result.hits.hits.length).toBe(0)
})

test('search for a definition that does not exist logs an error and throws "Definition not found" ', async () => {
  try {
    await rmDefinitionSearch("invalidDefinition")
    fail("Should have failed the request")
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      expect(err.response!.status).toBe(404)
      expect(err.response!.data).toBe("Definition not found")
    } else {
      fail("Unable to validate the failure")
    }
  }
})
