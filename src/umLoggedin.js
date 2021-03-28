import { getServer }  from "./server"
import axios from 'axios'

var _lastUmLoggedinResponse = {}
var _lastUmLoggedinResponseValidity = 0

var umLoggedin = function (throtle=true) {
  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    return Promise.resolve(cob.app.getCurrentLoggedInUser())
  } else if ( throtle && Date.now() < _lastUmLoggedinResponseValidity ) {
    _lastUmLoggedinResponse.throtle = true
    return Promise.resolve(_lastUmLoggedinResponse)
  } else {
    return axios.get(getServer() + "/userm/userm/user/loggedin")
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