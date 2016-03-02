import Ember from 'ember';

export default Ember.Component.extend({

    /** Default element classes. */
    classNames: ['form-group', 'form-group-sm'],

    /** Action to display right of field label. */
    labelAction: null,

    /** Text for label action. */
    actionText: '',

    actions: {

        /** Run specified label action. */
        runLabelAction () {
            this.get('labelAction')();
        }
    }
});
