/* global moment */

import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['form-component-collecting-event'],

    /** Required store. */
    store: Ember.inject.service('store'),
    formConfiguration: Ember.inject.service('form-configuration'),
    configuration: Ember.computed.alias('formConfiguration.component.collectingEvent'),
    
    /** Default zoom level. */
    mapZoom: 13,
    
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
    
    /** Return partial type based on division configuration. */
    partialType: Ember.computed('formConfiguration.type', function () {
        return `partial/collecting-event/create-${this.get('formConfiguration.type')}`;
    }),

    /** Enable or disable create mode when changing configuration. */
    onConfigurationChange: function() {
        Ember.run.scheduleOnce('actions', this, ()=>{
           if (this.get('configuration.enableCreate')) {
                this.send('enableCreate');
            } else {
                this.send('selectExisting');
            } 
        });
    }.observes('configuration').on('init'),

    actions: {

        /** Enable create mode. */
        enableCreate () {
            this.set('isCreating', true);
            this.model.set(
                'collectingEvent', this.get('newCollectingEvent')
            );
        },

        /** Enable selecting existing collectin event. */
        selectExisting () {
            this.set('isCreating', false);
            this.model.set('collectingEvent', undefined);
        },

        /** Handle collecting event being selected. */
        selectedCollectingEvent (collectingEvent) {
            this.model.set('collectingEvent', collectingEvent);
        },

        /** Handle locality being selected. */
        selectedLocality (locality) {
            this.model.get('collectingEvent').set('locality', locality);
        },

        /** Create and add new collector based on *agent*. */
        createCollector (agent) {
            let index = this.model.get('collectingEvent.collectors').findBy('agent.id', agent.get('id'));

            if (index !== undefined) {
                return;
            }

            let numberOfCollectors = this.model.get('collectingEvent.collectors.length'),
                isPrimary = numberOfCollectors === 0;

            let collector = this.get('store').createRecord('collector', {
                agent: agent,
                isPrimary: isPrimary,
                orderNumber: numberOfCollectors + 1,
                timestampCreated: moment().unix()
            });

            this.model.get('collectingEvent').get('collectors').pushObject(collector);
        },

        /** Remove collector from collecting event. */
        removeCollector (collector) {
            collector.destroyRecord();
        }
    }
});
