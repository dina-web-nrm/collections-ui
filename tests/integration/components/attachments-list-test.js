import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('attachments-list', 'Integration | Component | attachments list', {
    integration: true,
});

test('it renders', function(assert) {
    this.set('attachments', [Ember.Object.create({ordinal: 1})]);

    this.render(hbs`{{attachments-list attachments=attachments}}`);

    assert.equal(this.$('').text().trim(), 'Verbatimfält');

    // Template block usage:"
    this.render(hbs`
      {{#attachments-list attachments=attachments}}
          This text should not be rendered
      {{/attachments-list}}
    `);

    assert.equal(this.$().text().trim(), 'Verbatimfält');
});
