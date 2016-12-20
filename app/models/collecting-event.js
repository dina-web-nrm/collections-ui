import DS from 'ember-data';
import Ember from 'ember';

import {validator, buildValidations} from 'ember-cp-validations';

const Validations = buildValidations({
    startDate: validator('custom-date', {
        errorFormat: 'YYYY-MM-DD',
        descriptionKey: 'fields.labels.collecting-event.start-date.name',
        allowBlank: true,
        before: 'endDate',
        dependentKeys: ['endDate']
    }),
    endDate: validator('custom-date', {
        errorFormat: 'YYYY-MM-DD',
        descriptionKey: 'fields.labels.collecting-event.end-date.name',
        allowBlank: true,
        after: 'startDate',
        dependentKeys: ['startDate']
    }),
    locality: validator('belongs-to', {
        disabled() {
            // Disable if locality is not present.
            // Using uncertaintyRadius due to that is the only
            // attr set on a newly created locality.
            return Ember.isNone(this.get('model.locality.uncertaintyRadius'));
        }
    }),
    verbatimDate: validator('length', {
        min: 0,
        max: 50,
        descriptionKey: 'component.collecting-event.verbatim-date',
    })
});

export default DS.Model.extend(Validations, {
    method: DS.attr('string'),
    startDate: DS.attr('date'),
    startDatePrecision: DS.attr('number'),
    endDate: DS.attr('date'),
    endDatePrecision: DS.attr('number'),
    verbatimDate: DS.attr('string'),
    verbatimLocality: DS.attr('string'),
    timestampCreated: DS.attr('number'),
    givenName: DS.attr('string'),

    // Locality and habitat/substrat notes.
    remarks: DS.attr('string'),
    
    // Description of object when collecting.
    description: DS.attr('string'),
    
    collectingegentattachments: DS.hasMany('collecting-event-attachment', {async: true}),
    locality: DS.belongsTo('locality', {async: true}),
    collectors: DS.hasMany('collector', {async: true}),
    createdByAgent: DS.belongsTo('agent', {async: true}),
    
    displayName: Ember.computed('locality', 'givenName', function () {
        if (this.get('givenName')) {
            return this.get('givenName');
        } else {
            return `${this.get('locality.localityName')}`;
        }
    })
});
