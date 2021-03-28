
/** @jest-environment node */
import rmGetInstance from "../src/rmGetInstance"


test('instance 556 is Aruba (ABW)', done => {
    rmGetInstance(556)
    .then( result => {
        expect(result["instanceLabel"]).toEqual(["ABW"])
        done()
    })
})