import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-collecting-event', 'Integration | Component | dwcm collecting event', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-collecting-event}}`);

  assert.equal(this.$('.panel-heading').text().trim(), 'Insamling/Fyndplats');
});
