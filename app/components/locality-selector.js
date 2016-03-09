import Ember from 'ember';

export default Ember.Component.extend({

    classNames: ['row', 'locality-selector'],

    store: Ember.inject.service(),

    localities: [],

    selectedLocality: null,

    maximumReached: Ember.computed.gt('localities.length', 199),

    actions: {
        boundsUpdate (bounds) {
            this.get('store').query('locality', {
                search: true,
                latitude1: `between(${bounds[2]},${bounds[0]})`,
                longitude1: `between(${bounds[3]},${bounds[1]})`,
                limit: 200,
                orderby: 'localityName'
            }).then(result => {
                this.set('localities', result);
            });
        },

        open (location) {
            location.set('isOpen', true);
        },

        select (locality) {

            this.get('localities').invoke('set', 'highlighted', false);
            locality.set('highlighted', true);

            this.set('selectedLocality', locality);
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