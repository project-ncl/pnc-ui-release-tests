const Page = require('./Page');

class Dashboard extends Page {
    
    /**
     *  Constructs a new Dashboard
     */
    constructor() {
        super('/');
    }
}

module.exports = Dashboard;