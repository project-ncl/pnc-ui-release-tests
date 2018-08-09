// const config = require('./src/config');

exports.config = {
    framework: 'jasmine',
    seleniumServerJar: '/usr/bin/selenium-server-standalone-3.14.0.jar',
    chromeDriver: '/usr/bin/chromedriver',
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        release: 'tests/release/*.spec.js',
        environment: 'tests/environment.spec.js'
    }
};