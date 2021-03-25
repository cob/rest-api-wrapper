const { getServer } = require("./server")
const axios = require('axios');

const QueryURLTemplate =  "/recordm/recordm/definitions/search/name/__DEF_NAME__?from=__FROM__&size=__SIZE__&q=__QUERY__"
const ResultsURLTemplate = "/recordm/#/definitions/__DEF_ID__/q=__QUERY__"

var rmDefinitionSearch = async function (definitionName, query="*", from=0, size=0, sort="", ascending="") {
  //TODO: verificar se o AXIOS permite especificar correctamente os query parameters 
  let queryUrl = QueryURLTemplate
    .replace('__DEF_NAME__',definitionName)
    .replace('__QUERY__',query)
    .replace('__FROM__',from)
    .replace('__SIZE__',size)

  if(sort) queryUrl += "&sort="+sort
  if(ascending) queryUrl += "&ascending="+ascending

  return axios
    .get(getServer() + queryUrl)
    .then(response => {
      let def = response.data._definitions
      let defId = def[Object.keys(def)[0]].id
      
      //Add resultsUrl to response
      response.data.resultsUrl = getServer() + ResultsURLTemplate
        .replace('__DEF_ID__', defId)
        .replace('__QUERY__', query)

      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

module.exports = { rmDefinitionSearch }