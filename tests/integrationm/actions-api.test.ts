import {ActionsApi} from "@cob/cobjs-integrationm";

test("Can call a concurrent action", async () => {
    const actionsApi = new ActionsApi();
    const result = await actionsApi.executeConcurrentAction("welcome", {name: "Guest"})
    expect(result.data).toStrictEqual(`Hey ${{name: "Guest"}.name}. Welcome to Cultofbits!`)
})