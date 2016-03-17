import Ember from 'ember';

export default Ember.Component.extend({

    /** Map default zoom level. */
    zoom: 5,

    /** Attributes to display in list. */
    displayAttributes: Ember.computed('model.startDate', 'model.method', 'model.locality.localityName', function () {
        return [{
                title:' Insamlingsdatum',
                value: this.get('model').get('startDate')
            }, {
                title:'Metod',
                value: this.get('model').get('method')
            },{
                title:'Fyndplats',
                value: this.get('model').get('locality').get('localityName')
            }, {
                title: 'Longitude',
                value: this.get('model').get('locality').get('longitude')
            }, {
                title: 'Latitude',
                value: this.get('model').get('locality').get('latitude')
            }, {
                title: 'Höjd ö hav',
                value: this.get('model').get('locality').get('maxElevation')
            }, {
                title: 'höjd u hav',
                value: this.get('model').get('locality').get('minElevation')
        }];
    })
});
