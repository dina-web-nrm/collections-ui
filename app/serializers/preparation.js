import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    attrs: {
        'preparationType': 'prepTypeID',
        'storage': 'storageID',
        'individualsCount': 'integer1'
    }
});