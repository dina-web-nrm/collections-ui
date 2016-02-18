import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dwcm-collecting-event-view', 'Integration | Component | dwcm collecting event view', {
  integration: true
});

test('it renders', function(assert) {
  // Handle any actions with this.on('myAction', function(val) { ... });"
  this.set('testList', [{
      title: 'title1',
      value: 'value1'
  }, {
      title: 'title2',
      value: 'value2'
  }]);
  this.render(hbs`{{dwcm-collecting-event-view displayAttributes=testList}}`);

  assert.equal(this.$('li').length, 2);
});
