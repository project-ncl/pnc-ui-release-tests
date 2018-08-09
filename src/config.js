/* eslint no-process-env: "off" */ 
const fs = require('fs');

// properties that can be overridden by npm config values, allows them to be set
// as command line args. 
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

if (process.env.npm_package_config_configFile) {
    config = JSON.parse(fs.readFileSync(process.env.npm_package_config_configFile));
}

overrideKeys.forEach((key) => {
    let envKey = 'npm_package_config_' + key;

    if (typeof process.env[envKey] !== 'undefined') {
        config[key] = process.env[envKey];
    } 
});

if (typeof config.pncPassword !== 'undefined') {
    const copy = Object.assign(config);

    copy.pncPassword = config.pncPassword.replace(/./ug, '*');
    console.log('config:\n' + JSON.stringify(copy, undefined, 4));
}

module.exports = config;