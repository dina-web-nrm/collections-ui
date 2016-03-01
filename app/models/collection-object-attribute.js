import DS from 'ember-data';

export default DS.Model.extend({
    lifeStage: DS.attr('string'),
    sex: DS.attr('string'),
    condition: DS.attr('string'),
    type: DS.attr('string'),
    placement: DS.attr('string'),
    rackNumber: DS.attr('string'),
    measurements: DS.attr('string'),
    preservationStage: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    age: DS.attr('string')
});
