import { getServer } from "@/server"
import axios from "axios"
import { Instance } from "@/api/recordm"

const PostURL = "/recordm/recordm/instances/integration"
const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

const rmAddInstance = function (definitionName: string, values: { [K: string]: string }): Promise<Instance> {
  const data = {
    type: definitionName,
    values: values,
  }

  return axios
    .post(getServer() + PostURL, data)
    .then((response) => {
      const id = response.data.id

      //Add resultsUrl to response
      response.data.resultsUrl = ResultURLTemplate.replace("__INSTANCE_ID__", id)

      if (typeof window === "undefined") {
        response.data.resultsUrl = getServer() + response.data.resultsUrl
      }

      return response.data
    })
    .catch((e) => {
      throw e
    })
}

export default rmAddInstance
