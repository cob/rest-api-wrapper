import { getServer } from "./server.js";
import axios from 'axios';

const GetURL =  "/recordm/recordm/instances/"
const ResultsURLTemplate = "#/instance/__INSTANCE_ID__"

const rmGetInstance = async function (instanceId) {
  return axios.get(getServer() + GetURL + instanceId)
    .then(response => {
      response.data.resultsUrl = ResultsURLTemplate
        .replace('__INSTANCE_ID__', instanceId)
        
      if(typeof document == "undefined") {
        response.data.resultsUrl = getServer() + "/recordm/" + response.data.resultsUrl
      }

      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export default rmGetInstance