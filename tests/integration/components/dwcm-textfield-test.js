import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-textfield', 'Integration | Component | dwcm textfield', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-textfield label='definitions.name'}}`);

  assert.equal(this.$().text().trim(), 'Namn:');
});
