import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://127.0.0.1:8080',
    namespace: 'dina-service/dina/v0',
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    },

    /**
     * Override to disable pluralization for object types.
     */
    pathForType (type) {
        return Ember.String.underscore(type);
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