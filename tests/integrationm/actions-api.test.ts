import {ActionsApi, JSON} from "@cob/cobjs-integrationm";

test("Can call a concurrent action", async () => {
    const data = {
        name: "Guest"
    } as JSON

    const actionsApi = new ActionsApi();
    const result = await actionsApi.executeConcurrentAction("welcome", data)
    expect(result.data).toStrictEqual(`Hey ${data.name}. Welcome to Cultofbits!`)
})