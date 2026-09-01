/** @jest-environment node */
import auth from "../../src/auth.js"
import umLoggedin from "../../src/umLoggedin.js"

// Nota por questões de concorrência de autenticações estes testes só funcionam 1 de cada vez (colocando test.only para o que se quiser testar)

const TEST_USERNAME = process.env.COB_TEST_USERNAME || "jestTests"
const TEST_PASSWORD = process.env.COB_TEST_PASSWORD || "1jestTests2"
// Timeless tokens must not live in the repository: provide one via env var to run the token test
const TEST_TOKEN = process.env.COB_TEST_TOKEN

test('before any auth, umLoggedin returns "anonymous"', async () => {
    let result = await umLoggedin()
    expect(result).toEqual({username:"anonymous"})
})


test('after successful auth umLoggedin returns that user and sets throtled username', async () => {
    let result = await auth({ username:TEST_USERNAME, password:TEST_PASSWORD })
    expect(result.username).toEqual(TEST_USERNAME);
    expect(result.throtle).toBeUndefined()
    result = await umLoggedin()
    expect(result.username).toEqual(TEST_USERNAME)
    expect(result.throtle).toEqual(true)
})


const tokenTest = TEST_TOKEN ? test : test.skip
tokenTest('setting a timelessTokens also sets throtled username', async () => {
    let response = await auth({token:TEST_TOKEN})
    expect(response.username).toEqual(TEST_USERNAME)
    expect(response.throtle).toBeUndefined()
    response = await umLoggedin()
    expect(response.username).toEqual(TEST_USERNAME)
    expect(response.throtle).toEqual(true)
})


// TODO
// test('after logout umLoggedin will return "anonymous" ', async () => {
//     await logout()
//     let result = await umLoggedin()
//     expect(result.username).toBe("anonymous")
// })
