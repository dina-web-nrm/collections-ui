import DS from 'ember-data';

export default DS.Model.extend({
    abbrev: DS.attr('string'),
    fullName: DS.attr('string'),
    name: DS.attr('string'),
    rankID: DS.attr('number'),
    centroidLat: DS.attr('number'),
    centroidLon: DS.attr('number')
});
