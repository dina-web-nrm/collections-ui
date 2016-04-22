import { moduleForModel, test } from 'ember-qunit';

moduleForModel('collectionobject', 'Unit | Model | collectionobject', {
  // Specify the other units that are required for this test.
  needs: [
      'model:agent',
      'model:determination',
      'model:collection',
      'model:accession',
      'model:preparation',
      'model:collection-object-attribute',
      'model:collecting-event',
      'model:collection-object-attachment'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
