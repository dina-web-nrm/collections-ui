import { metersToPixels } from '../../../utils/map';
import { module, test } from 'qunit';

module('Unit | Utility | map');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = metersToPixels(152.746, 10);
  assert.equal(result, 1.0);
});
