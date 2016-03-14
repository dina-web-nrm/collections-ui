import { moduleFor, test } from 'ember-qunit';

moduleFor('route:collectionobject/new', 'Unit | Route | collectionobject/new', {
    needs: [
        'service:metrics',
        'ember-metrics@metrics-adapter:piwik'
    ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
