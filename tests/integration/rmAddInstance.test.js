/** @jest-environment node */
import auth from "../../src/auth"
import rmAddInstance from "../../src/rmAddInstance"
import rmDeleteInstance from "../../src/rmDeleteInstance"

const TEST_USERNAME = process.env.COB_TEST_USERNAME || "jestTests"
const TEST_PASSWORD = process.env.COB_TEST_PASSWORD || "1jestTests2"

test('after creating a instance you can get it from server', async () => {

    await auth({ username:TEST_USERNAME, password:TEST_PASSWORD })

    let result = await rmAddInstance("Test Person", {"Name": "Mr. Jest"})
    expect(result.instanceLabel[0]).toEqual("Mr. Jest");
    await rmDeleteInstance(result.id)
})
