import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'localityID',
    attrs: {
        'geography': 'geographyID',
        'agent': 'createdByAgentID',
        'longitude': 'longitude1',
        'latitude': 'latitude1'
    },
    serialize(){
        var json = this._super(...arguments);
        json.disciplineID = 3;
        json.geographyID = parseInt(json.geographyID);

        return json;
    }
});