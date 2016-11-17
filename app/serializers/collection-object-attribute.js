import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    attrs: {
        lifeStage: 'text1',
        sex: 'text2',
        condition: 'text3',
        type: 'text4',
        placement: 'text5',
        rackNumber: 'text6',
        measurements: 'text7',
        preservationStage: 'text8',
        age: 'text9',
        description: 'text10',

        totalCount: 'number1'
    },

    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data.forEach(function(element) {
            element.type = 'collection-object-attribute';
        }, this);

        return this._super(...arguments);
    },


});