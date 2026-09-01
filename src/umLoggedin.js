import {getServer} from "./server.js"
import axios from 'axios'

let _lastUmLoggedinResponse = {}
let _lastUmLoggedinResponseValidity = 0
let _currentPromise

const umLoggedin = function (throtle=true) {
  // tolerate the legacy object form umLoggedin({throtle: false})
  if (typeof throtle === 'object' && throtle !== null) {
    throtle = throtle.throtle !== false
  }

  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    return Promise.resolve({
      username:cob.app.getCurrentLoggedInUser(),
      groups:(cob.app.getGroups()?cob.app.getGroups().map(g => ({name:g})):{}),
    })

  } else if ( throtle && Date.now() < _lastUmLoggedinResponseValidity ) {
    return Promise.resolve({ ..._lastUmLoggedinResponse, throtle: true })

  } else if ( throtle && _currentPromise ) {
    return _currentPromise

  } else {
    const request = axios.get(getServer() + "/userm/userm/user/loggedin")
      .then(response => {
        _lastUmLoggedinResponseValidity = Date.now() + 60000
        return _lastUmLoggedinResponse = response.data.loggedInUser
      })
      .catch ( e => {
        if (e.response && e.response.status === 403) {
          return {username: "anonymous"}
        }
        throw e
      })
      .finally(() => {
        // allow a fresh request once this one settles, otherwise the
        // 60s cache validity is never re-evaluated
        if (_currentPromise === request) _currentPromise = undefined
      })
    _currentPromise = request
    return request
  }
}

export default umLoggedin
