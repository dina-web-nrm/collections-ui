import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'collectionId',
    attrs: {
        'name': 'collectionName'
    }
});