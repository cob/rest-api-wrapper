import { getServer } from "./server.js";
import axios from 'axios';

const dmEquipmentSearch = async function (query="*", from=0, size=0) {

  const queryUrl = `/confm/confm/search?from=${from}&size=${size}&q=${encodeURIComponent(query)}`

  const response = await axios.get(getServer() + queryUrl)

  // unlike the recordm functions, this URL always carries the server prefix
  // (in a browser getServer() is "" and it stays relative)
  response.data.resultsUrl = getServer() + `/confm/#/search/q=${encodeURIComponent(query)}`

  return response.data
}

export default dmEquipmentSearch
