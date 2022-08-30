import { getServer } from '@cob/cobjs-core'
import axios from "axios"

const QueryURLTemplate = "/recordm/recordm/domains/search/__DOMAIN_ID__?from=0&size=0&q=__QUERY__"
const ResultsURLTemplate = "/recordm/#/domain/__DOMAIN_ID__/q=__QUERY__"

const rmDomainSearch = async function (
  domainId: number,
  query = "*",
  from = 0,
  size = 0,
  sort = "",
  ascending = false
): Promise<any> {
  let queryUrl = QueryURLTemplate.replace("__DOMAIN_ID__", `${domainId}`)
    .replace("__QUERY__", query)
    .replace("__FROM__", `${from}`)
    .replace("__SIZE__", `${size}`)

  if (sort) queryUrl += "&sort=" + sort
  if (ascending) queryUrl += "&ascending=" + ascending

  const response = await axios.get(getServer() + queryUrl)

  response.data.resultsUrl = ResultsURLTemplate.replace("__DOMAIN_ID__", `${domainId}`).replace("__QUERY__", query)

  if (typeof window == "undefined") {
    response.data.resultsUrl = getServer() + response.data.resultsUrl
  }

  return response.data
}

export default rmDomainSearch
