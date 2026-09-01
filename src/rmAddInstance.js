import { getServer } from "./server.js";
import { makeResultsUrl } from "./utils/urlHelper.js";
import axios from 'axios';

const rmAddInstance = async function (definitionName, values) {
  const data = {
    "type": definitionName,
    "values": values
  }

  const response = await axios.post(getServer() + "/recordm/recordm/instances/integration", data)

  response.data.resultsUrl = makeResultsUrl("/recordm/", `#/instance/${response.data.id}`)

  return response.data
}

export default rmAddInstance
