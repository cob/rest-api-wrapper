import { getServer } from "./server.js";
import { makeResultsUrl, normalizeAscending } from "./utils/urlHelper.js";
import axios from 'axios';

const rmDomainSearch = async function (domainId, query="*", from=0, size=0, sort="", ascending=undefined) {

  let queryUrl = `/recordm/recordm/domains/search/${encodeURIComponent(domainId)}`
    + `?from=${from}&size=${size}&q=${encodeURIComponent(query)}`

  const asc = normalizeAscending(ascending)
  if(sort) queryUrl += `&sort=${encodeURIComponent(sort)}`
  if(asc !== undefined) queryUrl += `&ascending=${asc}`

  const response = await axios.get(getServer() + queryUrl)

  response.data.resultsUrl = makeResultsUrl("/recordm/", `#/domain/${domainId}/q=${encodeURIComponent(query)}`)

  return response.data
}

export default rmDomainSearch
