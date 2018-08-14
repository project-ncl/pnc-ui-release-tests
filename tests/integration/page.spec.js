const config = require('../../src/config');
const Page = require('../../src/pages/Page');


describe('A page', () => {
    let page = new Page('/');
    
    beforeAll(async () => {
        page = new Page('/');
        await page.goto();
    });

    it('should get the correct current page title', async () => {
        const title = await page.getTitle();

        expect(title).toEqual('Project Newcastle');
    });

    it('should be able to login', async () => {
        await page.login();

        const text = await element(by.binding('authCtrl.username')).getText();

        expect(text).toEqual(config.pncUser);
    });
});