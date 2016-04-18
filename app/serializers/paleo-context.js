import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'paleoContextID',
    attrs: {
        chronosStrat: 'chronosStratID',
        lithoStrat: 'lithoStratID'
    },
    serialize(){
        var json = this._super(...arguments);
        if (json.paleoContextID) {
            json.paleoContextID = parseInt(json.paleoContextID);   
        }
        if (json.chronosStratID) {
            json.chronosStratID = parseInt(json.chronosStratID);   
        }
        if (json.lithoStratID) {
            json.lithoStratID = parseInt(json.lithoStratID);   
        }

        return json;
    }
});