import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    attrs: {
        'preparationType': 'prepTypeID',
        'storage': 'storageID',
        'individualsCount': 'integer1'
    }
});