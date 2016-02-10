import DS from 'ember-data';

export default DS.Model.extend({
    collectionName: DS.attr(),
    code: DS.attr(),
    collectionId: DS.attr(),
    userGroupScopeId: DS.attr(),
    diciplinID: DS.attr(),
    timestampCreated: DS.attr(),
    catalogFormatNumName: DS.attr(),
    timestampModified: DS.attr(),
    collectionType: DS.attr(),
    description: DS.attr(),
    estimatedSize: DS.attr(),
    guid: DS.attr(),
    isEmbeddedCollectingEvent: DS.attr(),
    primaryFocus: DS.attr(),
    primaryPurpose: DS.attr(),
    regNumber: DS.attr(),
    remarks: DS.attr(),
    disciplineID: DS.attr(),
    version: DS.attr()
});
