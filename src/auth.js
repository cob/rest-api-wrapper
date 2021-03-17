const { getServer } = require("./server")
const { _setToken, _getToken, _isTimelessToken } = require("./token")
const axios = require('axios');

var _username = "anonymous"
if (typeof document !== 'object') {
  global._username = _username
}

var auth = function (username, password) {
  // start by reseting _username, wich signal clients momentarily to way for decision
  _username = "" 
  axios.defaults.withCredentials = true

  return axios
    .post(getServer() + "/recordm/security/auth", {
      username: username,
      password: password
    })
    .then(response => {
      _username = username
      let newToken = response.headers["set-cookie"]
      _setToken(newToken)
      return username
    })
    .catch ( e => {
      console.warn("Failed auth")
      _username = "anonymous" 
      _setToken("")
    })
}

var getUsername = function() {
  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    return cob.app.getCurrentLoggedInUser()
  } else if (_isTimelessToken()) {
    return ("timelessToken_"+_getToken().substring(0,4))
  } else {
    return _username
  }
}

var _setUsername = function(username) {
  _username = username
}

module.exports = { auth, getUsername, _setUsername }