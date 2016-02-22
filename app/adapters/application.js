import DS from 'ember-data';
import config from '../config/environment';


export default DS.JSONAPIAdapter.extend({
    host: config.HOST,
    namespace: 'dina-service/dina/v0',
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    },

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
        }

        return url;
    }
});