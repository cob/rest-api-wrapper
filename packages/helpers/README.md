# @cob/cobjs-helpers

This is the CobJs API Lib that provides some basic helper functions: 

### Examples:

*Note:* By default, the target server is `https://learning.cultofbits.com` but you can switch in server by setting a new value in the `DEFAULT_CONFIGURATION`

```typescript
import { rmListDefinitions } from "@cob/cobjs-helpers";

const definitions = await rmListDefinitions({ name: "Countries*" })
console.log(definitions)

```
