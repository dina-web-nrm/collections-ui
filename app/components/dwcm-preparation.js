/* global moment */

import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-preparation'],

    /** Required store. */
    store: Ember.inject.service('store'),

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
        }
    }
});
