var Actor = function(driver) {
    return {
        action: function(action) {
            switch (action.actionType) {
                case 'visit':
                    return driver.url(action.url);
            }
        }
    };
};

module.exports = Actor;
