import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear;
});

api.storage = sessionStorage;

test('Save user object to local storage', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const user = {
        name: 'Emily',
        character: 'sport',
        kept: 0,
        discarded: 0,
        keptArray: [],
        discardedArray: []
    };

    

    //Act 
    // Call the function you're testing and set the result to a const
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

    //Assert
    assert.deepEqual(result, expected);
});