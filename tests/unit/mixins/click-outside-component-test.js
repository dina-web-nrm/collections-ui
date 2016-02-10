import Ember from 'ember';
import ClickOutsideComponentMixin from '../../../mixins/click-outside-component';
import { module, test } from 'qunit';

module('Unit | Mixin | click outside component');

// Replace this with your real tests.
test('it works', function(assert) {
  let ClickOutsideComponentObject = Ember.Object.extend(ClickOutsideComponentMixin);
  let subject = ClickOutsideComponentObject.create();
  assert.ok(subject);
});
