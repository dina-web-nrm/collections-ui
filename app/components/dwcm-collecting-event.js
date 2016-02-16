import Ember from 'ember';

export default Ember.Component.extend({
    createOrSelect: true,

    isCreating: false,

    disableFields: Ember.computed('isCreating', function () {
       return !this.get('isCreating');
    }),

    actions: {
        enableCreate () {
            this.set('createOrSelect', false);
            this.set('isCreating', true);
        },

        selectedCollectingEvent (collectingEvent) {
            this.get('model').set('collectingEvent', collectingEvent);
        }
    }
});
