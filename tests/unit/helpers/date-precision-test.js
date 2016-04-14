import { datePrecision } from '../../../helpers/date-precision';
import { module, test } from 'qunit';

module('Unit | Helper | date precision');

// Replace this with your real tests.
test('it works', function(assert) {
    let result = datePrecision([1]);
    assert.equal('LL', result);
    
    result = datePrecision([2]);
    assert.equal('MMMM YYYY', result);
    
    result = datePrecision([3]);
    assert.equal('YYYY', result);
    
    result = datePrecision([42]);
    assert.equal('LL', result);
});
