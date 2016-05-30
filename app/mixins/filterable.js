import Ember from 'ember';

export default Ember.Mixin.create({

    _filters: Ember.inject.service('filters'),

    appliedFilterKeys: Ember.computed('filterKeys', function () {
        const filterKeys = this.get('filterKeys') || '';
        return filterKeys.split(',').invoke('trim');
    }),

    filters: Ember.computed('_filters.items.[]', '_filterArray', function () {
        const _filterArray = this.get('appliedFilterKeys');
        const _filters = this.get('_filters.items').filter(item => {
            return _filterArray.indexOf(item.key) !== -1;
        });

        let filterObject = {};
        _filters.forEach(filter => {
            filterObject[filter.key] = filter.value;
        });

        return filterObject;
    }),
});
