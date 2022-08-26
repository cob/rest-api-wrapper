import rmListDefinitions from "../../../../src/api/recordm/helpers/rmListDefinitions";

test("Can list all active definitions with (no filter)", async () => {
  let definitions = await rmListDefinitions();
  expect(definitions.length).toBeGreaterThanOrEqual(3);

  const countriesName = definitions.sort((d1, f2) => d1.id - f2.id).map((def) => def.name)

  ;["Countries", "Countries Series", "E-learning Contents"].forEach((c) => expect(countriesName).toContain(c));
});

test("Can find definitions matching name", async () => {
  let definitions = await rmListDefinitions({ name: "Countries*" });
  expect(definitions).toHaveLength(2);

  expect(definitions.sort((d1, d2) => d1.id - d2.id).map((def) => def.name))
    .toStrictEqual(["Countries", "Countries Series"]);
});