# @cob/cobjs-recordm

This is the CobJs API Lib to interact with RecordM.

### Examples:

*Note:* By default, the target server is `https://learning.cultofbits.com` but you can switch in server by setting a new value in the `DEFAULT_CONFIGURATION`

```typescript
import { DefinitionsApi } from "@cob/cobjs-integrationm"

const definitionsApi = new DefinitionsApi()
const definitions = await definitionsApi.getAllDefinitions()
console.log(definitions)
```
