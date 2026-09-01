import { getServer } from "./server.js";
import { makeResultsUrl, normalizeAscending } from "./utils/urlHelper.js";
import axios from 'axios';

const rmDefinitionAggregation = async function (def, aggregation, query="*", from=0, size=10, sort="", ascending="asc", timezone) {

  const tz = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone

  const queryUrl = "/recordm/recordm/definitions/search?"
    + (typeof def == "number" ? "defId=" : "def=") + encodeURIComponent(def)

  const data = {
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

  const response = await axios.post(getServer() + queryUrl, data)

  const definitions = response.data._definitions
  const defId = definitions[Object.keys(definitions)[0]].id
  response.data.resultsUrl = makeResultsUrl("/recordm/", `#/definitions/${defId}/q=${encodeURIComponent(query)}`)

  if(sort) {
    // NOTE: this sort is client-side and only reorders the page of hits
    // returned by the server (up to `size`), not the full result set
    const direction = (normalizeAscending(ascending) === false) ? -1 : 1
    const sortValue = hit => Array.isArray(hit._source[sort]) ? hit._source[sort][0] : hit._source[sort]
    response.data.hits.hits = response.data.hits.hits.sort((a,b) => {
      return sortValue(a) > sortValue(b) ? direction : sortValue(a) < sortValue(b) ? -direction : 0
    })
  }

  return response.data
}

export default rmDefinitionAggregation
