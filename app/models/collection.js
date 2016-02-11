import DS from 'ember-data';

export default DS.Model.extend({
    collectionName: DS.attr('string'),
    code: DS.attr('string'),
    userGroupScopeId: DS.attr('number'),
    diciplinID: DS.attr('number'),
    timestampCreated: DS.attr('number'),
    catalogFormatNumName: DS.attr('string'),
    timestampModified: DS.attr('number'),
    collectionType: DS.attr('string'),
    description: DS.attr('string'),
    estimatedSize: DS.attr('number'),
    guid: DS.attr('string'),
    isEmbeddedCollectingEvent: DS.attr('boolean'),
    primaryFocus: DS.attr('string'),
    primaryPurpose: DS.attr('string'),
    regNumber: DS.attr('string'),
    remarks: DS.attr('string'),
    disciplineID: DS.attr('number'),
    version: DS.attr('number')
});
