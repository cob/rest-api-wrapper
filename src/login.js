const { getServer } = require("./server")
const { _setToken } = require("./token")
const axios = require('axios');

var _username = "anonymous"

var login = async function (username, password) {
  // start by reseting _username, wich signal clients momentarily to way for decision
  _username = "" 

  await axios
    .post(getServer() + "/recordm/security/auth", {
      username: username,
      password: password
    })
    .then(response => {
      _username = username
      let newToken = response.headers["set-cookie"]
      _setToken(newToken)
    })
    .catch ( e => {
      console.warn("Failed login")
      _username = "anonymous" 
      _setToken("")
    })
  return _username;
}

var getUsername = function() {
  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    return cob.app.getCurrentLoggedInUser()
  } else {
    return _username
  }
}

var _setUsername = function(username) {
  _username = username
}

module.exports = { login, getUsername, _setUsername }