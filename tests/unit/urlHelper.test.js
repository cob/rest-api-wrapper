/** @jest-environment node */
import { normalizeAscending, makeResultsUrl } from '../../src/utils/urlHelper.js'
import { SERVER } from './helpers/mockAxios.js'

test('normalizeAscending accepts every historical form', () => {
    expect(normalizeAscending(true)).toBe(true)
    expect(normalizeAscending("true")).toBe(true)
    expect(normalizeAscending("asc")).toBe(true)
    expect(normalizeAscending(false)).toBe(false)
    expect(normalizeAscending("false")).toBe(false)
    expect(normalizeAscending("desc")).toBe(false)
    expect(normalizeAscending("")).toBeUndefined()
    expect(normalizeAscending(undefined)).toBeUndefined()
    expect(normalizeAscending(null)).toBeUndefined()
})

test('makeResultsUrl is absolute in node', () => {
    expect(makeResultsUrl("/recordm/", "#/instance/1")).toBe(`${SERVER}/recordm/#/instance/1`)
})
