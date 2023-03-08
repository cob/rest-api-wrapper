import { getServer } from "./server.js";
import axios from 'axios';

const PostURL =  "/recordm/recordm/instances/integration"
const ResultURLTemplate = "#/instance/__INSTANCE_ID__"

const rmAddInstance = async function (definitionName, values) {
  let data = {
    "type": definitionName,
    "values": values
  }
  
  return axios.post(getServer() + PostURL, data)
    .then(response => {
      let id = response.data.id

      //Add resultsUrl to response
      response.data.resultsUrl = ResultURLTemplate
        .replace('__INSTANCE_ID__', id)

      if(typeof window == "undefined") {
        response.data.resultsUrl = getServer() + response.data.resultsUrl
      }

      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export default rmAddInstance