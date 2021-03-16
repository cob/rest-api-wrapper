
/** @jest-environment node */
const { getUsername, _setUsername, auth } = require("../src/auth")
const { _getToken, _setToken } = require("../src/token")

test('before any auth getUsername returns "anonymous"', () => {
    expect(getUsername()).toBe("anonymous");
})


test('internaly you can use _setUsername (to be used with intemporal tokens)', () => {
    _setUsername("johnSmith")
    expect(getUsername()).toBe("johnSmith");
})


test('after failled auth, username is "anonymous" and there is a warning', done => {
    _setUsername("teste")

    let warnBackup = console.warn 
    console.warn = jest.fn() 
    return auth("abc", "123").then( () =>{
        expect(getUsername()).toEqual("anonymous");
        expect(_getToken()).toEqual("");
        expect(console.warn).toHaveBeenCalledWith('Failed auth');
        console.warn = warnBackup // Restore console.warn for other tests
        done()
    })
})


test('after successful auth username and token are updated', done => {
    //Make sure the values are not what is expected
    _setUsername("teste") 
    _setToken("tokenTest")

    // Login
    return auth("jestTests", "1jestTests2").then( () =>{
        expect(getUsername()).toEqual("jestTests");
        expect(_getToken().toString()).toMatch(/cob-username=jestTests/);
        done()
    })
    .catch( e => {
        done(e)
    })
})


// test('during auth call, username is empty, to signal clients to wait', async () => {
//     //TODO
// })

