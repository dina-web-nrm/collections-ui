import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component/single-determination', 'Integration | Component | form component single determination', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{form-component/single-determination}}`);

  assert.equal(
      this.$('.dwcm-autocomplete-textfield:first label').text().trim(), 'Namn:'
  );
});
