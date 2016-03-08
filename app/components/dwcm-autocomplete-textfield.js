import Ember from 'ember';

export default Ember.Component.extend({

    /** Bind conditional classes. */
    classNameBindings: ['hasSelected:has-success', 'isInvalid:has-error'],

    /** Setup component css classes. */
    classNames: [
        'dwcm-autocomplete-textfield', 'form-group', 'form-group-sm'
    ],

    /** Value of the input field */
    value: '',

    /** Has valid selection. */
    hasSelected: false,

    actions: {
        /** Run specified label action. */
        runLabelAction () {
            this.attrs.labelAction();
        }
    }
});
