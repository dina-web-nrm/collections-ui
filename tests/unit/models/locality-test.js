import { moduleForModel, test } from 'ember-qunit';

moduleForModel('locality', 'Unit | Model | locality', {
  // Specify the other units that are required for this test.
  needs: ['model:geography', 'model:agent']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
