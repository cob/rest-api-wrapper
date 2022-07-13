/**
 * Convert a field definition name into ES field name
 * @param fieldName the definition field name
 * @returns {string|null}
 */
function toEsFieldName(fieldName) {
    if (!fieldName) return null
    return fieldName.replace(/\s+/g, '_').toLowerCase()
}

export {toEsFieldName}

