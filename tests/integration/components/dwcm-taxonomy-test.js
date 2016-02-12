import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-taxonomy', 'Integration | Component | dwcm taxonomy', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(hbs`{{dwcm-taxonomy}}`);

    assert.equal(this.$('.panel-heading').text().trim(), 'Taxonomi/Bestämning');
});
