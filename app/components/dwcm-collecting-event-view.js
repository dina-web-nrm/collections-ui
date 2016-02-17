import Ember from 'ember';

export default Ember.Component.extend({

    /** Map default zoom level. */
    zoom: 10,

    /** Locality location converted to array. */
    location: Ember.computed('model.locality.latitude1', 'model.locality.longitude1',  function () {
        return [
            this.get('model').get('locality').get('latitude1'),
            this.get('model').get('locality').get('longitude1')
        ];
    })
});
