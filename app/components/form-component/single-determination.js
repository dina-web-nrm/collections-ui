import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-single-determination'],

    /** Required determination model. */
    model: null,
    
    /** Inject services. */
    configuration: Ember.inject.service('form-configuration'),
    
    hideMethod: Ember.computed.alias('configuration.component.determination.hide.method'),
    hideConfidence: Ember.computed.alias('configuration.component.determination.hide.confidence'),
    hideTypeStatus: Ember.computed.alias('configuration.component.determination.hide.type-status'),
    
    /** Convert index from zero index. */
    displayIndex: function () {
        let _index = this.get('index');
        return ++_index;
    }.property('index'),

    actions: {

        /** Set *taxon* for current model. */
        setTaxonomy (taxon) {
            this.model.set('taxon', taxon);
        },

        /** Call external `remove` method with current model. */
        remove () {
            this.get('remove')(this.model);
        },

        /** Set *agent* as determiner. */
        setDeterminer (agent) {
            this.model.set('determiner', agent);
        }
    }
});
