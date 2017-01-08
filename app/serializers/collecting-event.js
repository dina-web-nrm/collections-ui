import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
    session: Ember.inject.service('session'), 

    attrs: {  
        locality: {
            key: 'locality',
            serialize: 'records'
        },
        givenName: 'text1',
        description: 'text2',
        
        collectors: {
            key: 'collectors',
            serialize: 'records'
        }  
     //   collectingeventattachments: {
     //       key: 'collectingeventattachments',
    //        serialize: 'records'
      //  }
        
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
 
});
