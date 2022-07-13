/** @jest-environment node */

import rmListDefinitions from '../src/rmListDefinitions.js'

test('Can list all definitions with no filter', async () => {

    let definitions = await rmListDefinitions();
    expect(definitions).toHaveLength(4)

    expect(definitions.sort((e1, e2) => e1.id < e2.id).map(def => def.name))
        .toStrictEqual(['Countries', 'Countries Series', 'Dashboard', 'E-learning Contents'])
})

test('Can list all definitions with filter', async () => {

    let definitions = await rmListDefinitions({name: 'Countries*'});
    expect(definitions).toHaveLength(2)

    expect(definitions.sort((e1, e2) => e1.id < e2.id).map(def => def.name))
        .toStrictEqual(['Countries', 'Countries Series'])
})

test('Can list all definitions with filter', async () => {

    let definitions = await rmListDefinitions({name: 'Countries*Ser*'});
    expect(definitions).toHaveLength(1)

    expect(definitions.sort((e1, e2) => e1.id < e2.id).map(def => def.name))
        .toStrictEqual(['Countries Series'])
})