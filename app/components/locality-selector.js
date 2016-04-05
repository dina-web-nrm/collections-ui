import Ember from 'ember';

import Filterable from '../mixins/filterable';
import { metersToPixels } from 'dw-collections-manager/utils/map';

export default Ember.Component.extend(Filterable, {

    classNames: ['row', 'locality-selector'],

    /** Inject services. */
    store: Ember.inject.service('store'),

    filterKeys: 'disciplineID, geographyID',

    localities: [],

    bounds: null,

    selectedLocality: null,

    maximumReached: Ember.computed.gt('localities.length', 199),
    
    /** Meters converted to pixels to display on map. */
    uncertaintyRadiusPixels: Ember.computed('mapZoom', 'newLocality.uncertaintyRadius', function () {
        return metersToPixels(this.get('newLocality.uncertaintyRadius'), this.get('mapZoom')) * 2;
    }),
    
    /** Return new locality. */
    newLocality: function () {
        if(!this._newLocality) {
            this._newLocality = this.get('store').createRecord('locality');
        }

        return this._newLocality;
    }.property(),

    fetchLocalities () {
        const bounds = this.get('bounds');

        if (!bounds) {
            return;
        }

        let query = {
            search: true,
            latitude1: `between(${bounds[2]},${bounds[0]})`,
            longitude1: `between(${bounds[3]},${bounds[1]})`,
            limit: 200,
            orderby: 'localityName'
        };

        Ember.$.extend(query, this.get('filters'));

        this.get('store').query('locality', query).then(result => {
            this.set('localities', result);
        });

    },

    delayFetchLocalites: function () {
        Ember.run.debounce(this, this.fetchLocalities, 75);
    }.observes('filters', 'bounds.[]', 'geography'),
    
    centerMap: function () {
        if (this.get('newLocality.validLocation')) {
            this.set('mapLocation', [
                this.get('newLocality.location.firstObject'),
                this.get('newLocality.location.lastObject')
            ]);   
        } else if (this.get('newLocality.geography.validCentroid')) {
            this.set('mapLocation', [
                this.get('newLocality.geography.centroid.firstObject'),
                this.get('newLocality.geography.centroid.lastObject')
            ]);    
        }
    }.observes('newLocality.geography'),

    actions: {

        geographySelected (geography) {
            this.set('geography', geography);

            if (geography) {
                this.set('zoom', 12);
            }
        },

        open (location) {
            location.set('isOpen', true);
        },

        select (locality) {

            this.get('localities').invoke('set', 'highlighted', false);
            locality.set('highlighted', true);

            this.set('selectedLocality', locality);
            this.toggleProperty('displayMap');

            this.attrs.update(locality);
        },

        hover (locality, over) {
            locality.set('hover', over);
        },

        toggleMap () {
            this.toggleProperty('displayMap');
        },

        enableCreate () {
            this.attrs.update(this.get('newLocality'));
            this.set('isCreating', true);
        },

        disableCreate () {
            this.attrs.update();
            this.set('isCreating', false);
        },

        onLocationUpdate (event) {
            const latlng = event.latlng || event.target && event.target.getLatLng();
            const coordinates = [latlng.lat, latlng.lng];

            this.set('newLocality.location', coordinates);
        }
    }
});