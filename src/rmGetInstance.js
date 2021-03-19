import { getServer } from "./server";
import axios from 'axios';

const GetURL =  "/recordm/recordm/instances/"
const ResultsURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

var rmGetInstance = async function (instanceId) {
  return axios.get(getServer() + GetURL + instanceId)
    .then(response => {
      response.data.resultsUrl = ResultsURLTemplate
        .replace('__INSTANCE_ID__', instanceId)
        
      if(typeof window == "undefined") {
        response.data.resultsUrl = getServer() + response.data.resultsUrl
      }
      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export { rmGetInstance }