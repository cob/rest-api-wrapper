/** @jest-environment node */

const { setTimelessToken, _setToken, _getToken } = require("../src/token")
const { getUsername } = require("../src/auth")


test('before setting a token _getToken returns an empty array', () => {
    expect(_getToken()).toEqual([]);
})


test('internally setting tokens with _setToken updates the token ', () => {
    _setToken("3434243")
    _setToken("8766473")
    expect(_getToken()).toEqual("8766473");
})


test('but after setting a timelessTokens future calls to _setToken never updates the token', () => {
    setTimelessToken("456456")
    _setToken("8766473")
    _setToken("6434635")
    expect(_getToken()).toEqual("456456");
})


test('timelessTokens set a fake username for cache purposes', () => {
    let timelessToken = "213223423"
    global.cob = undefined // assume not on a cob app enviroment
    setTimelessToken(timelessToken)
    expect(getUsername()).toEqual("timelessToken_2132");
})


test('using timelessTokens in cob app generates a warning', () => {
    global.cob = { app : { getCurrentLoggedInUser: function() { return "cobUser"} } } //Simulate cob app enviroment
    console.warn = jest.fn()
    setTimelessToken("1231312312")
    expect(console.warn).toHaveBeenCalledWith('You should only use timeless tokens in backend scripts, not browser')
})


test('_setToken in browser enviroment does nothing', () => {
    document = {cookie : "cobtoken=testToken"} //Simulate cob app enviroment
    _setToken("6434635")
    expect(_getToken()).not.toEqual("6434635");
})


test('_getToken in browser enviroment should return document.cookie', () => {
    document = {cookie : "cobtoken=testToken"} //Simulate cob app enviroment
    expect(_getToken()).toEqual("cobtoken=testToken");
})

