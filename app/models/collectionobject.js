/* global moment */

import DS from 'ember-data';
import Ember from 'ember';

import {validator, buildValidations} from 'ember-cp-validations';
import { translationMacro as t } from 'ember-i18n';

import DependentRelationships from '../mixins/dependent-relationships';

const Validations = buildValidations({
    collection: validator('presence', {
        presence: true,
        description: 'fields.labels.collection'
    }),

    preparations: validator('has-many')
});


export default DS.Model.extend(Validations, DependentRelationships, {
    guid: DS.attr('string'),
    catalogNumber: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    catalogedDate: DS.attr('date'),
    name: DS.attr('string'),

    agent: DS.belongsTo('agent', {async: true}),

    cataloger: DS.belongsTo('agent', {async: true}),
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
