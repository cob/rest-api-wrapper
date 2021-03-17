
/** @jest-environment node */
const { rmDomainSearch } = require("../src/rmDomainSearch")


test('for the learning server, "E-learning Demo" domain count for "Arab world" is 22', (done) => {
    return rmDomainSearch(2, "Arab world")
    .then( result => {
        expect(result.hits.total.value).toBe(22)
        done()
    })
    .catch( e => {
        done(e)
    })
})


test('the resultsUrl is added to the response', (done) => {
    return rmDomainSearch(2)
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/domain/2/q=*")
        done()
    })
    .catch( e => {
        done(e)
    })
})

test('default size return 0 instances', (done) => {
    return rmDomainSearch(2)
    .then( result => {
        expect(result.hits.hits.length).toBe(0)
        done()
    })
    .catch( e => {
        done(e)
    })
})

test('search for a domain that does not exist logs an error and throws "Domain not found" ', done => {

    return rmDomainSearch(23123)
    .catch( e => {
        expect(e.response.status).toBe(404)
        done()
    })
})