import { getServer }  from "./server.js"
import axios from 'axios'

var _lastUmLoggedinResponse = {}
var _lastUmLoggedinResponseValidity = 0
var _currentPromise

var umLoggedin = function (throtle=true) {
  // debugger;
  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    return Promise.resolve({
      username:cob.app.getCurrentLoggedInUser(),
      groups:cob.app.getGroups()?.map(g => ({name:g})),
    })
  } else if ( throtle && Date.now() < _lastUmLoggedinResponseValidity ) {
    _lastUmLoggedinResponse.throtle = true
    return Promise.resolve(_lastUmLoggedinResponse)
  } else if ( throtle && _currentPromise && typeof _currentPromise.then === "function") {
    return _currentPromise.then( r => r)
  } else {
    return _currentPromise = axios.get(getServer() + "/userm/userm/user/loggedin")
    .then(response => {
        _lastUmLoggedinResponseValidity = Date.now() + 60000
        return _lastUmLoggedinResponse = response.data.loggedInUser 
      })
      .catch ( e => { 
    if(e.response.status == 403) {
          return Promise.resolve({username:"anonymous"})
        }
        else throw (e)
      })
  }
}

export default umLoggedin 