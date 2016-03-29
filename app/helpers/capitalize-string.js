import Ember from 'ember';

export function capitalizeString(params/*, hash*/) {
    let output = params[0];
    output = output.string || output;
    return output.capitalize();
}

export default Ember.Helper.helper(capitalizeString);
