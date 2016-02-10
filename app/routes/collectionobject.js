import Ember from 'ember';

export default Ember.Route.extend({
    offset: 0,
    model() {
        return this.store.query(
            'collectionobject', {
                offset: this.offset
            }
        );
    },

    actions: {
        nextPage: function() {
            this.offset = parseInt(this.store.peekAll('collectionobject').objectAt(
                this.store.peekAll('collectionobject').get('length') - 1
            ).get('id')) + 1;

            return this.refresh();
        }
    }
});
