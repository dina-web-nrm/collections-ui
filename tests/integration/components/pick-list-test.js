import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pick-list', 'Integration | Component | pick list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{pick-list}}`);

  assert.equal(this.$().text().trim(), 'Inga värden för vald samling');

  // Template block usage:"
  this.render(hbs`
    {{#pick-list}}
      template block text
    {{/pick-list}}
  `);

  assert.equal(this.$().text().trim(), 'Inga värden för vald samling');
});
