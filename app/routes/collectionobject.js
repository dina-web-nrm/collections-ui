import Ember from 'ember';

import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

    /** Configure how to handle query params. */
    queryParams: {
        offset: {
            refreshModel: true,
            scope: 'controller',
        },
    },

    model(params) {
        return Ember.RSVP.hash({
            collectionObjects: this.store.query(
                'collectionobject', {
                    offset: params.offset,
                    orderby: 'collectionObjectID',
                    limit: 20,
                    sort: 'desc',
                }
            ),
            collections: this.store.findAll('collection'),
        });
    },
});
