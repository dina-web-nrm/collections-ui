import DS from 'ember-data';

export default DS.Model.extend({
    method: DS.attr('string'),
    startDate: DS.attr('date'),

    locality: DS.belongsTo('locality', {async: true})
});
