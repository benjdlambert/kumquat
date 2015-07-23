var Test = require('../../common/models/test'),
    FlowStep = require('../../common/models/flow-step');

exports.createTestWithFlow = function(flow) {
    flow = Array.isArray(flow) ? flow : [flow];

    return Test.createAsync({
        name: 'My First Test',
        description: 'A simple test case test',
        flow: flow
    });
};

exports.createVistFlowStep = function() {
    return FlowStep.createAsync({
        title: 'Vist the damn page',
        description: 'Just a cheeky little visit',
        type: 'action',
        actionType: 'visit',

    });
};

exports.createScreenshotAssertion = function() {
    return FlowStep.createAsync({
        title: 'Snapshot 1',
        description: 'Snapshot on load of the page',
        type: 'assertion',
        assertionType: 'screenshot'
    });
};
