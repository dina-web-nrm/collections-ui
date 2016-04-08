import Ember from 'ember';

export default Ember.Service.extend({

    items: null,

    init() {
        this._super(...arguments);
        this.set('items', []);
    },

    add(...filters) {
        const items = this.get('items');
        
        this.remove(filters.mapBy('key'));
        items.pushObjects(filters);
    },

    remove(...keys) {
        const items = this.get('items');
        
        let toBeRemoved = items.filter(function (item) {
            return keys.indexOf(item.key) !== -1;
        });

        if (toBeRemoved.length) {
            items.removeObjects(toBeRemoved);
        }
    },

    clear() {
        this.set('items', {});
    }
});
