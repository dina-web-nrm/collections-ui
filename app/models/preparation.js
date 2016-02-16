import DS from 'ember-data';

export default DS.Model.extend({
    'countAmt': DS.attr('number'),
    'preparationType': DS.belongsTo('prep-type'),
    'timestampCreated': DS.attr('number')
});
