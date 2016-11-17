import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    attrs: {
        'taxon': 'taxonID',
        'typeStatus': 'typeStatusName',
        'determiner': 'determinerID',
        'verbatimTaxon': 'text1'
    }
});