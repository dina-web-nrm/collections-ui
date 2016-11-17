import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    attrs: {
        'list': 'pickListID',
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data.forEach(function(element) {
            element.type = 'pick-list-item';
        }, this);

        return this._super(...arguments);
    },
});