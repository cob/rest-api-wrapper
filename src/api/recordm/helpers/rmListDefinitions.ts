import { getServer } from "@/server"
import axios from "axios"
import { DecoratedDefinition } from "@/api/recordm"

const GetUri = "/recordm/recordm/definitions"

const rmListDefinitions = async function (
  filter: { includeDisabled?: boolean; name?: string | null } = { includeDisabled: false, name: null }
): Promise<DecoratedDefinition[]> {
  const queryParams = [
    filter.includeDisabled ? `includeDisabled=true` : null,
    filter.name ? `name=${filter.name.replace(/\*/g, "%")}` : null,
  ]

  return (await axios.get(`${getServer() + GetUri}?${queryParams.filter((it) => !!it).join("&")}`)).data
}

export default rmListDefinitions
