import {toEsFieldName} from '../../src/utils/ESHelper.js'

test('can translate a definition field name into a ES field name', () => {
    expect(toEsFieldName('a field')).toStrictEqual("a_field")
    expect(toEsFieldName('A field')).toStrictEqual("a_field")
    expect(toEsFieldName('A Field')).toStrictEqual("a_field")
    expect(toEsFieldName('Âmbito')).toStrictEqual("âmbito")
    expect(toEsFieldName('AvançadO')).toStrictEqual("avançado")
    expect(toEsFieldName('A  Field')).toStrictEqual("a_field")
})

test('return null if null is provided or undefined', () => {
    expect(toEsFieldName(null)).toBeNull()
    expect(toEsFieldName(undefined)).toBeNull()
})