import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component/determination', 'Integration | Component | form component determination', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(hbs`{{form-component/determination title='form-component-determination'}}`);

    assert.equal(this.$('.panel-heading').text().trim(), 'Taxonomi/Bestämning');
});
