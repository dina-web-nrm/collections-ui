import ClickOutsideComponent from '../mixins/click-outside-component';
import Ember from 'ember';

export default Ember.Component.extend(ClickOutsideComponent, {

    /** Bind conditional classes. */
    classNameBindings: ['hasSelected:has-success', 'isInvalid:has-error'],

    /** Setup component css classes. */
    classNames: ['dwcm-autocomplete-textfield'],

    /** Setting to disable create button. */
    disableCreate: true,

    /** Setting to hide the create button. */
    removeCreate: false,

    /** Required store. */
    store: Ember.inject.service('store'),

    /** Name of the store to fetch data from. */
    storeName: null,

    /** Value of the input field */
    value: '',

    /** Has valid selection. */
    hasSelected: false,

    /** Highligted index in dropdown. */
    highlightedIndex: -1,

    onHighlightedIndexChange: function () {

        if (this.get('hasFocus')) {
            var elementQuery = 'li[tabindex='+ this.get('highlightedIndex') +']' ;
            var listItem = this.$(elementQuery);
            console.log(listItem);
            console.log(elementQuery);
            if (listItem) {
                listItem.addClass('active').siblings().removeClass();
            }
        } else {
            this.set('highlightedIndex', -1);
        }
    }.observes('highlightedIndex', 'hasFocus'),

    /** Return if input is invalid. */
    isInvalid: Ember.computed('hasSelected', 'hasFocus', 'value', function () {
        return this.get('value').length > 0 && !this.get('hasFocus') && !this.get('hasSelected');
    }),

    /** Data to display in preview dropdown. */
    previewData: [],

    /** Does the input field have focus. */
    hasFocus: false,

    /** Field to use in autocomplete search */
    filterField: null,

    /** Timeout between keyup events. */
    keyupTimeout: 150,

    /** Return if preview dropdown is visible. */
    isDropdownVisible: Ember.computed('previewData', 'hasFocus', function () {
        return this.get('hasFocus') && (
            this.get('previewData').length || this.get('value').length
        );
    }),

    /** Override init. */
    init () {

        /** If using local data decrease the timeout. */
        if (this.localData) {
            this.keyupTimeout = 10;
        }

        return this._super(...arguments);
    },

    /** Fetch data stored in client store with out request.
     *
     * Using this method it's up to the application to keep the data up to date.
     *
     */
    _fetchLocalData (filterField, filterValue, limit) {
        var result = this.get('store').peekAll(this.storeName).filter((item) => {
            let fieldValue = item.get(filterField).toLowerCase();

            return fieldValue.indexOf(filterValue.toLowerCase()) !== -1;
        }).sortBy(filterField).slice(0, limit + 1);

        this.set('previewData', result);
    },

    /** Fetch data from remote server. */
    _fetchRemoteData (filterField, filterValue, limit) {
        var queryParams = {
            search: true,
            limit: limit,
            orderby: filterField
        };

        queryParams[filterField] = filterValue;

        this.get('store').query(this.storeName, queryParams).then((response) => {
            this.set('previewData', response);
        }).catch((reason) => {
            this.set('previewData', []);

            console.warn('Invalid response from server: ', reason);
        });
    },

    /**
     * Fetch data based on search value and update store.
     */
    fetchData () {
        if (this.localData) {
            this._fetchLocalData(this.get('filterField'), this.get('value'), 7);
        } else {
            this._fetchRemoteData(this.get('filterField'), this.get('value'), 7);
        }
    },

    /** Handle event when user clicks outside of component. */
    onOutsideClick () {
        this.set('hasFocus', false);
    },

    /**
     * Handle keyup events in input field.
     */
    _onKeyup (event) {
        let offset = 0;
        if (event.keyCode === 38) {
            offset = -1;
        } else if (event.keyCode === 40) {
            offset = 1;
        }

        if (offset !== 0) {
            this.set(
                'highlightedIndex',
                this.get('highlightedIndex') + offset
            );
        }
        else if (!this.get('value').length) {
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
        onKeyup (value, event) {
            console.log(arguments);
            // Debounce keyup event if user types fast.
            Ember.run.debounce(this, this._onKeyup, event, this.keyupTimeout);

            // Set item as undefined.
            this.get('itemSelected')();
            this.set('hasSelected', false);
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
            this.set('hasSelected', item);
        }
    }
});
