/* eslint no-process-env: "off" */ 
const fs = require('fs');
const {isDefined, isUndefined, prettyPrint, maskProperties} = require('./utils');
const snakeCase = require('lodash.snakecase');

let configFile;

/**
 * Load config file if supplied
 */
if (isDefined(process.env.CONFIG_FILE)) {
    try {
        configFile = JSON.parse(fs.readFileSync(process.env.CONFIG_FILE));
    } catch (error) {
        console.error(`Error loading config file: ${process.env.CONFIG_FILE} Cause: ${error}`);
        throw error;
    }
}

function getProperty(name, mandatory = false) {
    let value;
    const envName = snakeCase(name).toUpperCase();

    if (isDefined(configFile) && isDefined(configFile[name])) {
        value = configFile[name];
    } else if (isDefined(process.env[envName])) {
        value = process.env[envName];    
    }
    
    if (mandatory && isUndefined(value)) {
        throw new Error(`Required configuration property ${name} is undefined`);
    }

    return value;
}


exports.seleniumAddress = getProperty('seleniumAddress');
exports.seleniumServerJar = getProperty('seleniumServerJar');
exports.chromeDriver = getProperty('chromeDriver');
exports.directConnect = Boolean(getProperty('directConnect'));
exports.pncUiAddress = getProperty('pncUiAddress', true);
exports.pncRestAddress = getProperty('pncRestAddress', true);
exports.keycloakAddress = getProperty('keycloakAddress', true);
exports.pncUser = getProperty('pncUser', true);
exports.pncPassword = getProperty('pncPassword', true);


const masked = maskProperties(exports, 'pncPassword');

console.info('Using configuration:\n', prettyPrint(masked));