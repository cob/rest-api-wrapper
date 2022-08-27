import auth from "../../../../src/api/userm/helpers/auth"
import umLoggedin from "../../../../src/api/userm/helpers/umLoggedin"

test('before any auth, umLoggedin returns "anonymous"', async () => {
  const result = await umLoggedin()
  expect(result).toEqual({ username: "anonymous" })
})

test("after successful auth umLoggedin returns that user and sets throtled username", async () => {
  let result = await auth({ username: "jestTests", password: "1jestTests2" })

  expect(result.username).toEqual("jestTests")
  expect(result.throtle).toEqual(false)

  result = await umLoggedin()
  expect(result.username).toEqual("jestTests")
  expect(result.throtle).toEqual(true)
})

test("setting a timelessTokens also sets throtled username", async () => {
  let response = await auth({
    token:
      "Pn2tDonpOqtIXvwPATQC1/AKGnYHRTeWVgPd4Jsjx3oviX9cVlIe/Q2yfHF0KVAyl0qixyggX/BsFjb+xtTLdE/wYoSKci29LzjZPHgtqgNeKbzYQS0ipAarKpy2x09R2JMmHxyZgLt0mb20fnptYg==",
  })

  expect(response.username).toEqual("jestTests")
  expect(response.throtle).toEqual(false)

  response = await umLoggedin()
  expect(response.username).toEqual("jestTests")
  expect(response.throtle).toEqual(true)
})
