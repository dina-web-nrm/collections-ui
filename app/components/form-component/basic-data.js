import Ember from 'ember';

export default Ember.Component.extend({

    filters: Ember.inject.service('filters'),

    actions: {

        /** Handle collection being selected. */
        collectionSelected (collection) {
            this.get('model').set('collection', collection);

            if (collection) {
                this.get('filters').add(
                    'disciplineID', collection.get('disciplineID')
                );

                this.get('filters').add(
                    'collectionID', collection.get('id')
                );
            } else {
                this.get('filters').remove('collectionID');
            }
        },

        /** Handle accession being selected. */
        accessionSelected (accession) {
            this.get('model').set('accession', accession);
        }
    }
});
