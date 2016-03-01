import Ember from 'ember';

export default Ember.Component.extend({
    i18n: Ember.inject.service(),

    session: Ember.inject.service(),

    tagName: 'ul',

    classNames: ['dwcm-component-language-selector'],

    actions: {

        /** Change application *language*. */
        changeLanguage: function (language) {
            this.set('i18n.locale', language);
            this.get('session').set('data.locale', language);
        }
    }
});
