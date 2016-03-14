import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('action-label', 'Integration | Component | action label', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{action-label action=(action (mut test)) label='definitions.name'}} text='definitions.create-new.1'`);

  assert.ok(this.$().text().trim().indexOf('Namn:') !== -1);
  //assert.ok(this.$().text().trim().indexOf('Skapa nytt') !== -1);

  // Template block usage:"
  this.render(hbs`
    {{#action-label action=(action (mut test)) label='definitions.name'}}
      template block text
    {{/action-label}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
