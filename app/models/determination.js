import DS from 'ember-data';

export default DS.Model.extend({
    isCurrent: DS.attr('boolean'),
    determinedDate: DS.attr('date'),
    method: DS.attr(),
    taxon: DS.belongsTo('taxon', {async: true}),
    confidence: DS.attr(),
    determiner: DS.belongsTo('agent', {async: true}),
    typeStatus: DS.attr(),
    timestampCreated: DS.attr(),
    collectionMemberID: DS.attr()
});
