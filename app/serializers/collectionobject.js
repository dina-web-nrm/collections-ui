import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'collectionObjectID',
    attrs: {
        'agent': 'createdByAgentID',
        'collection': 'collectionMemberID',
        'accession': 'accessionID',
        'determinations': {
            key: 'determination',
            serialize: false
        }
    },

    /**
     * Override serialize to set attributes required by the
     * database that are not used in UI.
     */
    serialize() {
        var json = this._super(...arguments);

        // Copy CollectionMemberID to CollectionID.
        json.collectionID = parseInt(json.collectionMemberID);
        json.collectionMemberID = json.collectionID;

        // Parse AccessionID to integer.
        json.accessionID = json.accessionID && parseInt(json.accessionID);

        return json;
    }
});