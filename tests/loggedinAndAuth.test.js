/** @jest-environment node */
import auth from "../src/auth.js"
import umLoggedin from "../src/umLoggedin.js"

test('before any auth, umLoggedin returns "anonymous"', async () => {
    let result = await umLoggedin()
    expect(result).toEqual({username:"anonymous"})
})


test('after successful auth umLoggedin returns that user and sets throtled username', async () => {
    let result = await auth({ username:"jestTests", password:"1jestTests2" })
    expect(result.username).toEqual("jestTests");
    expect(result.throtle).toBeUndefined()
    result = await umLoggedin()
    expect(result.username).toEqual("jestTests")
    expect(result.throtle).toEqual(true)
})


test('setting a timelessTokens also sets throtled username', async () => {
    let response = await auth({token:"Pn2tDonpOqtIXvwPATQC1/AKGnYHRTeWVgPd4Jsjx3oviX9cVlIe/Q2yfHF0KVAyl0qixyggX/BsFjb+xtTLdE/wYoSKci29LzjZPHgtqgNeKbzYQS0ipAarKpy2x09R2JMmHxyZgLt0mb20fnptYg=="})
    expect(response.username).toEqual("jestTests")
    expect(response.throtle).toBeUndefined()
    response = await umLoggedin()
    expect(response.username).toEqual("jestTests")
    expect(response.throtle).toEqual(true)
})


// TODO
// test('after logout umLoggedin will return "anonymous" ', async () => {
//     await logout()
//     let result = await umLoggedin()
//     expect(result.username).toBe("anonymous")
// })