
/** @jest-environment node */
import rmDefinitionAggregation from "../src/rmDefinitionAggregation"

test('for the learning server, "countries series" is defId 2, and count for "Arab world" is 20', (done) => {
    rmDefinitionAggregation(2, {}, "Arab world")
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab world")
        expect(result.hits.total.value).toBe(20)
        done()
    })
    .catch(e => {
        done(e)
    })
})

test('for the learning server, "countries series" is defId 2, and count for "Arab world" is 20, query by name', (done) => {
    rmDefinitionAggregation("Countries Series", {}, "Arab world")
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab world")
        expect(result.hits.total.value).toBe(20)
        done()
    })
    .catch(e => {
        done(e)
    })
})


test('Total population for all countries combined in the year 2018. The query should fail if given the UTC timezone (default is the machine\'s), due to DST', async (done) => {
    // Test assumes a Europe/Lisbon machine
    
    let agg = {
        "x": {
            "sum": {
                "field": "value"
            }
        }
    }

    const with_tz = await rmDefinitionAggregation("Countries Series", agg , 'year.date:2018-07-10 indicator_name:"population, total"')
    expect(with_tz.aggregations['sum#x'].value).toBe(80494309045)

    const without_tz = await rmDefinitionAggregation("Countries Series", agg , 'year.date:2018-07-10 indicator_name:"population, total"',0, 0, "", "", "Etc/UTC")
    expect(without_tz.aggregations['sum#x'].value).toBe(0)

    done()
})

test('for "Arab world" population sum over years is 2.019.650.012', (done) => {
    let agg = {
        "x": {
            "sum": {
                "field": "value"
            }
        }
    }

    rmDefinitionAggregation("Countries Series", agg , 'Arab  World indicator_name:"population, total"')
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab  World indicator_name:\"population, total\"")
        expect(result.aggregations['sum#x'].value).toBe(2019650012)
        done()
    })
    .catch(e => {
        done(e)
    })
})


test('for "Arab world" there are 4 indicators', (done) => {
    let agg = {
        "x": {
            "terms": {
                "field": "indicator_name.raw", //NOTE: you always have to use a raw for ES
                "size": 50
            }
        }
    }

    rmDefinitionAggregation(2, agg , "Arab  World", 0, 8, "indicator_name","desc")
    .then( result => {
        expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab  World")
        expect(result.aggregations['sterms#x'].buckets).toEqual([
            { doc_count: 5, key: 'Alternative and nuclear energy (% of total energy use)' },
            { doc_count: 5, key: 'GDP: linked series (current LCU)' },
            { doc_count: 5, key: 'Population, total' },
            { doc_count: 5, key: 'Surface area (sq. km)' }
          ])
        expect(result.hits.hits.length).toBe(8)
        expect(result.hits.hits[0]._source.indicator_name[0]).toBe("Population, total")
        expect(result.hits.hits[7]._source.indicator_name[0]).toBe("Alternative and nuclear energy (% of total energy use)")
        done()
    })
    .catch(e => {
        done(e)
    })
})



test('for "Arab world" there are 4 indicators, ascending', (done) => {
    let agg = {
        "x": {
            "terms": {
                "field": "indicator_name.raw", //NOTE: you always have to use a raw for ES
                "size": 50
            }
        }
    }

    rmDefinitionAggregation(2, agg , "Arab  World", 0, 8, "indicator_name","asc")
    .then( result => {
        expect(result.hits.hits[0]._source.indicator_name[0]).toBe("Alternative and nuclear energy (% of total energy use)")
        done()
    })
    .catch(e => {
        done(e)
    })
})