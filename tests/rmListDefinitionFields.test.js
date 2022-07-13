/** @jest-environment node */

import rmListDefinitionFields from '../src/rmListDefinitionFields.js'

test('Can retrieve definition fields', async () => {
    let definitionDetails = await rmListDefinitionFields(1);
    
    expect(definitionDetails.fieldDefinitions).toHaveLength(5)
})