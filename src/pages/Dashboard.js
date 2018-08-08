const Page = require('./Page');

class Dashboard extends Page {
    
    constructor() {
        super('/');
    }
}

module.exports = Dashboard;