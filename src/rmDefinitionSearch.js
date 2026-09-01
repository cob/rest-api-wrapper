import { getServer } from "./server.js";
import { makeResultsUrl, normalizeAscending } from "./utils/urlHelper.js";
import axios from 'axios';

const rmDefinitionSearch = async function (definitionName, query="*", from=0, size=0, sort="", ascending=undefined, timezone) {

  const tz = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone

  let queryUrl = `/recordm/recordm/definitions/search/name/${encodeURIComponent(definitionName)}`
    + `?from=${from}&size=${size}&q=${encodeURIComponent(query)}&tz=${encodeURIComponent(tz)}`

  const asc = normalizeAscending(ascending)
  if(sort) queryUrl += `&sort=${encodeURIComponent(sort)}`
  if(asc !== undefined) queryUrl += `&ascending=${asc}`

  const response = await axios.get(getServer() + queryUrl)

  const definitions = response.data._definitions
  const defId = definitions[Object.keys(definitions)[0]].id
  response.data.resultsUrl = makeResultsUrl("/recordm/", `#/definitions/${defId}/q=${encodeURIComponent(query)}`)

  return response.data
}

export default rmDefinitionSearch
