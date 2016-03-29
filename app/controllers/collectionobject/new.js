import Ember from 'ember';

import moment from 'moment';

export default Ember.Controller.extend({
    
    /** Inject services. */
    i18n: Ember.inject.service(),
    session: Ember.inject.service(),
    configuration: Ember.inject.service('form-configuration'),

    _displayErrors: false,

    validationError: Ember.computed('model.validations.messages', '_displayErrors', function () {
        return this.get('_displayErrors') && this.model.get('validations.messages.length');
    }),

    type: Ember.computed('configuration.type', function () {
        if (this.get('configuration.type')) {
            return `collectionobject.new.type.${this.get('configuration.type')}`;   
        } else {
            return 'blank';
        }
    }),
    groups: Ember.computed.alias('configuration.components'),

    /** Transition to Collection object View route. */
    transitionToCollectionObject (collectionObject) {
        this.transitionToRoute(
            'collectionobject.view', collectionObject
        );
    },

    /** Trigger scroll to validation messages. */
    scrollToValidation () {
        Ember.$('html, body').animate({
            scrollTop: Ember.$('#validation-messages').offset().top - 10
        }, 300);
    },

    actions: {

        /** Handle navigation item click. */
        navigationClick(fieldGroupId) {
            Ember.$('html, body').animate({
                scrollTop: Ember.$('#field-group-' + fieldGroupId).offset().top - 10
            }, 300);
        },

        /** Handle form submit and validation. */
        submitForm () {
            let controller = this;

            this.model.validate({}, true).then(({model, validations}) => {
                controller.set('_displayErrors', !validations.get('isValid'));

                if (validations.get('isValid')) {
                    this.model.set('timestampCreated', moment().unix());

                    this.store.findRecord(
                        'agent', this.get('session').get('data.authenticated.id') || 3
                    ).then((agent) => {
                        this.model.set('agent', agent);
                        this.model.save().then((record) => {
                            controller.transitionToCollectionObject(record);
                        });
                    });
                } else {
                    controller.scrollToValidation();
                }
            });
        },
        
        /** Change form configuration. */
        updateDivision(value) {            
            this.get('session').set('data.division', value);
        }
    }
});
