import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pick-list-item', 'Unit | Model | pick list item', {
  // Specify the other units that are required for this test.
  needs: ['model:pick-list']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
