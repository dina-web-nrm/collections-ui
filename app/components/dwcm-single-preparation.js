import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['dwcm-single-preparation', 'row'],

    /** Required preparation model. */
    model: null,

    actions: {

        /** Set *taxon* for current model. */
        setPreparationType (preparationType) {
            this.model.set('preparationType', preparationType);
        },

        /** Call external `remove` method with current model. */
        remove () {
            this.get('remove')(this.model);
        }
    }
});
