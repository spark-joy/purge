import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear;
});

api.storage = sessionStorage;

test('Save user object to local storage', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    

    //Act 
    // Call the function you're testing and set the result to a const
    

    //Assert
    assert.equal(user, expected);
});