import Ember from 'ember';

export default Ember.Component.extend({
    actions: {

        /** Handle collection being selected. */
        collectionSelected (collection) {
            this.get('model').set('collection', collection);
        },

        /** Handle accession being selected. */
        accessionSelected (accession) {
            this.get('model').set('accession', accession);
        }
    }
});
