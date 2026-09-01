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

const auth = function ({username, password, token}) {
  if(username) {
    return axios
        .post(getServer() + "/recordm/security/auth", {
            username: username,
            password: password
        })
        .then(r => umLoggedin({throtle: false}))
        .catch(e => { throw e })

  } else if(token) {
    if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
      console.warn('You should only use timeless tokens in backend scripts, not browser. Ignoring');
    }

    //TODO: test
    cookieJar.setCookieSync('cobtoken=' + token + ';', getServer())
    return Promise.resolve( umLoggedin({throtle:false}) )
  }
  return Promise.reject("Specify a username/password OR a token")
}

export default auth 