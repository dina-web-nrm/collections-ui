import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:collectionobject/new', 'Unit | Controller | collectionobject/new', {
    needs: [
        'service:metrics',
        'ember-metrics@metrics-adapter:piwik'
    ]
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
