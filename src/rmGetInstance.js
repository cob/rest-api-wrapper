import { getServer } from "./server.js";
import { makeResultsUrl } from "./utils/urlHelper.js";
import axios from 'axios';

const rmGetInstance = async function (instanceId) {
  const response = await axios.get(getServer() + "/recordm/recordm/instances/" + encodeURIComponent(instanceId))

  response.data.resultsUrl = makeResultsUrl("/recordm/", `#/instance/${instanceId}`)

  return response.data
}

export default rmGetInstance
