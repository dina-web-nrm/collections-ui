import Ember from 'ember';

export default Ember.Route.extend({

    /** Configure how to handle query params. */
    queryParams: {
        offset: {
            refreshModel: true,
            scope: 'controller'
        }
    },

    model(params) {
        return Ember.RSVP.hash({
            collectionObjects: this.store.query(
                'collectionobject', {
                    offset: params.offset,
                    orderby: 'collectionObjectID',
                    limit: 20
                }
            ),
            collections: this.store.findAll('collection')
        });
    },
});
