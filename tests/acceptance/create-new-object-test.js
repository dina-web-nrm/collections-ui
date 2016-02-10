import { test } from 'qunit';
import moduleForAcceptance from 'dw-collections-manager/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create new object');

test('visiting /create-new-object', function(assert) {
  visit('/collectionobject/new');

  andThen(function() {
    assert.equal(currentURL(), '/collectionobject/new');
  });
});
