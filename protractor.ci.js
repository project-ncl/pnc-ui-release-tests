const JasmineReporters = require('jasmine-reporters');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const testSuites = require('./suites.json');
const testParams = require('./params');


exports.config = {
    allScriptsTimeout: 10 * 60 * 1000,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    getPageTimeout: 20 * 1000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10 * 60 * 1000
    },
    onPrepare: () => {
        browser.driver.manage().window().setSize(1920, 1080);
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            savePath: 'reports',
            consolidateAll: false
        }));
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: 'reports/screenshots'
        }));
    },
    params: testParams,
    SELENIUM_PROMISE_MANAGER: false,
    suites: testSuites
};