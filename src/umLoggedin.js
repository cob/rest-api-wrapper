const { getServer } = require("./server")
const { _getToken, _setToken } = require("./token")
const axios = require('axios');

var umLoggedin = function () {
  axios.defaults.withCredentials = true

  axios.defaults.headers.Cookie = _getToken() 

  return axios
    .get(getServer() + "/userm/userm/user/loggedin")
    .then(response => {
      let newToken = response.headers["set-cookie"]
      _setToken(newToken)
      return response.data
    })
    .catch ( e => {
      throw (e)
    })
}

module.exports = { umLoggedin }