//import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
 //   session: Ember.inject.service('session'),
    attrs: { 
 
      //  'isCurrent': 'current',
       // 'determinedDate': 'determineddate',
      //  'determinedDatePrecision': 'determineddateprecision',
      //  'typeStatus': 'typestatus',
        taxon: {
            key: 'taxon',
            serialize: 'ids'
        },  
        determiner:  {
            key: 'determiner',
            serialize: 'ids'
        }, 
        'verbatimTaxon': 'text1'
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