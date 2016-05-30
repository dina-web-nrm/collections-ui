import Ember from 'ember';

import ClickOutsideComponent from '../mixins/click-outside-component';
import Filterable from '../mixins/filterable';

export default Ember.Component.extend(Filterable, ClickOutsideComponent, {

    /** Setup component css classes. */
    classNames: [
        'autocomplete-input', 'dropdown-group',
    ],

    /** Update when item being updated from outside. */
    didReceiveAttrs() {
        this._super(...arguments);
        const value = this.get(`item.${this.get('displayField')}`);

        if (value) {
            if (value !== this.get('value')) {
                this.set('value', value);
            }

            this.set('selected', true);
        } else {
            this.set('selected', false);
            this.set('value', '');
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
    session: Ember.inject.service('session'),

    /** Name of the store to fetch data from. */
    storeName: null,

    /** Value of the input field */
    value: '',

    /** Limit number of responses. */
    limit: 40,

    /** Data to display in preview dropdown. */
    previewData: [],

    /** Does the input field have focus. */
    hasFocus: false,

    /** Field to use in autocomplete search */
    filterField: null,

    /** Timeout between keyup events. */
    keyupTimeout: 150,

    /** Highligted index in dropdown. */
    highlightedIndex: -1,

    /** History items loaded as models */
    historyItems: [],

    /** Should display history. */
    displayHistory: Ember.computed('historyItems.@each', 'value', function () {
        return this.get('historyItems').length && !this.get('value.length');
    }),

    /** Id's of items in history. */
    history: Ember.computed('session.data.history.{}', 'storeName', {
        get() {
            const storeName = this.get('storeName');
            return this.get(`session.data.history.${storeName}`) || [];
        },
        set(key, value) {
            const storeName = this.get('storeName');
            const history = this.get('session.data.history') || {};

            history[storeName] = value;
            this.get('session').set('data.history', history);
            return value;
        },
    }),

    /** Update dropdown list when index change. */
    onHighlightedIndexChange: function () {
        if (this.get('hasFocus')) {
            let listItem = this.$(`li[data-index=${this.get('highlightedIndex')}]`);

            if (listItem) {
                listItem.addClass('active').siblings().removeClass('active');
            }
        }
    }.observes('highlightedIndex', 'hasFocus'),

    /** Update dropdown list when index change. */
    historyObserver: function () {
        this.set('historyItems', []);
        this.get('history').forEach((itemId) => {
            this.get('store').findRecord(this.get('storeName'), itemId).then((record) => {
                this.get('historyItems').pushObject(record);
            });
        });

    }.observes('history').on('init'),

    /** Return if preview dropdown is visible. */
    isDropdownVisible: Ember.computed('previewData', 'hasFocus', 'history', function () {
        const visible = (
            (this.get('previewData').length || this.get('value.length') || this.get('historyItems.length')) &&
            this.get('hasFocus')
        );

        return visible;
    }),

    /** Fetch data from remote server. */
    _fetchRemoteData (filterField, filterValue, limit) {
        var queryParams = {
            search: true,
            limit: limit,
            orderby: filterField,
        };

        queryParams[filterField] = filterValue;

        Ember.$.extend(queryParams, this.get('filters'));

        return this.get('store').query(this.storeName, queryParams).then((response) => {
            this.set('previewData', response);
        }).catch((reason) => {
            this.set('previewData', []);
            Ember.Logger.warn('Invalid response from server: ', reason);
        });
    },

    /**
     * Fetch data based on search value and update store.
     */
    fetchData () {
        this.set('isLoading', true);
        this._fetchRemoteData(
            this.get('filterField'), this.get('value'), this.get('limit')
        ).finally(() => {
            setTimeout(()=>{
                this.set('isLoading', false);
            }, 300);
        });
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
                let preventDefault = false;

                // Arrow key up.
                if (event.keyCode === 38) {
                    index -= 1;
                    preventDefault = true;
                // Arrow key down
                } else if (event.keyCode === 40) {
                    index += 1;
                    preventDefault = true;
                // Enter key
                } else if (event.keyCode === 13) {
                    let item;
                    if(this.get('displayHistory')) {
                        item = this.get('historyItems').objectAt(index);
                    } else {
                        item = this.get('previewData').objectAt(index);
                    }
                    this.send('onItemClick', item);

                    return;

                // ESC and TAB key should remove focus.
                } else if ([27, 9].indexOf(event.keyCode) !== -1) {
                    this.set('hasFocus', false);
                    return true;
                }

                let dataLength = this.get('previewData.length') - 1;

                if (this.get('displayHistory')) {
                    dataLength = this.get('historyItems.length') - 1;
                }

                if (index < 0) {
                    index = 0;
                } else if (index > dataLength) {
                    index = dataLength;
                }

                this.set('highlightedIndex', index);


                if (preventDefault) {
                    event.preventDefault();
                }

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
            this.set('previewData', []);

            if (!this.get('multiSelect')) {
                this.$('input').blur();
                this.set('hasFocus', false);

            // If multi select clear the value,
            // close the dropdown and give focus to
            // input field.
            } else {
                this.set('value', '');
                this.$('input').focus();
            }

            let history = this.get('history');
            history.splice(0, 0, item.get('id'));

            let uniqueHistory = history.uniq();
            this.set('history', uniqueHistory.slice(0, 3));

            // Should be set from parent.
            this.attrs.itemSelected(item);
        },

        /** Clear selection in field. */
        clearSelection() {
            this.attrs.itemSelected();
        },
    },
});
