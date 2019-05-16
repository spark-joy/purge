import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear;
});

api.storage = sessionStorage;

test('Save user object to local storage', function(assert) {
    const user = {
        name: 'Emily',
        character: 'sport',
        kept: 0,
        discarded: 0,
        keptArray: [],
        discardedArray: []
    };

    api.saveUser(user);
    const result = api.getUser();
    const expected = {
        name: 'Emily',
        character: 'sport',
        kept: 0,
        discarded: 0,
        keptArray: [],
        discardedArray: []
    };

    assert.deepEqual(result, expected);
});
