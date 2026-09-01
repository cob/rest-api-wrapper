import { jest } from '@jest/globals'

/**
 * Register a mocked axios module. Must be called BEFORE dynamically importing
 * the module under test, e.g.:
 *
 *   const axios = mockAxios()
 *   const { default: rmDomainSearch } = await import('../../src/rmDomainSearch.js')
 */
export function mockAxios() {
    const axios = {
        get: jest.fn(),
        post: jest.fn(),
        delete: jest.fn(),
        defaults: {},
    }
    jest.unstable_mockModule('axios', () => ({ default: axios }))
    return axios
}

// default server used by getServer() in a node environment
export const SERVER = "https://learning.cultofbits.com"
