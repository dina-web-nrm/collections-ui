import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('collectionobject');

    this.route('collectionobject.view', {
        path: 'collectionobject/:collectionobject_id'
    });

    this.route('collectionobject.new', {
        path: 'collectionobject/new'
    });
});

export default Router;
