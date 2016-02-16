import DS from 'ember-data';

export default DS.Model.extend({
    method: DS.attr('string'),
    startDate: DS.attr('date'),
    timestampCreated: DS.attr('number'),
    locality: DS.belongsTo('locality', {async: true})
});
