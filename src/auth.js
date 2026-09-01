import { getServer } from "./server.js"
import umLoggedin from "../src/umLoggedin.js"

import axios from 'axios'
import * as toughCookie from 'tough-cookie'
import * as axiosCookieJarSupport from 'axios-cookiejar-support'

let cookieJar

// If in node use tough-cookie for axios jar (in a browser cookies are handled by the browser itself
// and these two modules are stubbed out of the webpack bundles)
if(typeof document !== 'object' && typeof axiosCookieJarSupport.wrapper === "function") {
  axiosCookieJarSupport.wrapper(axios)
  cookieJar = new toughCookie.CookieJar()
  axios.defaults.jar = cookieJar
}

axios.defaults.withCredentials = true

const auth = function ({username, password, token} = {}) {
  if(username) {
    return axios
        .post(getServer() + "/recordm/security/auth", {
            username: username,
            password: password
        })
        .then(() => umLoggedin(false))
        .catch(e => { throw e })

  } else if(token) {
    if(cookieJar) {
      cookieJar.setCookieSync('cobtoken=' + token + ';', getServer())
    } else {
      // no cookie jar means we're in a browser: timeless tokens belong in backend scripts
      console.warn('Timeless tokens should only be used in backend scripts, not in a browser. Ignoring the token.');
    }
    return umLoggedin(false)
  }
  return Promise.reject(new Error("Specify a username/password OR a token"))
}

export default auth
