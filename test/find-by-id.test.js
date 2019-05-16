import objectData from '../src/services/object-data.js';
import findById from '../src/services/find-by-id.js';

const test = QUnit.test;

test('find by Id', function(assert) {
    const expectedObject = objectData[1];

    const result = findById(expectedObject.id);

    assert.equal(expectedObject, result);
});
