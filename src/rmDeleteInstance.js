const { getServer } = require("./server")
const { _setToken, _getToken } = require("./token")
const axios = require('axios');

axios.defaults.withCredentials = true

const GetURL =  "/recordm/recordm/instances/__ID__??ignoreRefs=__FLAG__"

var rmDeleteInstance = async function (instanceId, ignoreRefs=false) {

    axios.defaults.headers.Cookie = _getToken() 

    let url = GetURL
    .replace('__ID__',instanceId)
    .replace('__FLAG__',ignoreRefs)

    return axios
      .delete(getServer() + url)
      .then(response => {
        _setToken(response.headers["set-cookie"])
        return response.data
      })
      .catch ( e => {
        throw(e)
      })
}

module.exports = { rmDeleteInstance }