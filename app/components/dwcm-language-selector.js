import Ember from 'ember';

export default Ember.Component.extend({
    i18n: Ember.inject.service(),

    tagName: 'ul',

    classNames: ['dwcm-component-language-selector'],

    actions: {
        changeLanguage: function (language) {

            // TODO: Persist to Cookie and read Cookie when
            // App is being initialised.
            this.set('i18n.locale', language);
        }
    }
});