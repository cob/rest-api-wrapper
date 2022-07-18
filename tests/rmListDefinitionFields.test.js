/** @jest-environment node */

import rmListDefinitionFields from '../src/rmListDefinitionFields.js'

test('Can retrieve definition fields', async () => {
    let definitionDetails = await rmListDefinitionFields(7);
    
    expect(definitionDetails.fieldDefinitions).toHaveLength(6)

    expect(definitionDetails.fieldDefinitions.map(fd => fd.name))
        .toStrictEqual(["Metadata", "Content", "Tasks", "Proposed Changes", "Evaluations", "Files"])
})