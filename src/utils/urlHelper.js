import { getServer } from "../server.js"
import { isBrowser } from "./environment.js"

/**
 * Normalize the `ascending` argument accepted by the search functions.
 * Historically each function accepted a different type (boolean, "asc"/"desc",
 * "true"/"false"), so all of them are supported everywhere.
 * @param value boolean | "asc" | "desc" | "true" | "false" | "" | undefined
 * @returns {boolean|undefined} true/false, or undefined when not specified
 */
function normalizeAscending(value) {
    if (value === true || value === "true" || value === "asc") return true
    if (value === false || value === "false" || value === "desc") return false
    return undefined
}

/**
 * Build the resultsUrl added to every response: in a browser it stays a
 * fragment relative to the current app, in node it is made absolute.
 * @param servicePrefix the service path, e.g. "/recordm/"
 * @param hash the app fragment, e.g. "#/definitions/1/q=*"
 * @returns {string}
 */
function makeResultsUrl(servicePrefix, hash) {
    return isBrowser() ? hash : getServer() + servicePrefix + hash
}

export { normalizeAscending, makeResultsUrl }
