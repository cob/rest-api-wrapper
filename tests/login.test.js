
/** @jest-environment node */
const { default: axios } = require("axios");
const { getUsername, _setUsername, login } = require("../src/login")
const { _getToken, _setToken } = require("../src/token")

test('before any login getUsername returns "anonymous"', () => {
    expect(getUsername()).toBe("anonymous");
})


test('internaly you can use _setUsername (to be used with intemporal tokens)', () => {
    _setUsername("johnSmith")
    expect(getUsername()).toBe("johnSmith");
})


test('after failled login, username is "anonymous" and there is a warning', () => {
    _setUsername("teste")

    let warnBackup = console.warn 
    console.warn = jest.fn() 
    return login("abc", "123").then( () =>{
        expect(getUsername()).toEqual("anonymous");
        expect(_getToken()).toEqual([""]);
        expect(console.warn).toHaveBeenCalledWith('Failed login');
        console.warn = warnBackup // Restore console.warn for other tests
    })
})


test('after successful login username and token are updated', () => {
    _setUsername("teste")
    _setToken("tokenTest")

    return login("jestTests", "1jestTests2").then( () =>{
        expect(getUsername()).toEqual("jestTests");
        expect(_getToken()).not.toEqual([""]);
    })
})


test('during login call, username is empty, to signal clients to wait', async () => {
    //TODO
})

