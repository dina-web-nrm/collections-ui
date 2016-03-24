import Ember from 'ember';
import AutocompleteInput from './autocomplete-input';

export default AutocompleteInput.extend({
    
    /** Inject services. */
    solr:  Ember.inject.service('solr'),
    
    _fetchRemoteData(filterField, filterValue, limit) {
        let filterQuery = Ember.$.extend({}, this.get('filters'));

        this.get('solr').select(filterValue, {
            entityType: this.get('entityType'),
            fq: filterQuery,
            rows: limit
        }).then((data)=>{
            if (data.length) {
                this.get('store').query(this.storeName, {
                    ids: data,
                    search: true
                }).then((response) => {
                    
                    let sortBy = this.get('sortBy');
                    if (sortBy) {
                        response = response.sortBy(sortBy);                        
                    }

                    this.set('previewData', response);
                }).catch((reason) => {
                    this.set('previewData', []);
                    console.warn('Invalid response from server: ', reason);
                });    
            } else {
                this.set('previewData', []);
            }
        });   
    }
});
