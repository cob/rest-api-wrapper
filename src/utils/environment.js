/**
 * Single place for the browser detection used across the library
 * (previously each file had its own variation of this check).
 * @returns {boolean} true when running in a browser
 */
const isBrowser = () => typeof document !== "undefined"

export { isBrowser }
