import Ember from 'ember';

const PRECISION_FORMAT = {
    //YEAR_ONLY
    3: 'YYYY',
    //YEAR_AND_MONTH
    2: 'MMMM YYYY',
    //FULL_DATE
    1: 'LL',
};

export function datePrecision(params) {
    const precision = params[0];
    return PRECISION_FORMAT[precision] || PRECISION_FORMAT[1];
}

export default Ember.Helper.helper(datePrecision);
