/** @jest-environment node */
import auth from "../src/auth"
import rmAddInstance from "../src/rmAddInstance"
import rmDeleteInstance from "../src/rmDeleteInstance"


test('after creating a instance you can get it from server', async () => {

    await auth({ username:"jestTests", password:"1jestTests2" })

    let result = await rmAddInstance("Test Person", {"Name": "Mr. Jest"})
    expect(result.instanceLabel[0]).toEqual("Mr. Jest");
    rmDeleteInstance(result.id)
})