import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    session: Ember.inject.service('session'),

    primaryKey: 'localityID',
    attrs: {
        'geography': 'geographyID',
        'agent': 'createdByAgentID',
        'longitude': 'longitude1',
        'latitude': 'latitude1',
        'verbatimLongitude': 'long1Text',
        'verbatimLatitude': 'lat1Text',
        'uncertaintyRadius': 'latLongAccuracy',
        'paleoContext': {
            key: 'paleoContextID',
            serialize: 'records',
        },
    },
    serialize(){
        var json = this._super(...arguments);
        json.geographyID = parseInt(json.geographyID);

        if (json.localityID) {
            json.localityID = parseInt(json.localityID);
        }

        if (json.paleoContext) {
            json.paleoContextID = json.paleoContext;
        }

        delete json.paleoContext;

        return json;
    },
});
