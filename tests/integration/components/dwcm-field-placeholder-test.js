import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-field-placeholder', 'Integration | Component | dwcm field placeholder', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-field-placeholder}}`);

  assert.equal(this.$().text().trim(), 'Placeholder:');
});
