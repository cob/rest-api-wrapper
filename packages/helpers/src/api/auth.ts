import { getServer, cookieJar } from '@cob/cobjs-core'
import { umLoggedin } from "./umLoggedin"
import axios from "axios"

export const auth = function ({ username, password, token }: { username?: string; password?: string; token?: string }) {
  if (username && password) {
    return axios
      .post(getServer() + "/userm/security/auth", {
        username: username,
        password: password,
      })
      .then(() => umLoggedin({ throtle: false }))
      .catch((e) => {
        throw e
      })
  } else if (token) {
    if (typeof cob !== 'undefined' && cob?.app?.getCurrentLoggedInUser) {
      console.warn("You should only use timeless tokens in backend scripts, not browser. Ignoring")
    }

    cookieJar.setCookieSync("cobtoken=" + token + ";", getServer())
    return umLoggedin({ throtle: false })
  }

  return Promise.reject("Specify a username/password OR a token")
}