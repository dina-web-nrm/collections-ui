/* global moment */

import DS from 'ember-data';
import Ember from 'ember';
import DependentRelationships from '../mixins/dependent-relationships';

export default DS.Model.extend(DependentRelationships, {
    guid: DS.attr(),
    catalogNumber: DS.attr(),
    timestampCreated: DS.attr(),
    name: DS.attr(),

    agent: DS.belongsTo('agent', {async: true}),
    collection: DS.belongsTo('collection', {async: true}),
    accession: DS.belongsTo('accession', {async: true}),
    determinations: DS.hasMany('determinations', {async: true}),

    formattedDate: Ember.computed('timestampCreated', function () {
        return moment(this.get('timestampCreated')).format('Do MMMM YYYY');
    })
});
