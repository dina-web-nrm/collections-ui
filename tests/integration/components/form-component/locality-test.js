import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component/locality', 'Integration | Component | form component/locality', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{form-component/locality enableSearch=(action (mut test)) update=(action (mut test))}}`);

  assert.equal(this.$('.header h4').text().trim(), 'Ny fyndplats');
});
