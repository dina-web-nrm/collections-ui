/* global moment */

import Ember from 'ember';

export default Ember.Route.extend({
    model () {
        return this.store.createRecord('collectionobject', {
            objectAttribute: this.store.createRecord('collection-object-attribute', {
                timestampCreated: moment().unix()
            })
        });
    },

    deactivate () {
        const controller = this.controllerFor('collectionobject.new');
        const model = controller.get('model');

        // TODO: Create a mixin to override `rollbackAttributes` and
        // apply `rollbackAttributes` to any dirty relationship as well.
        model.rollbackAttributes();

        controller.set('_displayErrors', false);
    }
});
