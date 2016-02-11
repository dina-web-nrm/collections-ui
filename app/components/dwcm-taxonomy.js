import Ember from 'ember';

export default Ember.Component.extend({
    determinations: [],

    init () {
        let result = this._super(...arguments);

        // Add a single determination as start value.
        this.send('addDetermination');

        return result;
    },

    actions: {
        addDetermination () {
            let determination = this.store.createRecord('determination', {});

            console.log(determination);
            this.model.get('determinations').pushObject(determination);
        },
        removeDetermination (determination) {
            this.model.get('determinations').removeObject(determination);
        }
    }
});
