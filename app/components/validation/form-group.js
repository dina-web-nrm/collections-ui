import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['form-group', 'form-group-sm'],
    classNameBindings: ['hasError:has-error', 'hasSuccess:has-success'],
    onlyError: true,
    
    hasError: Ember.computed('isValid', function () {
        return this.get('isValid') === false;
    }),
    hasSuccess: Ember.computed('hasError', 'onlyError', function () {
        return !this.get('onlyError') && this.get('isValid');
    }),
    displayHelpBlock: Ember.computed('isValid', 'hideOnValid', 'message', function () {
        return !this.get('isValid') && this.get('message');
    })
});
