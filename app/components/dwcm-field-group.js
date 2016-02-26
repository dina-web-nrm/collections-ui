import Ember from 'ember';

export default Ember.Component.extend({

    /** Set if field group is collapsed. */
    collapsed: false,

    /** Set to display count in header*/
    counter: null,

    actions: {

        /** Toggle if group is collapsed. */
        toggleCollapse() {
            this.toggleProperty('collapsed');
        }
    }
});
