import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-basic-data', 'Integration | Component | dwcm basic data', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-basic-data}}`);

  assert.equal(this.$('.panel-heading').text().trim(), 'Grunddata');
});
