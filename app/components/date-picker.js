import Ember from 'ember';

import moment from 'moment';

const PRECISION = {
    YEAR_ONLY: 3,
    YEAR_AND_MONTH: 2,
    FULL_DATE: 1,
    INVALID: -1,
    EMPTY: 0
};

export default Ember.Component.extend({
    classNames: ['date-picker', 'form-group'],
    classNameBindings: ['hasSuccess:has-success', 'hasError:has-error'],
    
    date: Ember.computed('year', 'month', 'day', function () {
        let date = this.parseDate();
        if (date.isValid()) {
            return date;
        } else {
            return undefined;
        }
    }),
    
    hasSuccess: Ember.computed('hasError', function () {
        return  !this.get('hasError') && this.get('isNotEmpty');
    }),

    hasError: Ember.computed('date', 'isValid', function () {
        if (this.get('precision') === PRECISION.INVALID) {
            return true;
        } else {
            return !this.get('isValid');
        }
        
    }),
    
    isNotEmpty: Ember.computed.or('year', 'month', 'day'),

    precision: Ember.computed('year', 'month', 'day', function () {
        const year = this.get('year');
        const month = this.get('month');
        const day = this.get('day');
        
        if (year && month && day) {
            return PRECISION.FULL_DATE;
        } else if (year && month) {
            return PRECISION.YEAR_AND_MONTH;
        } else if (year && !day) {
            return PRECISION.YEAR_ONLY;
        } else if (!year && !month && !day) {
            return PRECISION.EMPTY;
        } else {
            return PRECISION.INVALID;
        }
    }),
    
    parseDate() {
        const year = this.get('year');
        const month = this.get('month');
        const day = this.get('day');

        let date = year;
        
        if (month) {
            date += `-${month}`;
        }
        if (day) {
            date += `-${day}`;
        }
        return moment(date, 'YYYY-MM-DD');
    },
    
    actions: {
        change() {
            let date = this.get('date') && this.get('date').toDate();

            if (this.attrs.update) {
                this.attrs.update(
                    date, this.get('precision')
                );
            }
        }
    }
});
