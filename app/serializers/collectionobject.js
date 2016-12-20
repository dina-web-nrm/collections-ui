import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {

    //primaryKey: 'collectionObjectID',
   

    attrs: {
        collection: 'collectionMemberID',
        collectingEvent: {
            key: 'collectingEvent',
            serialize: 'records'
        }
    }

   /*
    attrs: {
        agent: 'createdByAgentID',
        attachments: {
            key: 'collectionobjectattachmentList',
            serialize: 'records'
        },
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
*/

    /**
     * OverrIde serialize to set attributes required by the
     * database that are not used in UI.
     */
    

/*
    serialize(snapshot) {
        var json = this._super(...arguments);
        //console.log(snapshot.record.get('collection.disciplineID'));
        //const disciplineID = snapshot.record.get('collection.disciplineID');

        // Copy CollectionMemberID to CollectionID.
        json.collectionID = parseInt(json.collectionMemberID);
        json.collectionMemberID = json.collectionID;

        // Parse AccessionID to integer.
        json.accessionID = json.accessionID && parseInt(json.accessionID);
        delete json.createdByAgentID;

        // json.catalogerID = parseInt(json.createdByAgentID);

        json.determinationList = json.determinations;
        json.determinationList.forEach(function(element) {
            element.collectionMemberID = json.collectionMemberID;
            element.taxonID = parseInt(element.taxonID);
            element.determinerID = parseInt(element.determinerID);
        });

        delete json.determinations;

        json.preparationList = json.preparations;
        json.preparationList.forEach(function(element) {
            element.collectionMemberID = json.collectionMemberID;
            element.prepTypeID = parseInt(element.prepTypeID);
            element.storageID = parseInt(element.storageID);
        });

        delete json.preparations;

        json.collectionobjectattachmentList = json.attachments;
        json.collectionobjectattachmentList.forEach(function(element) {
            element.collectionMemberID = json.collectionMemberID;
        });

        delete json.attachments;

        json.collectionObjectAttributeID = json.objectAttribute;

        json.collectionObjectAttributeID.collectionMemberID = json.collectionMemberID;

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

                if (json.collectingEventID.localityID.paleoContextID) {
                    json.collectingEventID.localityID.paleoContextID.disciplineID = disciplineID;
                }

                delete json.collectingEventID.localityID.createdByAgentID;
            }

            delete json.collectingEventID.locality;

            json.collectingEventID.collectorList = json.collectingEventID.collectors;
            delete json.collectingEventID.collectors;

            json.collectingEventID.collectingeventattachmentList = json.collectingEventID.attachments;
            json.collectingEventID.collectingeventattachmentList.forEach(function(element) {
                element.collectionMemberID = json.collectionMemberID;
            });

            delete json.collectingEventID.attachments;
            delete json.collectingEventID.createdByAgentID;
        }

        delete json.collectingEvent;
        
        return json;
    }, 
  */  
});
