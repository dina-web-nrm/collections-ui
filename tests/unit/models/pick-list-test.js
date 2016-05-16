import { moduleForModel, test } from 'ember-qunit';

moduleForModel('pick-list', 'Unit | Model | pick list', {
  // Specify the other units that are required for this test.
  needs: ['model:pick-list-item']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
