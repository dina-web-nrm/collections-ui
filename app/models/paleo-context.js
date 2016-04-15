import DS from 'ember-data';

export default DS.Model.extend({
    chronosStrat: DS.belongsTo('geologictimeperiod', {async: true}),
    lithoStrat: DS.belongsTo('lithostrat', {async: true}),
    timestampCreated: DS.attr('number')
});
