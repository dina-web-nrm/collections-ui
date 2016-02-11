import Ember from 'ember';

export default Ember.Mixin.create({

    /** Empty function to be overridden in base class. */
    onOutsideClick: Ember.K,

    /** Wrapper method to determine if click is outside component. */
    handleOutsideClick (event) {
        let element = this.$();
        let target = Ember.$(event.target);

        if (!target.closest(element).length) {
            this.onOutsideClick();
        }
    },

    /** Setup listeners after component has been rendered. */
    setupListener: Ember.on('didRender', function() {
        return Ember.$(document).on(
            'click', Ember.$.proxy(this.get('handleOutsideClick'), this)
        );
    }),

    /** Remove listeners when component is about to be destryed. */
    removeListener: Ember.on('willDestroyElement', function() {
        return Ember.$(document).off(
            'click', Ember.$.proxy(this.get('handleOutsideClick'), this)
        );
    })
});