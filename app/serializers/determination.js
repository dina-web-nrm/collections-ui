import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    attrs: {
        'taxon': 'taxonID',
        'typeStatus': 'typeStatusName',
        'determiner': 'determinerID',
        'verbatimTaxon': 'text1'
    }
});