import DS from 'ember-data';

export default DS.Model.extend({
    timestampCreated: DS.attr('number'),
    isPrimary: DS.attr('boolean'),
    orderNumber: DS.attr('number'),

    agent: DS.belongsTo('agent', {async: true})
});
