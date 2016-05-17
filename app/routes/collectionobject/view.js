import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    renderTemplate() {
        this.render('collectionobject.view');
    },
    afterModel: function(model){
        return Ember.RSVP.all([
            model.get('cataloger'), model.get('determinations'),
            model.get('collectingEvent'), model.get('preparations'),
            model.get('objectAttributes')
        ]);
    }
});
