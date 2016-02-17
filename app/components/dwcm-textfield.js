import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        runLabelAction () {
            this.get('labelAction')();
        }
    }
});
