import Ember from 'ember';

export default Ember.Service.extend({

    items: null,

    init() {
        this._super(...arguments);
        this.set('items', []);
    },

    add(key, value) {
        const items = this.get('items');

        this.remove(key);

        items.pushObject({
            key: key,
            value: value
        });
    },

    remove(key) {
        const items = this.get('items');
        let item = items.findBy('key', key);
        if (item) {
            items.removeObject(item);
        }
    },

    clear() {
        this.set('items', {});
    }
});
