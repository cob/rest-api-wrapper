import { getServer } from "./server.js";
import axios from 'axios';

const QueryURLTemplate =  "/recordm/recordm/definitions/search/name/__DEF_NAME__?from=__FROM__&size=__SIZE__&q=__QUERY__&tz=__TIMEZONE__"
const ResultsURLTemplate = "#/definitions/__DEF_ID__/q=__QUERY__"

const rmDefinitionSearch = async function (definitionName, query="*", from=0, size=0, sort="", ascending="", timezone) {
 
  let tz = !timezone ? Intl.DateTimeFormat().resolvedOptions().timeZone : timezone

  //TODO: verificar se o AXIOS permite especificar correctamente os query parameters 
  let queryUrl = QueryURLTemplate
    .replace('__DEF_NAME__',definitionName)
    .replace('__QUERY__',encodeURIComponent(query))
    .replace('__FROM__',from)
    .replace('__SIZE__',size)
    .replace('__TIMEZONE__', tz)

  if(sort) queryUrl += "&sort="+sort
  if(ascending) queryUrl += "&ascending="+ascending

  return axios.get(getServer() + queryUrl)
    .then(response => {
      let def = response.data._definitions
      let defId = def[Object.keys(def)[0]].id
      
      //Add resultsUrl to response
      response.data.resultsUrl = ResultsURLTemplate
        .replace('__DEF_ID__', defId)
        .replace('__QUERY__', encodeURIComponent(query))
        
      if(typeof document == "undefined") {
        response.data.resultsUrl = getServer() + "/recordm/" + response.data.resultsUrl
      }

      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export default rmDefinitionSearch 