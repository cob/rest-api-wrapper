import {ActionsApi} from "@cob/cobjs-integrationm"

test("Can call a concurrent action", async () => {
    const actionsApi = new ActionsApi();
    const result = await actionsApi.executeConcurrentAction("welcome")
    expect(result.data).toStrictEqual("Welcome to Cultofbits")
})