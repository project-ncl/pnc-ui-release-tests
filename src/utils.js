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

/**
 * Masks certain selected properties on a given object by replacing
 * them with '*'. Useful for blanking out passwords.
 * 
 * @param {Object} object The object to mask properties on
 * @param  {...string} property names to mask 
 * @returns {Object} A shallow copy of the object with the given fields masked.
 */
exports.maskProperties = (object, ...properties) => {
    const masked = Object.assign({}, object);

    properties.forEach(property => {
        if (exports.isDefined(masked[property])) {
            masked[property] = masked[property].replace(/./ug, '*');
        } 
    });

    return masked;
};