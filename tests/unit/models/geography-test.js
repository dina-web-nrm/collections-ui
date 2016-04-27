import { moduleForModel, test } from 'ember-qunit';

moduleForModel('geography', 'Unit | Model | geography', {
  // Specify the other units that are required for this test.
  needs: ['model:geography-treedef-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
