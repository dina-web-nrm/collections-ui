import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('solr-autocomplete-input', 'Integration | Component | solr autocomplete input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{solr-autocomplete-input}}`);

  assert.equal(this.$().text().trim(), '');
});
