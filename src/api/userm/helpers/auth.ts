import { getServer } from "@/server"
import umLoggedin from "@/api/userm/helpers/umLoggedin"

import axios from "axios"
import { CookieJar } from "tough-cookie"
import * as axiosCookieJarSupport from "axios-cookiejar-support"

let cookieJar: CookieJar

// If in node use tough-cookie for axios jar
if (axiosCookieJarSupport?.wrapper) {
  axiosCookieJarSupport.wrapper(axios)
  cookieJar = new CookieJar()
  axios.defaults.jar = cookieJar
}

axios.defaults.withCredentials = true

const auth = function ({ username, password, token }: { username?: string; password?: string; token?: string }) {
  if (username && password) {
    return axios
      .post(getServer() + "/recordm/security/auth", {
        username: username,
        password: password,
      })
      .then(() => umLoggedin({ throtle: false }))
      .catch((e) => {
        throw e
      })
  } else if (token) {
    if (cob?.app?.getCurrentLoggedInUser) {
      console.warn("You should only use timeless tokens in backend scripts, not browser. Ignoring")
    }

    cookieJar.setCookieSync("cobtoken=" + token + ";", getServer())
    return Promise.resolve(umLoggedin({ throtle: false }))
  }

  return Promise.reject("Specify a username/password OR a token")
}

export default auth