describe('Test environment', () => {
    it('should be able to connect to PNC UI', async () => { 
        await browser.get(browser.params.pncUiAddress);

        expect(browser.getTitle()).toEqual('Project Newcastle');
    });
});