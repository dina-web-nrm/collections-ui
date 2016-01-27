import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('collectionobject', function () {
        this.route('add')
    });
});

export default Router;
