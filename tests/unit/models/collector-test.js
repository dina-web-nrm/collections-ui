import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collector', 'Unit | Model | collector', {
  // Specify the other units that are required for this test.
  needs: ['model:agent']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
