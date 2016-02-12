import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        return this.store.createRecord('collectionobject', {});
    },

    deactivate () {
        let model = this.controllerFor('collectionobject.new').get('model');

        // TODO: Create a mixin to override `rollbackAttributes` and
        // apply `rollbackAttributes` to any dirty relationship as well.
        model.rollbackAttributes();
    }
});
