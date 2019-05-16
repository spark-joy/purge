import makeUser from '../src/sign-up/make-user.js';
const test = QUnit.test;

test('make user out of filled out form', function(assert) {
    const formData = new FormData();

    formData.set('name', 'Emily');
    formData.set('character', 'sport');
    
    const expected = {
        name: 'Emily',
        character: 'sport',
        keptArray: [],
        discardedArray: []
    };

    const user = makeUser(formData);

    assert.deepEqual(user, expected);
});
