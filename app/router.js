import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,

    metrics: Ember.inject.service(),

    didTransition() {
        this._super(...arguments);
        this._trackPage();
    },

    _trackPage() {
        Ember.run.scheduleOnce('afterRender', this, () => {
            const page = document.location.pathname;
            const title = this.getWithDefault('currentRouteName', 'unknown');

            Ember.get(this, 'metrics').trackPage({
                page: page,
                title: title,
            });
        });
    },
});

Router.map(function() {
  this.route('collectionobject');

  this.route('collectionobject.view', {
      path: 'collectionobject/:collectionobject_id',
  });

  this.route('collectionobject.new', {
      path: 'collectionobject/new',
  });
  this.route('login');
  this.route('collection');
  this.route('collection.view', {
      path: 'collection/:collection_id',
  });
  this.route('collection-test');
});

export default Router;
