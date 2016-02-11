import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-single-determination'],

    /** Required determination model. */
    model: null,

    actions: {
        setTaxonomy (taxon) {
            this.model.set('taxon', taxon);
        },
        remove () {
            this.get('remove')(this.model);
        }
    }
});
