import Ember from 'ember';
import DependentRelationshipsMixin from '../../../mixins/dependent-relationships';
import { module, test } from 'qunit';

module('Unit | Mixin | dependent relationships');

// Replace this with your real tests.
test('it works', function(assert) {
  let DependentRelationshipsObject = Ember.Object.extend(DependentRelationshipsMixin);
  let subject = DependentRelationshipsObject.create();
  assert.ok(subject);
});
