const { getServer } = require("./server")
const { _setToken, _getToken } = require("./token")
const axios = require('axios');

axios.defaults.withCredentials = true

const PostURL =  "/recordm/recordm/instances/integration"
const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

var rmAddInstance = async function (definitionName, values) {

  if(_getToken()) axios.defaults.headers.Cookie = _getToken() 

  let data = {
    "type": definitionName,
    "values": values
  }
  
  return axios
    .post(getServer() + PostURL, data)
    .then(response => {
      _setToken(response.headers["set-cookie"]) 
      
      let id = response.data.id
      //Add resultsUrl to response
      response.data.resultsUrl = ResultURLTemplate
        .replace('__INSTANCE_ID__', id)
      if(typeof window == "undefined") {
        response.data.resultsUrl = getServer() + response.data.resultsUrl
      }
      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

module.exports = { rmAddInstance }