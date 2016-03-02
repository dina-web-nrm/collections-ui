import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component/basic-data', 'Integration | Component | dwcm basic data', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{form-component/basic-data title='form-component/basic-data'}}`);

  assert.equal(this.$('.panel-heading').text().trim(), 'Grunddata');
});
