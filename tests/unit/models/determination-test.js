import { moduleForModel, test } from 'ember-qunit';

moduleForModel('determination', 'Unit | Model | determination', {
  // Specify the other units that are required for this test.
  needs: ['model:taxon', 'model:agent']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
