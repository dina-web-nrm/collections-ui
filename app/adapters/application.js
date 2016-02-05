import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://127.0.0.1:8080',
    namespace: 'dina-service/dina/v0',
    headers: {
        "Accept": "application/json",
        "Content-Type": undefined
    },
    pathForType: function(type) {
        return Ember.String.underscore(type);
    }
});