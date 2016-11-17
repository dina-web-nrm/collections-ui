import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        originalAttachment: {
            key: 'attachmentID',
            serialize: 'records'
        }
    },
    serialize() {
        var json = this._super(...arguments);
        
        if (json.originalAttachment) {
            json.attachmentID = json.originalAttachment;
            delete json.originalAttachment;
        }
        
        return json;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data.forEach(function(element) {
            element.type = 'collection-object-attachment';
        }, this);

        return this._super(...arguments);
    },
});