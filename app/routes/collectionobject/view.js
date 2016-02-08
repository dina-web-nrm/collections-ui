import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate() {
        this.render('collectionobject.view');
    },
    afterModel: function(model){
        return model.get('agent');
    }
});
