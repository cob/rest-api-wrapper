import { getServer } from "@/server"
import { InstancesApi } from "@/recordm"
import { UIInstance } from "@/helpers/model/ui-instance"

const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

const rmGetInstance = function (instanceId: number): Promise<UIInstance> {
  const instancesApi = new InstancesApi()

  return instancesApi.getInstance(instanceId).then((response) => {
    const instance = response.data as UIInstance
    const id = instance.id

    //Add resultsUrl to response
    instance.resultsUrl = ResultURLTemplate.replace("__INSTANCE_ID__", `${id}`)
    if (typeof window === "undefined") {
      instance.resultsUrl = getServer() + instance.resultsUrl
    }

    return instance
  })
}

export default rmGetInstance
