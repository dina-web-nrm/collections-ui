import Ember from 'ember';

export default Ember.Component.extend({

    /** Bind conditional classes. */
    classNameBindings: ['isValid:has-success', 'isInvalid:has-error'],

    /** Setup component css classes. */
    classNames: [
        'dwcm-autocomplete-textfield', 'form-group', 'form-group-sm'
    ],

    /** Has valid selection. */
    isValid: null,

    /** Has invalid selection. */
    isInvalid: Ember.computed('isValid', function () {
       const isValid = this.get('isValid');
       return isValid !== true && isValid !== null;
    }),

    actions: {
        /** Run specified label action. */
        runLabelAction () {
            this.attrs.labelAction();
        }
    }
});
