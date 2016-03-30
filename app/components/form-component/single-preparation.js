import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-single-preparation', 'row'],
    
    configuration: Ember.inject.service('form-configuration'),
    
    /** Required preparation model. */
    model: null,
    
    hidePreparationNumber: Ember.computed.alias('configuration.component.single-preparation.hide.preparation-number'),
    hideIndividualsCount: Ember.computed.alias('configuration.component.single-preparation.hide.preparation-number'),

    actions: {

        /** Set *storage* for current model. */
        setStorage (storage) {
            this.model.set('storage', storage);
        },

        /** Set *preparationType* for current model. */
        setPreparationType (preparationType) {
            this.model.set('preparationType', preparationType);
        },

        /** Call external `remove` method with current model. */
        remove () {
            this.get('remove')(this.model);
        }
    }
});
