const { getServer } = require("./server")
const axios = require('axios');

var umLoggedin = function () {
  return axios
    .get(getServer() + "/userm/userm/user/loggedin")
    .then(response => {
      return response.data.loggedInUser
    })
    .catch ( e => {
      throw (e)
    })
}

module.exports = { umLoggedin }