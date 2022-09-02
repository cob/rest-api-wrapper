import {getServer, setServer} from "@cob/cobjs-core";

test('default server is "https://learning.cultofbits.com"', () => {
  expect(getServer()).toBe("https://learning.cultofbits.com")
})

test("getServer equals last setServer call", () => {
  setServer("https://abc.cultofbits.com")
  setServer("https://xpto.cultofbits.com")
  expect(getServer()).toBe("https://xpto.cultofbits.com")
  setServer("https://learning.cultofbits.com") //restore default server for tests
})
