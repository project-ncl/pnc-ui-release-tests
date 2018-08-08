const config = require('../config');

class Page {
    
    constructor(path) {
        this.url = config.pncUiAddress + path;
    }

    async goto() {
        await browser.get(this.url);
    }

    getTitle() {
        return browser.getTitle();
    }

}

module.exports = Page;