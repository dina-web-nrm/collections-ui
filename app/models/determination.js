import DS from 'ember-data';

export default DS.Model.extend({
    isCurrent: DS.attr('boolean'),
    determinedDate: DS.attr('number'),
    method: DS.attr('string'),
    taxon: DS.belongsTo('taxon', {async: true}),
    confidence: DS.attr('string'),
    determiner: DS.belongsTo('agent', {async: true}),
    typeStatus: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    collectionMemberID: DS.attr('number')
});
