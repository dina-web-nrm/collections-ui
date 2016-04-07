import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    abbrev: DS.attr('string'),
    fullName: DS.attr('string'),
    name: DS.attr('string'),
    rankID: DS.attr('number'),
    centroidLat: DS.attr('number'),
    centroidLon: DS.attr('number'),

    displayName: Ember.computed('fullName', function () {
        let fullName = this.get('fullName') || '';
        let displayName = fullName.split(',').invoke('trim').reverse().join(', ');
        
        return displayName;
    }),
    
    centroid: Ember.computed('centroidLat', 'centroidLon', function () {
        return [
            this.get('centroidLat'),
            this.get('centroidLon')
        ];
    }),

    validCentroid: Ember.computed('centroidLat', 'centroidLon', function () {
        return !Ember.isBlank(this.get('centroidLat')) && !Ember.isBlank(this.get('centroidLon'));
    })
});
