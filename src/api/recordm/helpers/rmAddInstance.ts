import { getServer } from "@/server"
import { IntegrationApi } from "@/api/recordm"
import { UIInstance } from "@/api/recordm/helpers/model/ui-instance"

const ResultURLTemplate = "/recordm/index.html#/instance/__INSTANCE_ID__"

const rmAddInstance = function (definitionName: string, values: { [K: string]: string }): Promise<UIInstance> {
  const data = {
    type: definitionName,
    values: values,
  }

  const integrationApi = new IntegrationApi()
  return integrationApi.add(data).then((response) => {
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

export default rmAddInstance
