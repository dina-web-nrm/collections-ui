import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collection-object-attachment', 'Unit | Model | collection object attachment', {
  // Specify the other units that are required for this test.
  needs: ['model:attachment']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
