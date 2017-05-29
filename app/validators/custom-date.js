import Ember from 'ember';

import BaseValidator from 'ember-cp-validations/validators/base';

import moment from 'moment';

export default BaseValidator.extend({
    _parseDate(dateStr, format) {
        if (dateStr === 'now' || Ember.isEmpty(dateStr)) {
            return moment();
        }
        return format ? moment(dateStr, format) : moment(new Date(dateStr));
    },
    validate(value, options, model) {
        const errorFormat = options.errorFormat || 'MMM Do, YYYY';
        const format = options.format;
        let { before, after, allowFuture } = options;

        if (options.allowBlank && Ember.isEmpty(value)) {
            return true;
        }

        const date = this._parseDate(value, format);

        if (!date.isValid()) {
            return this.createErrorMessage('date', value, options);
        }

        if (format && !moment(value, format, true).isValid()) {
            return this.createErrorMessage('wrongDateFormat', value, options);
        }

        if (before) {
            before = model.get(before);
            before = before && this._parseDate(before, format);
            if (before && before < date) {
                options.before = before.format(errorFormat);
                return this.createErrorMessage('before', value, options);
            }
        }

        if (after) {
            after = model.get(after);
            after = after && this._parseDate(after, format);

            if (after && after > date) {
                options.after = after.format(errorFormat);
                return this.createErrorMessage('after', value, options);
            }
        }

        if (!allowFuture) {
            let now = this._parseDate('now', format);
            if (now < date) {
                options.before = now.format(errorFormat);
                return this.createErrorMessage('before', value, options);
            }
        }

        return true;
    }
});
