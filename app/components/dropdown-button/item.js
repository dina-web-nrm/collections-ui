import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNames: ['dropdown-button__item'],
    classNameBindings: ['disabled:disabled:clickable'],
    click() {
        if (this.get('disabled')) {
            return false;
        } else {
            this.attrs.action();
        }
    },
});
