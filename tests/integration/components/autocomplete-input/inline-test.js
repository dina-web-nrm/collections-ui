import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('autocomplete-input/inline', 'Integration | Component | autocomplete input/inline', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{autocomplete-input/inline}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#autocomplete-input/inline}}
      template block text
    {{/autocomplete-input/inline}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
