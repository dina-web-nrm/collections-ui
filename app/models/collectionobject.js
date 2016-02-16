/* global moment */

import DS from 'ember-data';
import Ember from 'ember';
import DependentRelationships from '../mixins/dependent-relationships';

export default DS.Model.extend(DependentRelationships, {
    guid: DS.attr('string'),
    catalogNumber: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    name: DS.attr('string'),

    agent: DS.belongsTo('agent', {async: true}),
    collection: DS.belongsTo('collection', {async: true}),
    accession: DS.belongsTo('accession', {async: true}),
    determinations: DS.hasMany('determinations', {async: true}),
    preparations: DS.hasMany('preparations', {async: true}),
    objectAttribute: DS.belongsTo('collection-object-attribute', {async: true}),
    collectingEvent: DS.belongsTo('collecting-event', {async: true}),

    formattedDate: Ember.computed('timestampCreated', function () {
        return moment(this.get('timestampCreated')).format('Do MMMM YYYY');
    })
});
