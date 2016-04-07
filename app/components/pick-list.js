import Ember from 'ember';

import Filterable from '../mixins/filterable';

export default Ember.Component.extend(Filterable, {
    classNames: ['pick-list', 'form-group-sm'],
    
    /** Inject services. */
    store: Ember.inject.service(),
    
    /** Inital values for pick list. */
    value: null,
    options: [],
    
    /**
     * Load available options.
     * 
     * Observes changes to the filters and reloads the available options.
     * This to prevent from selecting values belonging to a different collection.
     * 
    */
    loadOptions: function () {
        let queryParams = Ember.$.extend({
            name: this.get('name'),
            search: true,
            exact: true
        }, this.get('filters'));
        
        if (this.get('filters.collectionID')) {
            this.get('store').query('pick-list', queryParams).then((response)=>{
                const listId = response.get('firstObject.id');
                if (listId) {
                    this.get('store').query('pick-list-item', {
                        pickListID: listId,
                        search: true,
                        exact: true
                    }).then((response)=>{
                        this.set('options', response);
                    });   
                }
            });
        } else {
            this.reset();
        }
    }.observes('filters').on('init'),
    
    /** Reset component to inital state. */
    reset() {
        this.set('options', []);
        this.set('value', []);
        
        if (this.attrs.update) {
            this.attrs.update(undefined);
        }
    }
});
