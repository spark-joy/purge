import objectData from '../src/services/object-data.js';
import findById from '../src/services/find-by-id.js';

const test = QUnit.test;

test('find by Id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expectedObject = objectData[1];

    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(expectedObject.id);

    //Assert
    assert.equal(expectedObject, result);
});