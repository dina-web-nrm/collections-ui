import Ember from 'ember';

export default Ember.Controller.extend({
    configuration: Ember.inject.service('form-configuration'),
    mapZoom: 13
});
