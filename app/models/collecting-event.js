import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    method: DS.attr('string'),
    startDate: DS.attr('date'),
    endDate: DS.attr('date'),
    verbatimDate: DS.attr('string'),
    verbatimLocality: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    givenName: DS.attr('string'),

    locality: DS.belongsTo('locality', {async: true}),
    collectors: DS.hasMany('collector', {async: true}),
    agent: DS.belongsTo('agent', {async: true}),
    
    displayName: Ember.computed('locality', 'givenName', function () {
        if (this.get('givenName')) {
            return this.get('givenName');
        } else {
            return `${this.get('locality.localityName')}`;
        }
    })
});
