/* global moment */

import Ember from 'ember';

export default Ember.Component.extend({

    /** Required store. */
    store: Ember.inject.service('store'),

    isCreating: false,

    newCollectingEvent: function () {
        if(!this._newCollectingEvent) {
            this._newCollectingEvent = this.get('store').createRecord('collecting-event', {
                timestampCreated: moment().unix()
            });
        }

        return this._newCollectingEvent;
    }.property(),

    actions: {
        enableCreate () {
            this.set('isCreating', true);

            this.get('model').set(
                'collectingEvent', this.get('newCollectingEvent')
            );
        },

        selectExisting () {
            this.set('isCreating', false);
            this.get('model').set('collectingEvent', undefined);
        },

        selectedCollectingEvent (collectingEvent) {
            this.get('model').set('collectingEvent', collectingEvent);
        },

        selectedLocality (locality) {
            this.get('model').get('collectingEvent').set('locality', locality);
        }
    }
});
