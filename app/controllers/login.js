import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),

    agent: null,

    actions: {

        agentSelected (agent) {
            this.set('agent', agent);
        },

        authenticate () {
            console.log(...arguments);

            this.get('session').authenticate('authenticator:dummy', this.get('agent')).catch(reason => {
                console.log(reason);
            });
        }
    }
});
