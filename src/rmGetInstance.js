const { getServer } = require("./server")
const { _setToken, _getToken } = require("./token")
const axios = require('axios');

axios.defaults.withCredentials = true

const GetURL =  "/recordm/recordm/instances/"
const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

var rmGetInstance = async function (instanceId) {

  if(_getToken()) axios.defaults.headers.Cookie = _getToken() 

  return axios
    .get(getServer() + GetURL + instanceId)
    .then(response => {
      _setToken(response.headers["set-cookie"])
      response.data.resultsUrl = GetURL + instanceId
      if(typeof window == "undefined") {
        response.data.resultsUrl = getServer() + response.data.resultsUrl
      }
      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

module.exports = { rmGetInstance }