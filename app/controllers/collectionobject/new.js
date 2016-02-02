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
    
    // TODO: Collect these fieldGroups from a Service based on the
    // department the user belongs to.
    fieldGroups: [
        {
            title: 'field_group_basic_data',
            fields: [{
                type: 'autocomplete',
                title: 'definitions.name'
            }] 
        }, {
            title: 'field_group_taxonomy',
            fields: [] 
        }, {
            title: 'field_group_site',
            fields: [] 
        }, {
            title: 'field_group_preparation',
            fields: [] 
        }, {
            title: 'field_group_other',
            fields: [] 
        }
    ]
});
