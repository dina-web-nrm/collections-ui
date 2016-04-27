import Ember from 'ember';

export function oneIndex(params) {
    return ++params[0];
}

export default Ember.Helper.helper(oneIndex);
