import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
    i18n: Ember.inject.service(),
    entityType: t('definitions.zoological'),
    fieldGroups: [
        'Grunddata', 'Taxonomi/Bestämning',
        'Insamling/Fyndplats', 'Objekt/Preparation',
        'Övrigt'
    ]
});
