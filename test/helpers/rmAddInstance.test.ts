import auth from "../../modules/helpers/src/auth"
import rmAddInstance from "../../modules/helpers/src/rmAddInstance"
import rmDeleteInstance from "../../modules/helpers/src/rmDeleteInstance"

beforeAll(async () => {
  await auth({ username: "jestTests", password: "1jestTests2" })
})

test("after creating a instance you can get it from server", async () => {
  const result = await rmAddInstance("Test Person", { Name: "Mr. Jest" })
  expect(result.instanceLabel[0]).toEqual("Mr. Jest")
  expect(result.resultsUrl).toEqual("https://learning.cultofbits.com/recordm/index.html#/instance/" + result.id)
  await rmDeleteInstance(result.id)
})
