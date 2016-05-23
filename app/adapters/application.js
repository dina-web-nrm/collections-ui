import DS from 'ember-data';
import config from '../config/environment';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: config.HOST,
    namespace: 'collections/v0',
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    },
    
    authorizer: 'authorizer:oauth',
    
    /**
     * Override to disable pluralization for object types.
     */
    pathForType (type) {
        return type.classify().toLowerCase();
    },

    /**
     * Override method to be able to append eg. "search"
     * to the url.
     */
    urlForQuery (query, modelName) {
        var url = this._super(query, modelName);

        if (query && query.search) {
            url = url + '/search';
            delete query.search;
            
            if (query && query.ids) {
                url = `${url}/(${query.ids.join()})`;
                delete query.ids;
            }
        }

        return url;
    }
});