import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('attributes-list', 'Integration | Component | attributes list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"
  
  this.render(hbs`{{attributes-list}}`);

  assert.equal(this.$().text().trim(), '');
});
