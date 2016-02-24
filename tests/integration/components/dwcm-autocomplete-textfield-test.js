import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-autocomplete-textfield', 'Integration | Component | autocomplete textfield', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-autocomplete-textfield label='definitions.name'}}`);

  assert.equal(this.$().text().trim(), 'Namn:');

  // Template block usage:"
  this.render(hbs`
    {{#dwcm-autocomplete-textfield label='definitions.name'}}
        <span>template block text</span>
    {{/dwcm-autocomplete-textfield}}
  `);

  // Component should not render block content.
  assert.equal(this.$('span').text().trim(), 'template block text');
});
