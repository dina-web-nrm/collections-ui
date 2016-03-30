import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('form-component/collecting-event', 'Integration | Component | dwcm collecting event', {
  integration: true
});

test('it renders', function(assert) {
    
    let model = Ember.Object.create({});
    
    this.set('model', model);
    this.render(hbs`{{form-component/collecting-event title='form-component-collecting-event' model=model}}`);

    assert.equal(this.$('.panel-heading').text().trim(), 'Insamling/Fyndplats');
});
