import Ember from 'ember';

import BaseValidator from 'ember-cp-validations/validators/base';

export default BaseValidator.extend({
    store: Ember.inject.service(),
    validate(value, options, model) {
        
        if (Ember.isBlank(model.get('collection.id'))) {
            return true;
        }
        
        return this.get('store').query('collectionobject', {
            catalogNumber: value,
            collectionID: model.get('collection.id'),
            search: true,
            exact: true
        }).then((collectionObjects) => {
            if (collectionObjects.get('firstObject')) {
                return this.createErrorMessage('unique', value, options);   
            } else {
                return true;
            }
        });
    }
});
