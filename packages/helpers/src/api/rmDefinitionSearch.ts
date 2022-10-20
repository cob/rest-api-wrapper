import { getServer } from "@cob/cobjs-core";
import axios from "axios";

const QueryURLTemplate = "/recordm/recordm/definitions/search/name/__DEF_NAME__?from=__FROM__&size=__SIZE__&q=__QUERY__";
const ResultsURLTemplate = "/recordm/#/definitions/__DEF_ID__/q=__QUERY__";

export const rmDefinitionSearch = async function(
  definitionName: string,
  query = "*",
  from = 0,
  size = 0,
  sort = "",
  ascending?: boolean,
): Promise<any> {
  let queryUrl = QueryURLTemplate.replace("__DEF_NAME__", definitionName)
    .replace("__QUERY__", query)
    .replace("__FROM__", `${from}`)
    .replace("__SIZE__", `${size}`);

  if (sort) queryUrl += "&sort=" + sort;
  if (ascending) queryUrl += "&ascending=" + ascending;

  const response = await axios.get(getServer() + queryUrl);
  const def = response.data._definitions;
  const defId = def[Object.keys(def)[0]].id;

  //Add resultsUrl to response
  response.data.resultsUrl = getServer() + ResultsURLTemplate.replace("__DEF_ID__", defId).replace("__QUERY__", query);

  return response.data;
};