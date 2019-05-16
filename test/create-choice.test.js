import createYes from '../src/create-yes.js';

const test = QUnit.test;

test('make yes button', function(assert) {
    const expected = `<div><label for="yes">yes</label><input id="yes" type="radio" name="choice-button" value="yes"></div>`;
    const dom = createYes();

    assert.equal(dom.outerHTML, expected);
});
