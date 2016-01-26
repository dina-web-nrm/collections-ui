import Ember from 'ember';

export default Ember.Route.extend({
    i18n: Ember.inject.service(),
    afterModel: function(model, transition) {
        this.set('i18n.locale', Ember.get(transition, 'queryParams.language') || 'sv');
    }
});