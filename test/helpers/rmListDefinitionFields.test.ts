import rmListDefinitionFields from "../../modules/helpers/src/rmListDefinitionFields"

test("Can retrieve definition fields", async () => {
  const definitionDetails = await rmListDefinitionFields(7)

  expect(definitionDetails.fieldDefinitions).toHaveLength(6)

  expect(definitionDetails.fieldDefinitions.map((fd) => fd.name)).toStrictEqual([
    "Metadata",
    "Content",
    "Tasks",
    "Proposed Changes",
    "Evaluations",
    "Files",
  ])
})
