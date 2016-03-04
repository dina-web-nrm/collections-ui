import Ember from 'ember';

export default Ember.Controller.extend({

    /** Offset query params. */
    queryParams: ['offset'],

    /** Bind query param to offset. */
    offset: 0,

    /** Display previous button. */
    previousVisible: Ember.computed('offset', function () {
       return false; // this.get('offset') !== 0;
    }),

    actions: {

        /** Handle next page event. */
        nextPage () {
            let offset = parseInt(this.store.peekAll('collectionobject').objectAt(
                this.store.peekAll('collectionobject').get('length') - 1
            ).get('id')) + 1;

            this.set('offset', offset);
        }
    }
});
