const config = require('./src/config');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: config.seleniumAddress,
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        release: 'tests/release/*.spec.js',
        environment: 'tests/environment.spec.js'
    }
};