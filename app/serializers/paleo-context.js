import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
  //  primaryKey: 'paleoContextID',



    attrs: { 
        chronosStrat: {
            serialize: 'ids'
        },
        lithoStrat: {
            serialize: 'ids'
        }
    },

/*
       // keyForRelationship: function(key, relationship, method) { 
    keyForRelationship: function(key) { 
        return key;
    },

    keyForAttribute: function(attr) {
      return attr;
    }
*/
  /*
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
    */
});