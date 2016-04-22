import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('confirm-dialog', 'Integration | Component | confirm dialog', {
  integration: true
});

test('it renders without body', function(assert) {
  this.render(hbs`{{confirm-dialog
      title='definitions.name'
      isVisible=true
      abort=(action (mut abort))
      continue=(action (mut remove))
    }}`);

  assert.equal(this.$('.modal-title').text().trim(), 'Namn');
  assert.equal(this.$('.modal-body').text().trim(), '');
});

test('it renders with body', function(assert) {
  this.render(hbs`
    {{#confirm-dialog
      title='definitions.name'
      isVisible=true
      abort=(action (mut abort))
      continue=(action (mut remove))
    }}
      Should render
    {{/confirm-dialog}}
  `);
  assert.equal(this.$('.modal-title').text().trim(), 'Namn');
  assert.equal(this.$('.modal-body').text().trim(), 'Should render');
});

test('it renders closed', function(assert) {
  this.render(hbs`
    {{#confirm-dialog
      title='definitions.name'
      isVisible=false
      abort=(action (mut abort))
      continue=(action (mut remove))
    }}
      Should not render
    {{/confirm-dialog}}
  `);
  assert.equal(this.$('.modal-title').text().trim(), '');
  assert.equal(this.$('.modal-body').text().trim(), '');
});
