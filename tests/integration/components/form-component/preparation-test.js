import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('form-component/preparation', 'Integration | Component | form component preparation', {
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
  this.render(hbs`{{form-component/preparation title='form-component-preparation' model=model}}`);

  assert.equal(this.$('.panel-heading').text().trim(), 'Objekt/Preparationer');
});
