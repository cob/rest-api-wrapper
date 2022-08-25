import rmListDefinitionFields from "../../../../src/api/recordm/helpers/rmListDefinitionFields";

test("Can retrieve definition fields", async () => {
  let definitionDetails = await rmListDefinitionFields(7);

  expect(definitionDetails.fieldDefinitions).toHaveLength(6);

  expect(definitionDetails.fieldDefinitions.map((fd) => fd.name))
    .toStrictEqual(["Metadata", "Content", "Tasks", "Proposed Changes", "Evaluations", "Files"]);
});
