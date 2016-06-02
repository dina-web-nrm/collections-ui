import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    sprints: [6, 5, 4, 3, 2, 1],
});
