import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component/single-preparation', 'Integration | Component | form component single preparation', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{form-component/single-preparation}}`);

  assert.equal(
      this.$('label:first').text().trim(), 'Preparationstyp:'
  );
});
