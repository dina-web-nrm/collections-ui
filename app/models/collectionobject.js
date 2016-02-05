/* global moment */

import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    guid: DS.attr(),
    catalogNumber: DS.attr(),
    timestampCreated: DS.attr(),
    
    agent: DS.belongsTo('agent', {async: true}),
    collection: DS.belongsTo('collection', {async: true}),
    
    formattedDate: Ember.computed('timestampCreated', function () {
        return moment(this.get('timestampCreated')).format('Do MMMM YYYY');
    })
});
