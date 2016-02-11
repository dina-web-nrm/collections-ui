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

    formattedDate: Ember.computed('timestampCreated', function () {
        return moment(this.get('timestampCreated')).format('Do MMMM YYYY');
    })
});
