import { getServer } from "./server";
import axios from 'axios';

const GetURL =  "/recordm/recordm/instances/__ID__??ignoreRefs=__FLAG__"

var rmDeleteInstance = async function (instanceId, ignoreRefs=false) {
  let url = GetURL
  .replace('__ID__',instanceId)
  .replace('__FLAG__',ignoreRefs)

  return axios.delete(getServer() + url)
    .then(response => {
      return response.data
    })
    .catch ( e => {
      throw(e)
    })
}

export { rmDeleteInstance }