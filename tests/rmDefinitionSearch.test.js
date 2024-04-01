
/** @jest-environment node */
import rmDefinitionSearch from "../src/rmDefinitionSearch"


test('for the learning server, "countries series" count for "Arab world" is 20', () => {
    rmDefinitionSearch("Countries Series", "Arab world")
    .then( result => {
        expect(result.hits.total.value).toBe(22)
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

test('for the learning server, "countries series" count for "Arab world" is 20, even when using + signs in the query' , () => {
    rmDefinitionSearch("Countries Series", "Arab world year.date:<now-100y+100y")
    .then( result => {
        expect(result.hits.total.value).toBe(22)
    })
})

test('for the learning server, "countries series" count for the date 2018-10-07. With timezone Europe/Lisbon it should find several matches. Without it, it will not find anything.' , async () => {
    // Dates are stored as UTC at midnight. This means without the Europe/Lisbon 
    // timezone, they are seen as the previous day during daylight savings 
    // (00h00 - 1h = 23h00 prev day) and as such the query misses them.
    const with_tz = await rmDefinitionSearch("Countries Series", "year.date:2018-07-10", 0, 0, "", "", "Europe/Lisbon")
    expect(with_tz.hits.total.value).toBeGreaterThan(0)
    
    const without_tz = await rmDefinitionSearch("Countries Series", "year.date:2018-07-10")
    expect(without_tz.hits.total.value).toBe(0)

})