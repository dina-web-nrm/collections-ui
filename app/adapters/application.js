import DS from 'ember-data';
import config from '../config/environment';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
    host: config.HOST,
    //host: 'http://tracktracker.se',
    namespace: 'collections/v1', 
    
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
    
    // defaultSerializer: '-default',
    /**
     * Override method to be able to append eg. "search"
     * to the url.
     */

    urlForQuery (query, modelName) {
        var url = this._super(query, modelName);
        console.log(url);

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