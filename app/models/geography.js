import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    abbrev: DS.attr('string'),
    fullName: DS.attr('string'),
    name: DS.attr('string'),
    rankID: DS.attr('number'),
    centroidLat: DS.attr('number'),
    centroidLon: DS.attr('number'),

    centroid: Ember.computed('centroidLat', 'centroidLon', function () {
        return [
            this.get('centroidLat'),
            this.get('centroidLon')
        ];
    })
});
