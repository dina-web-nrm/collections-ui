import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-single-preparation', 'Integration | Component | dwcm single preparation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-single-preparation}}`);

  assert.equal(
      this.$('.dwcm-autocomplete-textfield label').text().trim(), 'Preparationstyp:'
  );
});
