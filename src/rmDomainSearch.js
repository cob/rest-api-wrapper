const { getServer } = require("./server")
const { _setToken, _getToken } = require("./token")
const axios = require('axios');

axios.defaults.withCredentials = true

const QueryURLTemplate =  "/recordm/recordm/domains/search/__DOMAIN_ID__?from=0&size=0&q=__QUERY__"
const ResultsURLTemplate = "/recordm/#/domain/__DOMAIN_ID__/q=__QUERY__"

var rmDomainSearch = async function (domainId, query="*", from=0, size=0,sort="", ascending=false) {

    if(_getToken()) axios.defaults.headers.Cookie = _getToken() 

    let queryUrl = QueryURLTemplate
        .replace('__DOMAIN_ID__',domainId)
        .replace('__QUERY__',query)

    return axios
      .get(getServer() + queryUrl)
      .then(response => {
        _setToken(response.headers["set-cookie"])
        let def = response.data._definitions
        let defId = def[Object.keys(def)[0]].id
        
        //Add resultsUrl to response
        response.data.resultsUrl = ResultsURLTemplate
          .replace('__DOMAIN_ID__', domainId)
          .replace('__QUERY__', query);
        if(typeof window == "undefined") {
          response.data.resultsUrl = getServer() + response.data.resultsUrl
        }
  
        return response.data
      })
      .catch ( e => {
        throw(e)
      })
}

module.exports = { rmDomainSearch }