const config = require('../config');

const LOGIN_TIMEOUT = 20000;

/**
 * Base class for other page objects to extend.
 */
class Page {
    
    /**
     * Creates a Page
     * 
     * @param {string} path the path fragment of the url to the page 
     */
    constructor(path) {
        this.url = config.pncUiAddress + path;
    }

    /**
     * Navigates to the page
     * 
     * @returns {Promise} resolved when the redirect has completed
     */
    goto() {
        return browser.get(this.url);
    }

    /**
     * Gets the title of the current page in the browser
     * 
     * @returns {Promise} resolved with the page title
     */
    getTitle() {
        return browser.getTitle();
    }


    async login() {
        let redirectUrl = await browser.driver.getCurrentUrl();
        
        await browser.waitForAngularEnabled(false);
        await element(by.id('login-link')).click();

        await browser.wait(protractor.ExpectedConditions.urlContains(config.keycloakAddress), LOGIN_TIMEOUT);

        await element(by.id('username')).sendKeys(config.pncUser);
        await element(by.id('password')).sendKeys(config.pncPassword);
        await element(by.id('kc-login')).click();

        
        /* 
         * Fix for: "Cannot read property '$$testability' of undefined" error
         * when redirecting from keycloak to pnc.
         * 
         * Fix found here: https://azevedorafaela.wordpress.com/tag/cannot-read-property-testability-of-undefined/
         */ 
        await browser.driver.get('about:blank');
        await browser.waitForAngularEnabled(true);
        await browser.get(redirectUrl);
    }
}

module.exports = Page;