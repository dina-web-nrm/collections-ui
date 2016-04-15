import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    attrs: {
        chronosStrat: 'chronosStratID',
        lithoStrat: 'lithoStratID'
    },
    serialize(){
        var json = this._super(...arguments);
        console.log(json);
        if (json.chronosStratID) {
            json.chronosStratID = parseInt(json.chronosStratID);   
        }
        if (json.lithoStratID) {
            json.lithoStratID = parseInt(json.lithoStratID);   
        }

        return json;
    }
});