describe('Actor Module', function() {

    var Actor,
        mockWebdriver,
        actor,
        Promise = require('bluebird');

    beforeEach(function() {
        mockWebdriver = {
            url: jasmine.createSpy().and.returnValue(Promise.resolve())
        };
        Actor = require('../lib/actor');
        actor = new Actor(mockWebdriver);
    });

    it('should visit the correct url when visit is the action', function(done) {
        var expectedUrl = 'http://lols.com';
        actor.action({ actionType: 'visit', url: expectedUrl })
            .then(function() {
                expect(mockWebdriver.url).toHaveBeenCalledWith(expectedUrl);
                done();
            });
    });

    it(
        'should click a selector when click is the ' +
        'action and selector is present'
    );
});
