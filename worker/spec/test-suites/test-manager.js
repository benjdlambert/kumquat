var Promise = require('bluebird'),
    Stubby = require('stubby').Stubby,
    fs = require('fs');

function createStub(url, contents, contentType) {
    return this.stubby.postAsync({
        request: {
            url: '^' + url + '$',
            method: 'GET'
        },
        response: {
            status: 200,
            body: contents,
            headers: {
                'Content-Type': contentType
            }
        }
    });
}

function getFileFromStub(filename) {
    return fs.readFileSync(this.stubDir + '/' + filename, 'utf-8');
}

function setupStub() {
    var _this = this;
    return new Promise(function(resolve) {
        _this.stubby.delete(function() {
            Promise.all([
                createStub.call(
                    _this,
                    '/' + _this.activeStub + '/style.css',
                    _this.stylesheet,
                    'text/css'
                 ),
                createStub.call(
                    _this,
                    '/' + _this.activeStub + '/index.html',
                    _this.currentPage,
                    'text/html'
                )
            ]).then(resolve);
        });
    });
}

/**
 * Set up the stub manager
 * @return {Promise}
 */
exports.init = function() {
    this.stubby = new Stubby();
    Promise.promisifyAll(this.stubby);
    return this.stubby.startAsync();
};

/**
 * Sets the current active stub, and sets baseline.html as the current
 * @param  {String} stub [The stub name]
 * @return {Promise}
 */
exports.setActiveStub = function(stub) {
    this.stubDir = require('path').resolve(__dirname, stub);
    this.stylesheet = getFileFromStub.call(this, 'style.css');
    this.currentPage = getFileFromStub.call(this, 'baseline.html');
    this.activeStub = stub;
    return setupStub.call(this);
};

/**
 * Switches the the current.html file
 * @return {Promise}
 */
exports.switch = function() {
    this.currentPage = getFileFromStub.call(this, 'current.html');
    return setupStub.call(this);
};
