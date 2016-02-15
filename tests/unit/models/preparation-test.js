import { moduleForModel, test } from 'ember-qunit';

moduleForModel('preparation', 'Unit | Model | preparation', {
  // Specify the other units that are required for this test.
  needs: ['model:prep-type']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
