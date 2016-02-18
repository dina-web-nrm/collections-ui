import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-single-determination', 'Integration | Component | dwcm single determination', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{dwcm-single-determination}}`);

  assert.equal(
      this.$('.dwcm-autocomplete-textfield:first label').text().trim(), 'Namn:'
  );

});
