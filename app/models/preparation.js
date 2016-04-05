import DS from 'ember-data';

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    preparationType: validator('presence', {
        presence: true,
        descriptionKey: 'fields.labels.preparation.preparation-type'
    })
});

export default DS.Model.extend(Validations, {
    'countAmt': DS.attr('number'),
    'timestampCreated': DS.attr('number'),
    'description': DS.attr('string'),
    'status': DS.attr('string'),
    'sampleNumber': DS.attr('string'),

    'preparationType': DS.belongsTo('prep-type'),
    'storage':  DS.belongsTo('storage'),
    'individualsCount': DS.attr('number'),
});
