import Ember from 'ember';

export default Ember.Controller.extend({

    session: Ember.inject.service('session'),

    /** Selected agent. */
    agent: null,

    actions: {

        /** Handle *agent* being selected. */
        agentSelected (agent) {
            this.set('agent', agent);
        },

        /** Authenticate and sign in with currently selected agent. */
        authenticate () {
            this.get('session').authenticate(
                'authenticator:dummy', this.get('agent')
            ).catch(reason => {
                console.log(reason);
            });
        }
    }
});
