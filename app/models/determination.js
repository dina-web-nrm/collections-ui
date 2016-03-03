import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    isCurrent: DS.attr('boolean'),
    determinedDate: DS.attr('date'),
    method: DS.attr('string'),
    confidence: DS.attr('string'),
    typeStatus: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    collectionMemberID: DS.attr('number'),

    taxon: DS.belongsTo('taxon', {async: true}),
    determiner: DS.belongsTo('agent', {async: true}),

    taxonName: Ember.computed.alias('taxon.fullName'),
    determinerName: Ember.computed.alias('determiner.fullName')
});
