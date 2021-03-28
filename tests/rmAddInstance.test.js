/** @jest-environment node */
import auth from "../src/auth"
import rmAddInstance from "../src/rmAddInstance"
import rmDeleteInstance from "../src/rmDeleteInstance"


test('after creating a instance you can get it from server', done => {

    return auth("jestTests", "1jestTests2")
    .then( () => {
        rmAddInstance("Test Person", {"Name": "Mr. Jest"})
        .then(result => {
            expect(result.instanceLabel[0]).toEqual("Mr. Jest");
            rmDeleteInstance(result.id)
            .then( ()=> {
                done()
            })
        })
    })
})