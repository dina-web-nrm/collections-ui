import Ember from 'ember';

export default Ember.Component.extend({

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
