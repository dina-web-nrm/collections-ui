import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('locality-selector', 'Integration | Component | locality selector', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{locality-selector update=(action (mut test))}}`);

  assert.ok(this.$('.control-label').text().trim().indexOf('Fyndplats(lokal):') !== -1);
});
