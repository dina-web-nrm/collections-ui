import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-field-group', 'Integration | Component | field group', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-field-group title="definitions.name"}}`);

  assert.equal(this.$().text().trim(), 'Namn');

  // Template block usage:"
  this.render(hbs`
    {{#dwcm-field-group title="definitions.name"}}
      template block text
    {{/dwcm-field-group}}
  `);

  assert.equal(this.$('.panel-body').text().trim(), 'template block text');
});
