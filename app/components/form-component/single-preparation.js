import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-single-preparation', 'row'],
    
    formConfiguration: Ember.inject.service('form-configuration'),
    configuration: Ember.computed.alias('formConfiguration.component.singlePreparation'),

    /** Required preparation model. */
    model: null,

    /** Display destroy modal dialog. */
    displayConfirmDialog: false,

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
        },

        /** Toggle destroy dialog. */
        toggleDestroy() {
            this.toggleProperty('displayConfirmDialog');
        }
    }
});
