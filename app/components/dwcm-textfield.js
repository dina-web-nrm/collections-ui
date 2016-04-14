import Ember from 'ember';

export default Ember.Component.extend({

    /** Default element classes. */
    classNames: ['form-group', 'form-group-sm'],
    
    /** Class name bindings */
    classNameBindings: ['hasError:has-error:'],
    
    /** Action to display right of field label. */
    labelAction: null,

    /** Text for label action. */
    actionText: '',
    
    hasError: Ember.computed('isInvalid', 'validationMessage', function () {
        return this.get('isInvalid') && !Ember.isBlank(
            this.get('validationMessage')
        );
    }),
    
    actions: {

        /** Run specified label action. */
        runLabelAction () {
            this.get('labelAction')();
        },

        update () {
            if (this.attrs.update) {
                this.attrs.update(this.get('value'));
            }
        }
    }
});
