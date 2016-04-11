import Ember from 'ember';
import AutocompleteInput from './autocomplete-input';

export default AutocompleteInput.extend({
    
    /** Inject services. */
    solr:  Ember.inject.service('solr'),
    
    /** Override response count limit. */    
    limit: 40,
    
    /** Total number of matches in last query */
    totalRows: null,
    
    /** Is all matching records in result. */
    isResponseSubset: Ember.computed('totalRows', 'limit', function () {
        return this.get('totalRows') > this.get('limit');
    }),

    _fetchRemoteData(filterField, filterValue, limit) {
        let filterQuery = Ember.$.extend({}, this.get('filters'));

        this.get('solr').select(filterValue, {
            entityType: this.get('entityType'),
            fq: filterQuery,
            rows: limit
        }).then(({records, totalRows})=>{
            if (records.length) {
                this.get('store').query(this.storeName, {
                    ids: records,
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

            this.set('totalRows', totalRows);
        });   
    }
});
