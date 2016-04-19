import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: 'collectionObjectID',
    attrs: {
        agent: 'createdByAgentID',
        cataloger: 'catalogerID',
        collection: 'collectionMemberID',
        accession: 'accessionID',
        determinations: {
            key: 'determinationList',
            serialize: 'records'
        },
        preparations: {
            key: 'preparationList',
            serialize: 'records'
        },
        objectAttribute: {
            key: 'collectionObjectAttributeID',
            serialize: 'records'
        },
        collectingEvent: {
            key: 'collectingEventID',
            serialize: 'records'
        }
    },

    /**
     * Override serialize to set attributes required by the
     * database that are not used in UI.
     */
    serialize(snapshot) {
        var json = this._super(...arguments);
        const disciplineID = snapshot.record.get('collection.disciplineID');


        // Copy CollectionMemberID to CollectionID.
        json.collectionID = parseInt(json.collectionMemberID);
        json.collectionMemberID = json.collectionID;

        // Parse AccessionID to integer.
        json.accessionID = json.accessionID && parseInt(json.accessionID);
        json.createdByAgentID = parseInt(json.createdByAgentID);

        json.catalogerID = parseInt(json.createdByAgentID);

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
            element.storageID = parseInt(element.storageID);
        });

        delete json.preparations;

        json.collectionObjectAttributeID = json.objectAttribute;

        json.collectionObjectAttributeID.collectionMemberID = json.collectionMemberID;
        json.collectionObjectAttributeID.createdByAgentID = parseInt(json.createdByAgentID);

        delete json.objectAttribute;

        if (json.collectingEvent) {
            json.collectingEventID = json.collectingEvent;
            json.collectingEventID.collectingEventID = parseInt(json.collectingEventID.collectingEventID);
            json.collectingEventID.disciplineID = disciplineID;

            if(!json.collectingEventID.collectingEventID) {
                delete json.collectingEventID.collectingEventID;
            }

            if (json.collectingEventID.locality) {
                json.collectingEventID.localityID = json.collectingEventID.locality;
                json.collectingEventID.localityID.disciplineID = disciplineID;
            }

            delete json.collectingEventID.locality;

            json.collectingEventID.collectorList = json.collectingEventID.collectors;
            delete json.collectingEventID.collectors;
        }

        delete json.collectingEvent;
        return json;
    }
});