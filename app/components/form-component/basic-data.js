import Ember from 'ember';

export default Ember.Component.extend({

    filters: Ember.inject.service('filters'),

    actions: {

        /** Handle collection being selected. */
        collectionSelected (collection) {
            this.get('model').set('collection', collection);

            if (collection) {
                this.get('filters').add(
                    {
                        key: 'disciplineID',
                        value: collection.get('disciplineID')
                    }, {
                        key: 'collectionID',
                        value: collection.get('id')
                    }
                );
            } else {
                this.get('filters').remove('collectionID', 'disciplineID');
            }
        },

        /** Handle accession being selected. */
        accessionSelected (accession) {
            this.get('model').set('accession', accession);
        }
    }
});
