
/** @jest-environment node */
import dmEquipmentSearch from "../../src/dmEquipmentSearch.js"

// Skipped: these tests depend on the confm service being available on the
// learning server, and /confm/confm/search currently answers 404 there.
// Re-enable (test.skip -> test) once confm is back on learning.

test.skip('for the learning server, CPEs of room 1 count is 2', () => {
    return dmEquipmentSearch("*room-1")
    .then( result => {
        expect(result.hits.total.value).toBe(2)
    })
})

test.skip('the resultsUrl is added to the response and in learning Countries defId=1', () => {
    return dmEquipmentSearch("*room-1")
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/confm/#/search/q=*room-1")
    })
})

test.skip('default size return 0 instances', () => {
    return dmEquipmentSearch("*")
    .then( result => {
        expect(result.hits.hits.length).toBe(0)
    })
})
