import Ember from 'ember';

export default Ember.Mixin.create({
    onOutsideClick: Ember.K,

    handleOutsideClick (event) {
        let element = this.$();
        let target = Ember.$(event.target);

        if (!target.closest(element).length) {
            this.onOutsideClick();
        }
    },

    setupOutsideClickListener: Ember.on('didInsertElement', function() {
        let clickHandler = this.get('handleOutsideClick').bind(this);

        return Ember.$(document).on('click', clickHandler);
    }),

    removeOutsideClickListener: Ember.on('willDestroyElement', function() {
        let clickHandler = this.get('handleOutsideClick').bind(this);

        return Ember.$(document).off('click', clickHandler);
    })
});