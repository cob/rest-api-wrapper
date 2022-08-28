// eslint-disable-next-line @typescript-eslint/no-var-requires

import { DefinitionsApi } from "@cob/cob-js"

async function main() {
  const definitionsApi = new DefinitionsApi().getAllDefinitions()
  let def = await definitionsApi.getAllDefinitions()
  console.log(def)
}

main()
