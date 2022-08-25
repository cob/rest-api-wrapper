import auth from "../../../../src/api/userm/helpers/auth";
import rmAddInstance from "../../../../src/api/recordm/helpers/rmAddInstance";
import rmDeleteInstance from "../../../../src/api/recordm/helpers/rmDeleteInstance";

beforeAll(async () => {
  await auth({ username: "jestTests", password: "1jestTests2" });
});

test("after creating a instance you can get it from server", async () => {
  const result = await rmAddInstance("Test Person", { Name: "Mr. Jest" });
  expect(result.instanceLabel[0]).toEqual("Mr. Jest");
  await rmDeleteInstance(result.id);
});
