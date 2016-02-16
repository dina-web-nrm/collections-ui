import DS from 'ember-data';

export default DS.Model.extend({
    localityName: DS.attr('string'),

    latitude1: DS.attr('number'),
    longitude1: DS.attr('number')
});
