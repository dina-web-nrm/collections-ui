/* global moment */

import DS from 'ember-data';
import Ember from 'ember';

import {validator, buildValidations} from 'ember-cp-validations';

import DependentRelationships from '../mixins/dependent-relationships';

const Validations = buildValidations({
    collection: validator('presence', {
        presence: true,
        descriptionKey: 'fields.labels.collection'
    }),
  /*  
    catalogNumber: validator('unique-catalog-number', {
        debounce: 300,
        descriptionKey: 'fields.labels.catalogNumber',
        dependentKeys: ['collection'],
        disabled() {
            return Ember.isBlank(this.get('model.catalogNumber'));
        },
    }),
    
    preparations: validator('has-many'),
    determinations: validator('has-many'),
    collectingEvent: validator('belongs-to', {
        disabled() {
            // Disable if Collecting event is not present.
            // Using timestampCreated due to that is the only
            // attr set on a newly created collecting event.
            return Ember.isNone(
                this.get('model.collectingEvent.timestampCreated')
            );
        }
    })
    */
});


export default DS.Model.extend(Validations, DependentRelationships, {
    guid: DS.attr('string'),
    catalogNumber: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    catalogedDate: DS.attr('date'),
    name: DS.attr('string'),
    collectionObjectID: DS.attr('number'),
    collectionMemberID: DS.attr('number'),

    createdByAgent: DS.belongsTo('agent', {async: true}),

  //  cataloger: DS.belongsTo('agent', {async: true}),
    collection: DS.belongsTo('collection', {async: true}),
  //  accession: DS.belongsTo('accession', {async: true}),
 //   collectionobjectattachments: DS.hasMany('collection-object-attachment', {async: true}),
  //  determinations: DS.hasMany('determinations', {async: true}),
  //  preparations: DS.hasMany('preparations', {async: true}),
   // collectionObjectAttribute: DS.belongsTo('collection-object-attribute', {async: true}),
    collectingEvent: DS.belongsTo('collecting-event', {async: true}),
  
    formattedDate: Ember.computed('timestampCreated', function () {
        return moment(this.get('timestampCreated')).format('Do MMMM YYYY');
    })

});
