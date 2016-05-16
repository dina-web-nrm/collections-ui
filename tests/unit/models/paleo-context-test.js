import { moduleForModel, test } from 'ember-qunit';

moduleForModel('paleo-context', 'Unit | Model | paleo context', {
  // Specify the other units that are required for this test.
  needs: ['model:lithostrat', 'model:geologictimeperiod']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
