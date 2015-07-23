var Actor = function(driver) {
    this.driver = driver;
};

Actor.prototype.action = function(action) {
    switch (action.actionType) {
        case 'visit':
            return this.driver.url(action.url);
    }
};

module.exports = Actor;
