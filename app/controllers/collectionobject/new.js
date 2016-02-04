/* global $ */
import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
    i18n: Ember.inject.service(),
    
    actions: {
        navigationClick(fieldGroupId) {     
            $('html, body').animate({
                scrollTop: $('#field-group-' + fieldGroupId).offset().top - 10
            }, 300);
        }
    },
    
    entityType: t('definitions.zoological'),

    groups: ['dwcm-basic-data', 'dwcm-taxonomy', 'dwcm-preparation']

});
