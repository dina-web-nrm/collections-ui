import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collection', 'Unit | Model | collection', {
    // Specify the other units that are required for this test.
    needs: [
      'model:agent',
      'model:institution',
      'model:discipline']
});

test('it exists', function(assert) {
    let model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
});
