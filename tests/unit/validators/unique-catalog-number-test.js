import { moduleFor, test } from 'ember-qunit';

moduleFor('validator:unique-catalog-number', 'Unit | Validator | unique-catalog-number', {
  needs: ['validator:messages']
});

test('it works', function(assert) {
  var validator = this.subject();
  assert.ok(validator);
});
