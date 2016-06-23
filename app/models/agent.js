import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    email: DS.attr('string'),
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    dateOfDeath: DS.attr('string'),
    dateOfBirth: DS.attr('string'),
    fullName: Ember.computed('firstName', 'lastName', function() {
        if (this.get('firstName') && this.get('lastName')) {
            return `${this.get('firstName')} ${this.get('lastName')}`;
        } else {
            return `${this.get('firstName') || this.get('lastName')}`;
        }
    }),
});
