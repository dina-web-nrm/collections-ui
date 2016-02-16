import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-spinner', 'Integration | Component | dwcm spinner', {
  integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });"

    this.render(hbs`{{dwcm-spinner}}`);
    assert.equal(this.$().text().trim(), '');

    this.render(hbs`{{dwcm-spinner loadingText='test-text'}}`);
    assert.equal(this.$().text().trim(), 'test-text');
});
