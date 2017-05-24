import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('form-component/determination', 'Integration | Component | form component determination', {
    integration: true
});

test('it renders', function(assert) {
    // Create dummy model and pass to component.
    let model = Ember.Object.create({
            get() {
                return [];
            }
        });

    this.set('model', model);

    this.render(hbs`{{form-component/determination title='form-component-determination' model=model}}`);

    assert.equal(this.$('.panel-heading').text().trim(), 'Bestämning');
});
