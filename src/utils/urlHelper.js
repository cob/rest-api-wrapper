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

export { normalizeAscending }
