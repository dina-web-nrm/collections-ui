import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: 'collectingEventID',
    attrs: {
        locality: {
            key: 'localityID',
            serialize: 'records'
        },
        givenName: 'text1',
        collectors: {
            key: 'collectorList',
            serialize: 'records'
        }
    }
});