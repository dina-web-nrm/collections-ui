import { makeBold } from '../../../helpers/make-bold';
import { module, test } from 'qunit';

module('Unit | Helper | make bold');

test('Make entire string bold', function(assert) {
  let result = makeBold([42]);
  assert.equal(result.string, '<b>42</b>');
});

test('Match part of string', function(assert) {
  let result = makeBold(['test string'], {match: 'string'});
  assert.equal(result.string, 'test <b>string</b>');
});
