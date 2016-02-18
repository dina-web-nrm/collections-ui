import Ember from 'ember';

export default Ember.Route.extend({
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
