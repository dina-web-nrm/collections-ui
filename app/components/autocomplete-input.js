import Ember from 'ember';

import ClickOutsideComponent from '../mixins/click-outside-component';
import Filterable from '../mixins/filterable';

export default Ember.Component.extend(Filterable, ClickOutsideComponent, {

    /** Setup component css classes. */
    classNames: [
        'autocomplete-input', 'dropdown-group'
    ],

    /** Update when item being updated from outside. */
    didReceiveAttrs() {
        this._super(...arguments);
        const value = this.get(`item.${this.get('displayField')}`);

        if (value) {
            if (value !== this.get('value')) {
                this.set('value', value);
            }
        }
    },

    /** Enable multi select.
     *
     * When multi select is enabled the textfield will not be
     * set with the selected value.
     *
     */
    multiSelect: false,

    /** Injected services. */
    store: Ember.inject.service('store'),

    /** Name of the store to fetch data from. */
    storeName: null,

    /** Value of the input field */
    value: '',
    
    /** Limit number of responses. */
    limit: 40,

    /** Highligted index in dropdown. */
    highlightedIndex: -1,

    /** Update dropdown list when index change. */
    onHighlightedIndexChange: function () {
        if (this.get('hasFocus')) {
            let listItem = this.$('li[data-index='+ this.get('highlightedIndex') +']');

            if (listItem) {
                listItem.addClass('active').siblings().removeClass('active');
            }
        }
    }.observes('highlightedIndex', 'hasFocus'),

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
        const visible = (
            (this.get('previewData').length || this.get('value.length')) &&
            this.get('hasFocus')
        );
        return visible;
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

        Ember.$.extend(queryParams, this.get('filters'));

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
            this._fetchLocalData(
                this.get('filterField'), this.get('value'), this.get('limit')
            );
        } else {
            this._fetchRemoteData(
                this.get('filterField'), this.get('value'), this.get('limit')
            );
        }
    },

    /** Handle event when user clicks outside of component. */
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

        // Set item as undefined.
        if (!this.get('multiSelect')) {
            this.get('itemSelected')();
        }

        this.set('highlightedIndex', -1);
    },

    actions: {

        /**
        * Handle Keydown events in input field.
        *
        * Triggers private method to be able to delay execution.
        *
        */
        onKeyDown (value, event) {
            this.set('hasFocus', true);

            if ([38, 40, 13, 27, 9].indexOf(event.keyCode) !== -1) {
                let index = this.get('highlightedIndex');

                // Arrow key up.
                if (event.keyCode === 38) {
                    index -= 1;
                // Arrow key down
                } else if (event.keyCode === 40) {
                    index += 1;

                // Enter key
                } else if (event.keyCode === 13) {
                    this.send(
                        'onItemClick', this.get('previewData').objectAt(index)
                    );

                    return;

                // ESC and TAB key should remove focus.
                } else if ([27, 9].indexOf(event.keyCode) !== -1) {
                    this.set('hasFocus', false);
                }

                if (index < 0) {
                    index = 0;
                } else if (index > this.get('previewData').length - 1) {
                    index = this.get('previewData').length - 1;
                }

                this.set('highlightedIndex', index);

                return false;
            }

            // Debounce keyup event if user types fast.
            Ember.run.debounce(this, this._onKeyup, this.keyupTimeout);
        },

        /**
         * Handle focus events from input field.
         */
        onFocus () {
            this.set('hasFocus', true);            
        },

        /**
         * Handle click event in dropdown list.
         */
        onItemClick (item) {
            if (!this.get('multiSelect')) {
                this.$('input').blur();
                this.set('hasFocus', false);

            // If multi select clear the value,
            // close the dropdown and give focus to
            // input field.
            } else {
                this.set('value', '');
                this.set('previewData', []);
                this.$('input').focus();
            }

            // Should be set from parent.
            this.attrs.itemSelected(item);
        }
    }
});
