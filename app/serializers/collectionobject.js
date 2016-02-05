import DS from 'ember-data';

function convertId(item, field, target) {
    if (item[field]) {
        var _idArray = item[field].split('/');
        item[target] = _idArray[_idArray.length - 1];
    }
}

export default DS.JSONSerializer.extend({
    primaryKey: 'collectionObjectID',
    attrs: {
        'agent': 'createdByAgentID',
        'collection': 'collectionMemberID'
    },
    normalizeResponse(store, primaryModelClass, payload) {
        
        // This convertion can be removed once the API
        // returns id instead of links.
        if (Array.isArray(payload)) {
            payload.forEach(function (item) {
                convertId(item, 'createdByAgentID', 'createdByAgentID');
            });
        } else {
            convertId(payload, 'createdByAgentID', 'createdByAgentID');
        }
        console.log(payload);
        return this._super(...arguments);
    }
});