import DS from 'ember-data';

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    preparationType: validator('presence', {
        presence: true,
        description: 'Preparation type'
    })
});

export default DS.Model.extend(Validations, {
    'countAmt': DS.attr('number'),
    'preparationType': DS.belongsTo('prep-type'),
    'timestampCreated': DS.attr('number')
});
