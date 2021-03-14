/** @jest-environment node */
const { getServer, setServer } = require("../src/server")

test('default server is "https://learning.cultofbits.com"', () => {
    expect(getServer()).toBe("https://learning.cultofbits.com");
})

test('getServer equals last setServer call', () => {
    setServer("https://abc.cultofbits.com")
    setServer("https://xpto.cultofbits.com")
    expect(getServer()).toBe("https://xpto.cultofbits.com");
})
