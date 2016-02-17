import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'collectingEventID',
    attrs: {
        locality: 'localityID',
        givenName: 'text1'
    }
});