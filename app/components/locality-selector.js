import Ember from 'ember';

import Filterable from '../mixins/filterable';

export default Ember.Component.extend(Filterable, {

    classNames: ['row', 'locality-selector'],

    /** Inject services. */
    store: Ember.inject.service('store'),

    filterKeys: 'disciplineID, geographyID',

    localities: [],

    bounds: null,

    selectedLocality: null,

    maximumReached: Ember.computed.gt('localities.length', 199),

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

        Object.assign(query, this.get('filters'));

        this.get('store').query('locality', query).then(result => {
            this.set('localities', result);
        });

    },

    delayFetchLocalites: function () {
        Ember.run.debounce(this, this.fetchLocalities, 75);
    }.observes('filters', 'bounds.[]', 'geography'),

    actions: {

        geographySelected (geography) {
            this.set('geography', geography);
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
        }
    }
});