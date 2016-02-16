import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-collecting-event-view', 'Integration | Component | dwcm collecting event view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-collecting-event-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#dwcm-collecting-event-view}}
      template block text
    {{/dwcm-collecting-event-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
