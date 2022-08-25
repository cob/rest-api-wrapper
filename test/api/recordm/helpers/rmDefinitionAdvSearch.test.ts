import rmDefinitionAggregation from "../../../../src/api/recordm/helpers/rmDefinitionAggregation"

test('for the learning server, "countries series" is defId 2, and count for "Arab world" is 20', (done) => {
  rmDefinitionAggregation(2, {}, "Arab world")
    .then((result) => {
      expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab world")
      expect(result.hits.total.value).toBe(20)
      done()
    })
    .catch((e) => {
      done(e)
    })
})

test('for "Arab world" population sum over years is 2.019.650.012', (done) => {
  let agg = {
    x: {
      sum: {
        field: "value",
      },
    },
  }

  rmDefinitionAggregation(2, agg, 'Arab  World indicator_name:"population, total"')
    .then((result) => {
      expect(result.resultsUrl).toBe(
        'https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab  World indicator_name:"population, total"'
      )
      expect(result.aggregations["sum#x"].value).toBe(2019650012)
      done()
    })
    .catch((e) => {
      done(e)
    })
})

test('for "Arab world" there are 4 indicators', (done) => {
  let agg = {
    x: {
      terms: {
        field: "indicator_name.raw", //NOTE: you allways have to use a raw for ES
        size: 50,
      },
    },
  }

  rmDefinitionAggregation(2, agg, "Arab  World")
    .then((result) => {
      expect(result.resultsUrl).toBe("https://learning.cultofbits.com/recordm/#/definitions/2/q=Arab  World")
      expect(result.aggregations["sterms#x"].buckets).toEqual([
        { doc_count: 5, key: "Alternative and nuclear energy (% of total energy use)" },
        { doc_count: 5, key: "GDP: linked series (current LCU)" },
        { doc_count: 5, key: "Population, total" },
        { doc_count: 5, key: "Surface area (sq. km)" },
      ])
      done()
    })
    .catch((e) => {
      done(e)
    })
})
