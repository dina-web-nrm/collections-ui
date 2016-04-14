import DS from 'ember-data';
import Ember from 'ember';

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    determinedDate: validator('custom-date', {
        errorFormat: 'YYYY-MM-DD',
        descriptionKey: 'fields.labels.determination.determined-date',
        allowBlank: true
    })
});

export default DS.Model.extend(Validations, {
    isCurrent: DS.attr('boolean'),
    determinedDate: DS.attr('date'),
    determinedDatePrecision: DS.attr('number'),
    method: DS.attr('string'),
    confidence: DS.attr('string'),
    typeStatus: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    collectionMemberID: DS.attr('number'),
    verbatimTaxon: DS.attr('string'),

    taxon: DS.belongsTo('taxon', {async: true}),
    determiner: DS.belongsTo('agent', {async: true}),

    taxonName: Ember.computed.alias('taxon.fullName'),
    determinerName: Ember.computed.alias('determiner.fullName')
});
