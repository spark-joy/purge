const test = QUnit.test;

function createLink(objectData) {
    const link = document.createElement('a');
    const image = document.createElement('img');
    image.src = './assets/objects/' + objectData.id + '.png';

    const searchParams = new URLSearchParams();
    searchParams.set('id', objectData.id);
    link.href = 'object.html?' + searchParams.toString();

    link.appendChild(image);

    return link;

}

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