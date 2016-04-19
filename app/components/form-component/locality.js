import Ember from 'ember';
// import moment from 'moment';

export default Ember.Component.extend({
    
    classNames: ['form-component-locality'],
    
    /** Inject services. */
    store: Ember.inject.service('store'),
    formConfiguration: Ember.inject.service('form-configuration'),
    configuration: Ember.computed.alias('formConfiguration.component.locality'),

    init() {
        this._super(...arguments);
        
        if (this.attrs.update) {
            Ember.run.schedule('actions', this, ()=>{
                this.attrs.update(this.get('newLocality'));  
            });
        }
    },

    /** Return new locality. */
    newLocality: function () {
        if(!this._newLocality) {
            this._newLocality = this.get('store').createRecord('locality', {
                paleoContext: this.get('store').createRecord('paleo-context', {})
            });
        }

        return this._newLocality;
    }.property(),

    /** Center map over geography or locality. */
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
        onLocationUpdate (event) {
            const latlng = event.latlng || event.target && event.target.getLatLng();
            const coordinates = [latlng.lat, latlng.lng];

            this.set('newLocality.location', coordinates);
        },
        
        /** Set litho- or chronostratigraphy. */
        setStratigraphy(field, item){
            this.set(`newLocality.paleoContext.${field}`, item);
        }
    }
});
