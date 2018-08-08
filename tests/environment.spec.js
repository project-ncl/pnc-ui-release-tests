const Dashboard = require('../src/pages/Dashboard'),
    config = require('../src/config');

describe('Test environment', () => {
    it('should be able to connect to PNC UI', () => { 
        browser.get(config.pncUiAddress);
        expect(browser.getTitle()).toEqual('Project Newcastle');
    });

    it('should support asynchronous tests using ES2017 async functions', async () => {
        browser.get(config.pncUiAddress);
        
        let title = await browser.getTitle();

        expect(title).toEqual('Project Newcastle');
    });

    it('should support CommonJS imports', async () => {
        let dashboard = new Dashboard();

        await dashboard.goto();
        
        expect(dashboard.getTitle()).toEqual('Project Newcastle');
    });
});