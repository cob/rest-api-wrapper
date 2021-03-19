
/** @jest-environment node */
import { rmDefinitionSearch } from "../src/rmDefinitionSearch"


test('for the learning server, "countries series" count for "Arab world" is 20', () => {
    rmDefinitionSearch("Countries Series", "Arab world")
    .then( result => {
        expect(result.hits.total.value).toBe(20)
    })
})


test('the resultsUrl is added to the response and in learning Countries defId=1', () => {
    rmDefinitionSearch("Countries")
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/1/q=*")
    })
})

test('default size return 0 instances', () => {
    rmDefinitionSearch("Countries")
    .then( result => {
        expect(result.hits.hits.length).toBe(0)
    })
})

test('search for a definition that does not exist logs an error and throws "Definition not found" ', done => {

    rmDefinitionSearch("invalidDefinition")
    .catch( e => {
        expect(e.response.data).toBe("Definition not found")
        done()
    })
})