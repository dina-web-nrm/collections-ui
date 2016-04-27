import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dropdown-button', 'Integration | Component | dropdown button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dropdown-button label='definitions.name'}}`);

  assert.equal(this.$().text().trim(), 'Namn');

  // Template block usage:"
  this.render(hbs`
    {{#dropdown-button label='definitions.name' as |db|}}
        {{#db.item}}Item text{{/db.item}}
    {{/dropdown-button}}
  `);

  assert.equal(this.$('.dropdown-button__item').text().trim(), 'Item text');
});
