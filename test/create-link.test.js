import createLink from '../src/navigation/create-link.js';

const test = QUnit.test;

test('make links from object data', function(assert) {
    const objectData = {
        id: 'console',
        img: 'console.png'
    };
    const expected = '<a href="object.html?id=console"><img src="./assets/objects/console.png"></a>';

    const result = createLink(objectData);

    assert.equal(result.outerHTML, expected);
});
