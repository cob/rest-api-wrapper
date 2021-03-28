import { getServer } from "./server"
import umLoggedin from "../src/umLoggedin.js"

import axios from 'axios'
import { CookieJar } from 'tough-cookie'
import axiosCookieJarSupport from 'axios-cookiejar-support'

var cookieJar
// If in node use tough-cookie for axios jar
if(typeof axiosCookieJarSupport.default === "function") {
  axiosCookieJarSupport.default(axios)
  cookieJar = new CookieJar()
  axios.defaults.jar = cookieJar
  axios.defaults.ignoreCookieErrors = true
}
axios.defaults.withCredentials = true

var auth = function ({username, password, token}) {
  if(username) return axios
    .post(getServer() + "/recordm/security/auth", {
      username: username,
      password: password
    })
    .then( r => umLoggedin(false) )
    .catch( e => { throw e })
  else if(token) {
    if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
      console.warn('You should only use timeless tokens in backend scripts, not browser. Ignoring');
    }
    //TODO: test
    cookieJar.setCookieSync('cobtoken=' + token + ';', getServer())
    return Promise.resolve( umLoggedin(false) )
  }
  return Promise.reject("Specify a username/password OR a token")
}

export default auth 