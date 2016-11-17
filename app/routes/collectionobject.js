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
            
            //testkod, dara in alla modeller i storen för att se vilka som failar.
            //nuvarande läge är att alla kommer in.
            accessions: this.store.findAll('accession'),
            agents: this.store.findAll('agent'),
            collections: this.store.findAll('collection'),
            attachments: this.store.findAll('attachment'),
            collectingEvents: this.store.findAll('collecting-event'),
            collectingEventAttachments: this.store.findAll('collecting-event-attachment'),
            collectionObjectAttachments: this.store.findAll('collection-object-attachment'),
            collectionObjectAttributes: this.store.findAll('collection-object-attribute'),
            collectors: this.store.findAll('collector'),
            determinations: this.store.findAll('determination'),
            disciplines: this.store.findAll('discipline'),
            geographies: this.store.findAll('geography'),
            treeDefs: this.store.findAll('geography-treedef-item'),
            timePeriod: this.store.findAll('geologictimeperiod'),
            institutions: this.store.findAll('institution'),
            lithostrats: this.store.findAll('lithostrat'),
            localities: this.store.findAll('locality'),
            paleoContexts: this.store.findAll('paleo-context'),
            pickLists: this.store.findAll('pick_list'),
            pickListItems: this.store.findAll('pick-list-item'),
            prepType: this.store.findAll('prep-type'),
            preparations: this.store.findAll('preparation'),
            preparationAttachments: this.store.findAll('preparation-attachment'),
            storages: this.store.findAll('storage'),
            taxons: this.store.findAll('taxon'),

        });
    },
});
