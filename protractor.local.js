const testSuites = require('./suites.json');
const testParams = require('./params');


exports.config = {
    allScriptsTimeout: 100000,
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    framework: 'jasmine',
    getPageTimeout: 20000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    },
    params: testParams,
    SELENIUM_PROMISE_MANAGER: false,
    suites: testSuites
};