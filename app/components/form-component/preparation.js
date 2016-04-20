import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

    classNames: ['dwcm-preparation'],

    /** Inject services. */
    store: Ember.inject.service('store'),
    formConfiguration: Ember.inject.service('form-configuration'),
    configuration: Ember.computed.alias('formConfiguration.component.preparation'),

    partialType: Ember.computed('formConfiguration.type', function () {
        return `partial/preparation/${this.get('formConfiguration.type')}`;
    }),
    
    init() {
        this._super(...arguments);
        Ember.run.schedule('actions', this, function() {
            this.send('addPreparation');
        });
    },
    
    /** Default options for sex field. */
    sexOptions: [{
            value: 'unknown',
            displayName: 'definitions.unknown'
        }, {
            value: 'female',
            displayName: 'definitions.female'
        }, {
            value: 'male',
            displayName: 'definitions.male'
    }],

    actions: {

        /** Add new preparation. */
        addPreparation () {
            let preparation = this.get('store').createRecord('preparation', {
                timestampCreated: moment().unix(),
                countAmt: 0
            });
            this.model.get('preparations').pushObject(preparation);
        },

        /** Remove single *preparation*. */
        removePreparation (preparation) {
            this.model.get('preparations').removeObject(preparation);
        },

        /** Set *preparationType* for first preparation on model. */
        setPreparationType (preparationType) {
            this.model.get('preparations.firstObject').set(
                'preparationType', preparationType
            );
        },
        
        /** Set *preparationType* for first preparation on model. */
        setStorage (storage) {
            this.model.get('preparations.firstObject').set(
                'storage', storage
            );
        },
        
        /** Add comment to preparation. */
        addComment(type) {
            if (type === 'verbatim')
                console.log('Add new VERBATIM FIELD!');
            else
                console.log('Add new COMMENT!');
        }
    }
});
