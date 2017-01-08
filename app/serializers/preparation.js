import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
    session: Ember.inject.service('session'),

 
    attrs: { 
        'preparationType': { 
            serialize: 'ids',
            deserialize: false 
        },
        storage: {
            key: 'storage',
            serialize: 'ids'
        },
        'individualsCount': 'integer1', 
    },



    /*

    
    keyForRelationship: function(key) {
        return Ember.String.underscore(key);
    }

    serializeBelongsTo: function(snapshot, json, relationship) {
    var key = relationship.key;

    var belongsTo = snapshot.belongsTo(key);

    key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;

    json[key] = Ember.isNone(belongsTo) ? belongsTo : belongsTo.record.toJSON();
  },

    serializeAttribute: function(snapshot, json, key, attributes) {
        json.attributes = json.attributes || {};
        this._super(snapshot, json.attributes, key, attributes);
    }*/

    /*
    
   // keyForRelationship: function(key, relationship, method) { 
    keyForRelationship: function(key) { 
        return key;
    },

    keyForAttribute: function(attr) {
      return attr;
    }
    */
});