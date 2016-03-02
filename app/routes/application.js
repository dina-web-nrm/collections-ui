import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

    session: Ember.inject.service(),

    i18n: Ember.inject.service(),

    model () {
        this.store.findAll('collection');
    },

    /** Override before model and setup localization. */
    beforeModel () {
        const result = this._super(...arguments);
        const language = this.get('session.data.locale');

        if (language) {
            this.set('i18n.locale', language);
        }

        return result;
    }
});