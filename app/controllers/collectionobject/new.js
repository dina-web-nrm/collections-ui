import Ember from 'ember';

export default Ember.Controller.extend({

    /** Inject services. */
    i18n: Ember.inject.service(),
    session: Ember.inject.service(),
    configuration: Ember.inject.service('form-configuration'),
    solr: Ember.inject.service(),
    validation: Ember.inject.service(),

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
        let element = Ember.$('.form-group.has-error');

        if (element) {
            Ember.$('html, body').animate({
                scrollTop: element.offset().top - 10
            }, 300);
        }
    },

    actions: {

        /** Handle navigation item click. */
        navigationClick(fieldGroupId) {
            Ember.$('html, body').animate({
                scrollTop: Ember.$('#field-group-' + fieldGroupId).offset().top - 50
            }, 300);
        },

        /** Handle form submit and validation. */
        submitForm () {
            let controller = this;

            if (controller.get('isSaving')) {
                return;
            }

            this.model.validate({}, true).then(({model, validations}) => {
                this.set('validation.isHidden', false);

                if (validations.get('isValid')) {

                    this.set('validation.isHidden', true);
                    controller.set('isSaving', true);

                    this.model.save().then((record) => {
                        controller.get('solr').updateIndex();
                        controller.transitionToCollectionObject(record);
                    }).finally(()=>{
                        controller.set('isSaving', false);
                    });

                } else {
                    Ember.run.next(this, controller.scrollToValidation);
                }
            });
        },

        /** Change form configuration. */
        updateDivision(value) {
            this.get('session').set('data.division', value);
        }
    }
});
