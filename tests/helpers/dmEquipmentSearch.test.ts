import { dmEquipmentSearch, auth } from "@cob/cobjs-helpers"

beforeAll(async () => {
  await auth({ username: "jestTests", password: "1jestTests2" })
})

test("for the learning server, CPEs of room 1 count is 2", async () => {
  const result = await dmEquipmentSearch("*room-1")
  expect(result.hits.total.value).toBe(2)
})

test("the resultsUrl is added to the response and in learning Countries defId=1", async () => {
  const result = await dmEquipmentSearch("*room-1")
  expect(result.resultsUrl).toBe("https://learning.cultofbits.com/confm/#/search/q=*room-1")
})

test("default size return 0 instances", async () => {
  const result = await dmEquipmentSearch("*")
  expect(result.hits.hits.length).toBe(0)
})
