import axios from "axios"
import { rmDomainSearch } from "@cob/cobjs-helpers";

test('for the learning server, "E-learning Demo" domain count for "Arab world" is 22', async () => {
  const result = await rmDomainSearch(2, "Arab world")
  expect(result.hits.total.value).toBe(22)
})

test("the resultsUrl is added to the response", async () => {
  const result = await rmDomainSearch(2)
  expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/domain/2/q=*")
})

test("default size return 0 instances", async () => {
  const result = await rmDomainSearch(2)
  expect(result.hits.hits.length).toBe(0)
})

test('search for a domain that does not exist logs an error and throws "Domain not found" ', async () => {
  try {
    await rmDomainSearch(23123)
    fail("Should have failed the request")
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      expect(err.response!.status).toBe(404)
    } else {
      fail("Unable to validate the failure")
    }
  }
})
