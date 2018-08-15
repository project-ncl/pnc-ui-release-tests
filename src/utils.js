/**
 * Determines if a reference is undefined.
 * 
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is undefined.
 */
exports.isUndefined = value => typeof value === 'undefined';

/**
 * Determines if a reference is defined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is defined.
 */
exports.isDefined = value => typeof value !== 'undefined';

/**
 * Pretty prints an object as a string
 * 
 * @param {Object} object The object to print
 * @returns {string} The pretty printed string 
 */
exports.prettyPrint = object => JSON.stringify(object, null, 4);