import Ember from 'ember';

import moment from 'moment';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model () {
        return this.store.createRecord('collectionobject', {
            catalogedDate: moment().toDate(),
            objectAttribute: this.store.createRecord('collection-object-attribute', {})
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
