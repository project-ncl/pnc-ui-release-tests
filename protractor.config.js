const config = require('./src/config');
const JasmineReporters = require('jasmine-reporters');
const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: config.seleniumAddress,
    seleniumServerJar: config.seleniumServerJar,
    chromeDriver: config.chromeDriver,
    directConnect: config.directConnect,
    capabilities: {
        'browserName': 'chrome'
    },
    suites: {
        release: 'tests/release/*.spec.js',
        integration: 'tests/integration/*.spec.js'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
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
    SELENIUM_PROMISE_MANAGER: false
};