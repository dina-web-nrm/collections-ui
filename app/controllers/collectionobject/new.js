/* global moment */

import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
    i18n: Ember.inject.service(),

    transitionToCollectionObject (collectionObject) {
        this.transitionToRoute(
            'collectionobject.view', collectionObject
        );
    },

    actions: {
        navigationClick(fieldGroupId) {
            Ember.$('html, body').animate({
                scrollTop: Ember.$('#field-group-' + fieldGroupId).offset().top - 10
            }, 300);
        },
        submitForm () {
            let controller = this;

            // TODO: Validate and save model.
            this.model.set('timestampCreated', moment().unix());

            this.store.findRecord('agent', 3).then((agent) => {
                this.model.set('agent', agent);
                this.model.set('name', 'test-create');
                this.model.save().then((record) => {
                    controller.transitionToCollectionObject(record);
                });
            });
        }
    },

    entityType: t('definitions.zoological'),

    groups: [
        'dwcm-basic-data',
        'dwcm-taxonomy',
        // 'dwcm-preparation',
        // 'dwcm-collecting-event'
    ]

});
