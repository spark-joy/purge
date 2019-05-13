import makeUser from '../src/sign-up/make-user.js';
const test = QUnit.test;



test('make user out of filled out form', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();

    formData.set('name', 'Emily');
    formData.set('character', 'sport');
    
    const expected = {
        name: 'Emily',
        character: 'sport',
        kept: 0,
        discarded: 0,
        keptArray: [],
        discardedArray: []
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const user = makeUser(formData);

    //Assert
    assert.deepEqual(user, expected);
});