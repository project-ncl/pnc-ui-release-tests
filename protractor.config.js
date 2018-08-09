const config = require('./src/config');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: config.seleniumAddress,
    seleniumServerJar: config.seleniumServerJar,
    chromeDriver: config.chromeDriver,
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        release: 'tests/release/*.spec.js',
        integration: 'tests/integration/*.spec.js'
    }
};