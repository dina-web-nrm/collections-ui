import Ember from 'ember';

import Filterable from '../mixins/filterable';

export default Ember.Component.extend(Filterable, {
    classNames: ['pick-list', 'form-group-sm', 'form-group'],

    /** Inject services. */
    store: Ember.inject.service(),

    /** Inital values for pick list. */
    value: null,
    options: [],

    /** Model to fetch data from.
     *
     * Set this if you want to fetch data using a different model
     * than `pick-list`. Note that you need to set `displayField`
     * to match an attr on the model.
     *
     */
    model: null,

    displayField: 'title',
    valueField: 'title',

    didReceiveAttrs() {
        this._super(...arguments);

        const name = this.get('name');
        const model = this.get('model');

        if (!model && !name) {
            console.error(
                'PickList: You need to specify either "name" or "model"'
            );
        }
    },

    /**
     * Load available options.
     *
     * Observes changes to the filters and reloads the available options.
     * This to prevent from selecting values belonging to a different collection.
     *
    */
    loadOptions: function () {
        if (!this.get('model')) {
            this._loadOptions();
        } else {
            this._loadModelOptions();
        }
    }.observes('filters').on('init'),

    /** Load available options based on model. */
    _loadModelOptions() {
        let queryParams = Ember.$.extend({
            search: true,
            limit: 150
        }, this.get('filters')),
        modelName = this.get('model');

        if (Object.keys(this.get('filters')).length) {
            this.get('store').query(modelName, queryParams).then((response)=>{
                this.set('options', response);
            });
        } else {
            this.reset();
        }
    },

    /** Load available options based on pick list. */
    _loadOptions() {
        let queryParams = Ember.$.extend({
            name: this.get('name'),
            search: true,
            exact: true,
            limit: 150
        }, this.get('filters'));

        if (Object.keys(this.get('filters')).length) {
            this.get('store').query('pick-list', queryParams).then((response)=>{
                const listId = response.get('firstObject.id');
                if (listId) {
                    this.get('store').query('pick-list-item', {
                        pickListID: listId,
                        search: true,
                        exact: true
                    }).then((response)=>{
                        this.set('options', response);
                    });
                }
            });
        } else {
            this.reset();
        }
    },

    /** Reset component to inital state. */
    reset() {
        this.set('options', []);
        if (this.attrs.update && this.get('initLoadDone')) {
            this.set('value', undefined);
            this.attrs.update(undefined);
        }

        this.set('initLoadDone', true);
    }
});
