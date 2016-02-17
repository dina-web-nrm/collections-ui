import DS from 'ember-data';

export default DS.Model.extend({
    method: DS.attr('string'),
    startDate: DS.attr('date'),
    verbatimDate: DS.attr('string'),
    verbatimLocality: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    locality: DS.belongsTo('locality', {async: true}),
    givenName: DS.attr('string')
});
