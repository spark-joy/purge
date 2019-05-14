import createVisitedIcon from '../src/object/create-visited-icon.js';

const test = QUnit.test;

test('create visited icon', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const object = {
        id: 'controller'
    };
    const expected = '<img src="./assets/objects/controller.png" class="visited">';
    //Act 
    const result = createVisitedIcon(object);

    //Assert
    assert.equal(result.outerHTML, expected);
});