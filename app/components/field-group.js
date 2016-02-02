import Ember from 'ember';

export default Ember.Component.extend({
    collapsed: false,
    actions: {
        toggleCollapse() {
            this.toggleProperty('collapsed');
        }
    }
});
