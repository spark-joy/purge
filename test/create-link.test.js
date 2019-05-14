import createLink from '../src/navigation/create-link.js';

const test = QUnit.test;

test('make links from object data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const objectData = {
        id: 'console',
        img: 'console.png'
    };
    const expected = '<a href="object.html?id=console"><img src="./assets/objects/console.png"></a>';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = createLink(objectData);

    //Assert
    assert.equal(result.outerHTML, expected);
});