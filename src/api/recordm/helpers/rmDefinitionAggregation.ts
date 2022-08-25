import { getServer } from "@/server"
import axios from "axios"

const QueryURLTemplate = "/recordm/recordm/definitions/search/advanced/__DEF_ID__?from=__FROM__&size=__SIZE__"
const ResultsURLTemplate = "/recordm/#/definitions/__DEF_ID__/q=__QUERY__"

const rmDefinitionAggregation = async function (
  defId: number,
  aggregation: object,
  query = "*",
  from = 0,
  size = 10,
  sort = "",
  ascending = ""
): Promise<any> {
  let queryUrl = QueryURLTemplate.replace("__DEF_ID__", `${defId}`)
    .replace("__FROM__", `${from}`)
    .replace("__SIZE__", `${size}`)

  const resultsUrl = ResultsURLTemplate.replace("__DEF_ID__", `${defId}`).replace("__QUERY__", query)

  if (sort) queryUrl += "&sort=" + sort
  if (ascending) queryUrl += "&ascending=" + ascending

  const data = {
    query: {
      query_string: {
        query: query,
        default_operator: "AND",
        analyze_wildcard: true,
      },
    },
    aggs: aggregation,
  }

  const response = await axios.post(getServer() + queryUrl, data)
  response.data.resultsUrl = resultsUrl

  if (typeof window == "undefined") {
    response.data.resultsUrl = getServer() + response.data.resultsUrl
  }

  return response.data
}

export default rmDefinitionAggregation
