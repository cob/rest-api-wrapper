/** @jest-environment node */

import rmListDefinitions from '../src/rmListDefinitions.js'

test('Can list all active definitions with (no filter)', async () => {

    let definitions = await rmListDefinitions();
    expect(definitions.length).toBeGreaterThanOrEqual(3)

    const countriesName = definitions.sort((e1, e2) => e1.id < e2.id).map(def => def.name);

    ['Countries', 'Countries Series', 'E-learning Contents']
        .forEach(c => expect(countriesName).toContain(c))
})

test('Can find definitions matching name', async () => {

    let definitions = await rmListDefinitions({name: 'Countries*'});
    expect(definitions).toHaveLength(2)

    expect(definitions.sort((e1, e2) => e1.id < e2.id).map(def => def.name))
        .toStrictEqual(['Countries', 'Countries Series'])
})
