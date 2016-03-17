import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collecting-event', 'Unit | Model | collecting event', {
  // Specify the other units that are required for this test.
  needs: ['model:locality', 'model:collector', 'model:agent']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
