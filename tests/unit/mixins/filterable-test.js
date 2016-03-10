import Ember from 'ember';
import FilterableMixin from '../../../mixins/filterable';
import { module, test } from 'qunit';

module('Unit | Mixin | filterable');

// Replace this with your real tests.
test('it works', function(assert) {
  let FilterableObject = Ember.Object.extend(FilterableMixin);
  let subject = FilterableObject.create();
  assert.ok(subject);
});
