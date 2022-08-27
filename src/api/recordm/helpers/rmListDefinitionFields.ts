import { DecoratedDefinition, DefinitionsApi } from "@/api/recordm"

const rmListDefinitionFields = async function (definitionId: number): Promise<DecoratedDefinition> {
  const definitionsApi = new DefinitionsApi()
  return (await definitionsApi.getDefinition(definitionId)).data
}

export default rmListDefinitionFields
