import createVisitedIcon from '../src/object/create-visited-icon.js';

const test = QUnit.test;

test('create visited icon', function(assert) {
    const object = {
        id: 'controller'
    };

    const expected = '<img src="./assets/objects/controller.png" class="visited">';

    const result = createVisitedIcon(object);

    assert.equal(result.outerHTML, expected);
});
