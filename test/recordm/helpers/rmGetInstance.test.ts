import rmGetInstance from "../../../src/recordm/helpers/rmGetInstance"

test("instance 556 is Aruba (ABW)", async () => {
  const result = await rmGetInstance(556)
  expect(result["instanceLabel"]).toEqual(["ABW"])
})
