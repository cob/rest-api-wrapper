import { DecoratedDefinition, DefinitionsApi } from '@cob/cobjs-recordm'

export const rmListDefinitions = async function (
  filter: { includeDisabled?: boolean; name?: string | null } = { includeDisabled: false, name: null }
): Promise<DecoratedDefinition[]> {
  const definitionsApi = new DefinitionsApi()

  return (
    await definitionsApi.getAllDefinitions(
      filter.includeDisabled,
      filter.name ? filter.name.replace(/\*/g, "%") : undefined
    )
  ).data
}
