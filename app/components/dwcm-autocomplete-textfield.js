import ClickOutsideComponent from '../mixins/click-outside-component';
import Ember from 'ember';

export default Ember.Component.extend(ClickOutsideComponent, {

    /** Required store. */
    store: null,

    /** Name of the store to fetch data from. */
    storeName: null,

    /** Value of the input field */
    value: '',

    /** Data to display in preview dropdown. */
    previewData: [],

    /** Does the input field have focus. */
    hasFocus: false,

    /** Field to use in autocomplete search */
    filterField: null,

    /** Return if preview dropdown is visible. */
    isDropdownVisible: Ember.computed('previewData', 'hasFocus', function () {
        return this.get('hasFocus') && (
            this.get('previewData').length || this.get('value').length
        );
    }),

    /**
     * Fetch data from server based on search value and update store.
     */
    fetchData () {
        var queryParams = {
            search: true,
            limit: 7,
            orderby: this.get('filterField')
        };

        queryParams[this.get('filterField')] = this.get('value');

        this.store.query(this.storeName, queryParams).then((response) => {
            this.set('previewData', response);
        });
    },

    onOutsideClick () {
        this.set('hasFocus', false);
    },

    /**
     * Handle keyup events in input field.
     */
    _onKeyup () {
        if (!this.get('value').length) {
            this.set('previewData', []);
        } else {
            this.fetchData();
        }
    },

    actions: {
        /**
        * Handle keyup events in input field.
        *
        * Triggers private method to be able to delay execution.
        *
        */
        onKeyup () {
            // Debounce keyup event if user types fast.
            Ember.run.debounce(this, this._onKeyup, 200);
        },

        /**
         * Handle focus events from input field.
         */
        onFocus () {
            this.set('hasFocus', true);
        },

        /**
         * Handle blur events from input field.
         */
        onBlur () {
            // Don't close when blurred.
            // this.set('hasFocus', false);
        },

        /**
         * Handle click event in dropdown list.
         */
        onItemClick (item) {
            this.set('hasFocus', false);
            this.set(
                'value', item.get(this.get('displayField', 'name'))
            );

            // Should be set from parent.
            this.get('itemSelected')(item);
        }
    }
});
