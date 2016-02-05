import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    email: DS.attr(),
    firstName: DS.attr(),
    guid: DS.attr(),
    lastName: DS.attr(),
    fullName: Ember.computed('firstName', 'lastName', function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    })
});
