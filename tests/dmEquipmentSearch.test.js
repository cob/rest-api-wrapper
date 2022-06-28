
/** @jest-environment node */
import dmEquipmentSearch from "../src/dmEquipmentSearch.js"


test('for the learning server, CPEs of room 1 count is 2', () => {
    dmEquipmentSearch("*room-1")
    .then( result => {
        expect(result.hits.total.value).toBe(2)
    })
})

test('the resultsUrl is added to the response and in learning Countries defId=1', () => {
    dmEquipmentSearch("*room-1")
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/confm/#/search/q=*room-1")
    })
})

test('default size return 0 instances', () => {
    dmEquipmentSearch("*")
    .then( result => {
        expect(result.hits.hits.length).toBe(0)
    })
})
