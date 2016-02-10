import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        collectionSelected (collection) {
            this.get('model').set('collection', collection);
        },
        accessionSelected (accession) {
            this.get('model').set('accession', accession);
        }
    }
});
