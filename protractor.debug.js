const testSuites = require('./suites.json');
const testParams = require('./params');


exports.config = {
    allScriptsTimeout: 10 * 60 * 1000,
    capabilities: {
        directConnect: true,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--headless', '--disable-gpu', '--window-size=1920x1080']
        }
    },
    directConnect: true,
    framework: 'jasmine',
    getPageTimeout: 20 * 1000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10 * 60 * 1000
    },
    params: testParams,
    SELENIUM_PROMISE_MANAGER: false,
    suites: testSuites
};