/* global moment */

import Ember from 'ember';
import { translationMacro as t } from 'ember-i18n';

export default Ember.Controller.extend({
    i18n: Ember.inject.service(),

    entityType: t('definitions.zoological'),

    groups: [
        'dwcm-basic-data',
        'dwcm-taxonomy',
        'dwcm-preparation',
        'dwcm-collecting-event'
    ]
});
