import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: 'collectionObjectID',
    attrs: {
        'agent': 'createdByAgentID',
        'collection': 'collectionMemberID',
        'accession': 'accessionID',
        'determinations': {
            key: 'determinationList',
            serialize: 'records'
        },
        'preparations': {
            key: 'preparationList',
            serialize: 'records'
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
        json.createdByAgentID = parseInt(json.createdByAgentID);

        json.determinationList = json.determinations;
        json.determinationList.forEach(function(element) {
            element.collectionMemberID = json.collectionMemberID;
            element.taxonID = parseInt(element.taxonID);
            element.createdByAgentID = parseInt(json.createdByAgentID);
            element.determinerID = parseInt(element.determinerID);
        });

        delete json.determinations;

        json.preparationList = json.preparations;
        json.preparationList.forEach(function(element) {
            element.collectionMemberID = json.collectionMemberID;
            element.createdByAgentID = parseInt(json.createdByAgentID);
            element.prepTypeID = parseInt(element.prepTypeID);
        });

        delete json.preparations;

        console.table([json]);

        return json;
    }
});