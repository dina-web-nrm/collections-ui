import Ember from 'ember';

export default Ember.Component.extend({

    /** Setup component css classes. */
    classNames: [
        'dwcm-autocomplete-textfield', 'form-group', 'form-group-sm'
    ],

    actions: {
        /** Run specified label action. */
        runLabelAction () {
            this.attrs.labelAction();
        }
    }
});
