import rmListDefinitions from "../../../../src/api/recordm/helpers/rmListDefinitions"

test("Can list all active definitions with (no filter)", async () => {
  const definitions = await rmListDefinitions()
  expect(definitions.length).toBeGreaterThanOrEqual(3)

  const countriesName = definitions.sort((d1, f2) => d1.id - f2.id).map((def) => def.name)

  const expectedDefinitions = ["Countries", "Countries Series", "E-learning Contents"]
  expectedDefinitions.forEach((c: string) => expect(countriesName).toContain(c))
})

test("Can find definitions matching name", async () => {
  const definitions = await rmListDefinitions({ name: "Countries*" })
  expect(definitions).toHaveLength(2)

  expect(definitions.sort((d1, d2) => d1.id - d2.id).map((def) => def.name)).toStrictEqual([
    "Countries",
    "Countries Series",
  ])
})
