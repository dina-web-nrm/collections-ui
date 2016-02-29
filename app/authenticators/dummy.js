import Ember from 'ember';

import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

export default BaseAuthenticator.extend({
    store: Ember.inject.service(),
    restore (data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            resolve(data);
            reject(undefined);
        });
    },
    authenticate (agent) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            let json = {
                id: agent.get('id'),
                fullName: agent.get('fullName')
            };

            resolve(json);
            reject(undefined);
        });
    }
});