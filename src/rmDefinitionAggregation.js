import { getServer } from "./server";
import axios from 'axios';

const QueryURLTemplate =  "/recordm/recordm/definitions/search/advanced/__DEF_ID__?from=__FROM__&size=__SIZE__"
const ResultsURLTemplate = "/recordm/#/definitions/__DEF_ID__/q=__QUERY__"

var rmDefinitionAggregation = function (defId, aggregation, query="*", from=0, size=10, sort="", ascending="") {
  let queryUrl = QueryURLTemplate
    .replace('__DEF_ID__',defId)
    .replace('__FROM__',from)
    .replace('__SIZE__',size)

  let resultsUrl = ResultsURLTemplate
    .replace('__DEF_ID__', defId)
    .replace('__QUERY__', query)

  if(sort) queryUrl += "&sort="+sort
  if(ascending) queryUrl += "&ascending="+ascending

  let data = {
    "query": {
      "query_string": {
        "query": query,
        "default_operator": "AND",
        "analyze_wildcard": true
      }
    },
    "aggs": aggregation
  }

  return axios.post(getServer() + queryUrl, data)
    .then(response => {
      //Add resultsUrl to response
      response.data.resultsUrl = resultsUrl
      if(typeof window == "undefined") {
        response.data.resultsUrl = getServer() + response.data.resultsUrl
      }
      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export { rmDefinitionAggregation }