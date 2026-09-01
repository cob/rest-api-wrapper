import { getServer } from "./server.js";
import axios from 'axios';

const rmDeleteInstance = async function (instanceId, ignoreRefs=false) {
  const url = `/recordm/recordm/instances/${encodeURIComponent(instanceId)}?ignoreRefs=${ignoreRefs}`

  const response = await axios.delete(getServer() + url)
  return response.data
}

export default rmDeleteInstance
