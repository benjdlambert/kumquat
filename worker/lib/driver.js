var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'phantomjs'
    }
};

var client = webdriverio.remote(options);

exports.getInstance = function() {
    return client.init().url()
        .windowHandleSize({
            width: 1280,
            height: 800
        });
};
