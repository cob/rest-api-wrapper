import { getServer } from "@/server"
import axios from "axios"
import { DecoratedDefinition } from "@/api/recordm"

const GetUri = "/recordm/recordm/definitions/__ID__"

const rmListDefinitionFields = async function (definitionId: number): Promise<DecoratedDefinition> {
  const url = getServer() + GetUri.replace("__ID__", `${definitionId}`)
  return (await axios.get(url)).data
}

export default rmListDefinitionFields
