import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    attrs: {
        'treeDef': 'geographyTreeDefItemID'
    }
});