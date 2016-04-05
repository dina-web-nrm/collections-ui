import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component/type-status', 'Integration | Component | form component/type status', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{form-component/type-status title='form-component-type-status'}}`);
  assert.equal(this.$().text().trim(), 'Typstatus');
});
