import DS from 'ember-data';

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    preparationType: validator('presence', {
        presence: true,
        description: 'fields.labels.preparation-type'
    })
});

export default DS.Model.extend(Validations, {
    'countAmt': DS.attr('number'),
    'timestampCreated': DS.attr('number'),
    'description': DS.attr('string'),
    'status': DS.attr('string'),

    'preparationType': DS.belongsTo('prep-type'),
    'storage':  DS.belongsTo('storage'),
});
