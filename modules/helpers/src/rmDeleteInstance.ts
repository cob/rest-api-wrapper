import { getServer } from '@cob/cobjs-core'
import axios from "axios"

const GetURL = "/recordm/recordm/instances/__ID__??ignoreRefs=__FLAG__"

export const rmDeleteInstance = async function (instanceId: number, ignoreRefs = false): Promise<void> {
  const url = GetURL.replace("__ID__", `${instanceId}`).replace("__FLAG__", `${ignoreRefs}`)

  await axios.delete(getServer() + url)
  return
}
