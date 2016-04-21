import { oneIndex } from '../../../helpers/one-index';
import { module, test } from 'qunit';

module('Unit | Helper | one index');

// Replace this with your real tests.
test('it works', function(assert) {
  let value = 42;
  let result = oneIndex([value]);
  assert.equal(result, (value + 1));
});
