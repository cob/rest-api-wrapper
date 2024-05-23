import { getServer } from "./server.js";
import axios from 'axios';

const QueryURLTemplate =  "/recordm/recordm/definitions/search?"
const ResultsURLTemplate = "#/definitions/__DEF_ID__/q=__QUERY__"

const rmDefinitionAggregation = function (def, aggregation, query="*", from=0, size=10, sort="", ascending="asc", timezone) {
 
  let tz = timezone === null || timezone === undefined ? Intl.DateTimeFormat().resolvedOptions().timeZone : timezone

  let queryUrl = QueryURLTemplate + (typeof def == "number" ? "defId=" : "def=") + def

  let data = {
    "query": {
      "query_string": {
        "query": query,
        "time_zone" : tz,
        "default_operator": "AND",
        "analyze_wildcard": true
      }
    },
    "from": from,
    "size": size,
    "aggs": aggregation
  }

  return axios.post(getServer() + queryUrl, data)
    .then(response => {
      //Add resultsUrl to response
      const indexName = Object.keys(response.data._definitions)[0]
      let resultsUrl = ResultsURLTemplate
        .replace('__DEF_ID__', response.data._definitions[indexName].id)
        .replace('__QUERY__', encodeURIComponent(query))
      response.data.resultsUrl = resultsUrl
        
      if(typeof document == "undefined") {
        response.data.resultsUrl = getServer() + "/recordm/" + response.data.resultsUrl
      }

      if(sort) {
        const direction = (ascending == "asc") ? 1 : -1
        response.data.hits.hits = response.data.hits.hits.sort((a,b) => {
          return a._source[sort] > b._source[sort] ? direction : a._source[sort] < b._source[sort] ? -direction : 0
        })
      }

      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export default rmDefinitionAggregation 