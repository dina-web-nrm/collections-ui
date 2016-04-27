import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
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
    }
});