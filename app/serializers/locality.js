import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend({
    session: Ember.inject.service('session'),

    primaryKey: 'localityID',
    attrs: {
        'geography': 'geographyID',
        'agent': 'createdByAgentID',
        'longitude': 'longitude1',
        'latitude': 'latitude1',
        'verbatimLongitude': 'long1Text',
        'verbatimLatitude': 'lat1Text',
        'uncertaintyRadius': 'latLongAccuracy'
    },
    serialize(){
        var json = this._super(...arguments);
        json.geographyID = parseInt(json.geographyID);
        json.createdByAgentID = parseInt(this.get('session').get('data.authenticated.id'));
        json.localityID = parseInt(json.localityID);
        return json;
    }
});