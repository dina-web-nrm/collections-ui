/* global moment */

import Ember from 'ember';

export default Ember.Component.extend({

    /** Required store. */
    store: Ember.inject.service('store'),

    /** Is creating new collection event. */
    isCreating: false,

    /** Return new collecting event. */
    newCollectingEvent: function () {
        if(!this._newCollectingEvent) {
            this._newCollectingEvent = this.get('store').createRecord('collecting-event', {
                timestampCreated: moment().unix()
            });
        }

        return this._newCollectingEvent;
    }.property(),

    localityDisplayAttributes: Ember.computed('model.collectingEvent.locality.localityName', function () {
        return [{
            title:'Fyndplats',
            value: this.get('model').get('collectingEvent').get('locality').get('localityName')
        }, {
            title: 'Longitude',
            value: this.get('model').get('collectingEvent').get('locality').get('longitude1')
        }, {
           title: 'Latitude',
           value: this.get('model').get('collectingEvent').get('locality').get('latitude1')
        }, {
           title: 'Höjd ö hav',
           value: this.get('model').get('collectingEvent').get('locality').get('maxElevation')
        }, {
           title: 'höjd u hav',
           value: this.get('model').get('collectingEvent').get('locality').get('minElevation')
        }];
    }),

    actions: {

        /** Enable create mode. */
        enableCreate () {
            this.set('isCreating', true);

            this.get('model').set(
                'collectingEvent', this.get('newCollectingEvent')
            );
        },

        /** Enable selecting existing collectin event. */
        selectExisting () {
            this.set('isCreating', false);
            this.get('model').set('collectingEvent', undefined);
        },

        /** Handle collecting event being selected. */
        selectedCollectingEvent (collectingEvent) {
            this.get('model').set('collectingEvent', collectingEvent);
        },

        /** Handle locality being selected. */
        selectedLocality (locality) {
            this.get('model').get('collectingEvent').set('locality', locality);
        }
    }
});
