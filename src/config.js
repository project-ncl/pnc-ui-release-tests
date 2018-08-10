/* eslint no-process-env: "off" */ 
const fs = require('fs');

// mandatory config values
const requiredKeys = [
    'pncUiAddress',
    'pncRestAddress',
    'pncUser',
    'pncPassword'
];

// properties that can be overridden by npm config values
const overrideKeys = [
    'seleniumAddress',
    'seleniumServerJar',
    'chromeDriver',
    'pncUiAddress',
    'pncRestAddress',
    'pncUser',
    'pncPassword'
];

let config = {};

/**
 * Load config file if supplied
 */
if (typeof process.env.npm_package_config_configFile !== 'undefined') {
    config = JSON.parse(fs.readFileSync(process.env.npm_package_config_configFile));
}

/**
 * Override config file values with NPM package params
 */
overrideKeys.forEach((key) => {
    let envKey = 'npm_package_config_' + key;

    if (typeof process.env[envKey] !== 'undefined') {
        config[key] = process.env[envKey];
    } 
});

/**
 * Validate mandatory config values
 */
requiredKeys.forEach(key => {
    if (typeof config[key] === 'undefined') {
        throw new Error('Required parameter ' + key + ' is undefined, see README for instructions on how to set this');
    }
});

/**
 * Log config file masking password field
 */
let copy = Object.assign(config);

if (typeof config.pncPassword !== 'undefined') {
    copy.pncPassword = config.pncPassword.replace(/./ug, '*');
}

console.info('Using Config:\n' + JSON.stringify(copy, null, 4));


module.exports = config;