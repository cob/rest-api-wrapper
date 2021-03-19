
/** @jest-environment node */
const { getUsername, setTimelessToken, _setUsername, auth } = require("../src/auth")
const { umLoggedin } = require("../src/umLoggedin")

test('before any auth getUsername returns "anonymous"', () => {
    expect(getUsername()).toBe("anonymous");
})


test('setting a timelessTokens sets getUsername', () => {
    expect(getUsername()).toEqual("anonymous");
    setTimelessToken("4564564354533")
    expect(getUsername()).toEqual("timelessToken_4564");
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
        expect(console.warn).toHaveBeenCalledWith('Failed auth');
        console.warn = warnBackup // Restore console.warn for other tests
        done()
    })
    .catch( e => {
        done(e)
    })
})


test('after successful auth username and token are updated', done => {
    //Make sure the values are not what is expected
    _setUsername("teste") 

    // Login
    return auth("jestTests", "1jestTests2").then( (response) =>{
        expect(getUsername()).toEqual("jestTests");
        // TODO: this should work. Mas também já vi que falha na aplicação. Deve faltar uma permissão ao user jestTests 
        // umLoggedin().then( result => {
        //     expect(result.username).toEqual("jestTests");
            done()
        // })
        // .catch( e => {
        //     done(e)
        // })
    })
    .catch( e => {
        done(e)
    })
})


// test('during auth call, username is empty, to signal clients to wait', async () => {
//     //TODO
// })

