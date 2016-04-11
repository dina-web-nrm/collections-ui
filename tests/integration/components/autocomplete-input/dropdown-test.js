import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('autocomplete-input/dropdown', 'Integration | Component | autocomplete input/dropdown', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{autocomplete-input/dropdown}}`);

  assert.equal(this.$().text().trim(), '');
});
