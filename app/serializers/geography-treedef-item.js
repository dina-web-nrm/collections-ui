import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data.forEach(function(element) {
            element.type = 'geography-treedef-item';
        }, this);

        return this._super(...arguments);
    },
});
