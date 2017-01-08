import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {

    //primaryKey: 'collectionObjectID',
    
    attrs: { 
     
        cataloger: {
            key: 'cataloger',
            serialize: 'ids'
        }, 
        collection: {
            key: 'collection',
            serialize: 'ids'
        }, 
        accession: {
            key: 'accession',
            serialize: 'ids'
        }, 
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
        const disciplineID = snapshot.record.get('collection.discipline.id');
 
        // Copy attributes.
        json.catalogNumber = json.data.attributes['catalog-number'];
        json.catalogedDate = json.data.attributes['cataloged-date'];
        json.guid = json.data.attributes.guid;
        json.name = json.data.attributes.name;


        // Copy CollectionMemberID to CollectionID. 
        json.collectionID = parseInt(json.data.collection);
        json.collectionMemberID = json.collectionID; 
        delete json.data.collection;
        delete json.data.attributes;

        json.catalogerID = parseInt(json.data.cataloger);
        delete json.data.cataloger;
 
        json.accessionID = parseInt(json.data.accession);
        delete json.data.accession;

        json.determinationList = json.data.determinations;
        json.determinationList.forEach(function(element) {
            element.collectionMemberID = json.collectionMemberID;
            element.taxonID = parseInt(element.data.taxon);
            element.determinerID = parseInt(element.data.determiner);
            element.isCurrent =  element.data.attributes['is-current'];
            element.determinedDate = element.data.attributes['determined-date'];
            element.determinedDatePrecision = element.data.attributes['determined-date-precision'];
            element.method = element.data.attributes.method;
            element.confidence = element.data.attributes.confidence;
            element.typeStatusName = element.data.attributes['type-status'];
            element.text1 = element.data.attributes.text1;
            delete element.data; 
        });
        delete json.data.determinations;
          
        json.preparationList = json.data.preparations;
        json.preparationList.forEach(function(element) { 
            element.collectionMemberID = json.collectionMemberID; 
            element.prepTypeID = parseInt(element.data['preparation-type']);
            element.storageID = parseInt(element.data.storage); 
            element.timestampCreated = parseInt(element.data.attributes['timestamp-created']);
            element.description =  element.data.attributes.description;
            element.status =  element.data.attributes.status;
            element.sampleNumber = element.data.attributes['sample-number'];
            element.countAmt = element.data.attributes['count-amt'];
            element.integer1 = parseInt(element.data.attributes.integer1);
            
            delete element.data;
        }); 
        delete json.data.preparations;
  
        if(json.data['object-attribute']) {
            json.collectionObjectAttributeID = json.data['object-attribute'];
            json.collectionObjectAttributeID.collectionMemberID = json.collectionMemberID; 
            json.collectionObjectAttributeID.text1 = json.collectionObjectAttributeID.data.attributes.text1;
            json.collectionObjectAttributeID.text2 = json.collectionObjectAttributeID.data.attributes.text2;
            json.collectionObjectAttributeID.text3 = json.collectionObjectAttributeID.data.attributes.text3;
            json.collectionObjectAttributeID.text4 = json.collectionObjectAttributeID.data.attributes.text4;
            json.collectionObjectAttributeID.text5 = json.collectionObjectAttributeID.data.attributes.text5;
            json.collectionObjectAttributeID.text6 = json.collectionObjectAttributeID.data.attributes.text6;
            json.collectionObjectAttributeID.text7 = json.collectionObjectAttributeID.data.attributes.text7;
            json.collectionObjectAttributeID.text8 = json.collectionObjectAttributeID.data.attributes.text8;
            json.collectionObjectAttributeID.text9 = json.collectionObjectAttributeID.data.attributes.text9;
            json.collectionObjectAttributeID.text10 = json.collectionObjectAttributeID.data.attributes.text10;
            json.collectionObjectAttributeID.number1 = json.collectionObjectAttributeID.data.attributes.number1;

            delete json.collectionObjectAttributeID.data;
        }

        if (json.data['collecting-event']) {
            json.collectingEventID = json.data['collecting-event'];

            if(json.collectingEventID.data.id) {
                json.collectingEventID = parseInt(json.collectingEventID.data.id);
            } else {   
                json.collectingEventID.disciplineID = parseInt(disciplineID);
                json.collectingEventID.method = json.collectingEventID.data.attributes.method;
                json.collectingEventID.startDate = json.collectingEventID.data.attributes['start-date'];
                json.collectingEventID.endDate = json.collectingEventID.data.attributes['end-date'];
                json.collectingEventID.startDatePrecision = json.collectingEventID.data.attributes['start-date-precision'];
                json.collectingEventID.verbatimDate = json.collectingEventID.data.attributes['verbatim-date'];
                json.collectingEventID.verbatimLocality = json.collectingEventID.data.attributes['verbatim-locality']; 
                json.collectingEventID.text1 = json.collectingEventID.data.attributes.text1; 
                json.collectingEventID.text2 = json.collectingEventID.data.attributes.text2; 
                json.collectingEventID.remarks = json.collectingEventID.data.attributes.remarks; 
 

                if (json.collectingEventID.data.locality) {

                    json.collectingEventID.localityID = json.collectingEventID.data.locality;
                    if(json.collectingEventID.localityID.data.id) {
                        json.collectingEventID.localityID = parseInt(json.collectingEventID.localityID.data.id);
                    } else {
                        json.collectingEventID.localityID.disciplineID = parseInt(disciplineID);
                        json.collectingEventID.localityID.localityName = json.collectingEventID.localityID.data.attributes['locality-name'];
                        json.collectingEventID.localityID.latitude1 = json.collectingEventID.localityID.data.attributes.latitude1;
                        json.collectingEventID.localityID.longitude1 = json.collectingEventID.localityID.data.attributes.longitude1;
                        json.collectingEventID.localityID.long1Text = json.collectingEventID.localityID.data.attributes['long1-text'];
                        json.collectingEventID.localityID.lat1Text = json.collectingEventID.localityID.data.attributes['lat1-text'];
                        json.collectingEventID.localityID.maxElevation = json.collectingEventID.localityID.data.attributes['max-elevation'];
                        json.collectingEventID.localityID.minElevation = json.collectingEventID.localityID.data.attributes['min-elevation'];
                        json.collectingEventID.localityID.srcLatLongUnit = json.collectingEventID.localityID.data.attributes['src-lat-long-unit'];
                        json.collectingEventID.localityID.latLongAccuracy = json.collectingEventID.localityID.data.attributes['lat-long-accuracy'];
                        json.collectingEventID.localityID.geographyID = parseInt(json.collectingEventID.localityID.data.geography);

                        if (json.collectingEventID.localityID.data['paleo-context']) {
                            json.collectingEventID.localityID.paleoContextID = json.collectingEventID.localityID.data['paleo-context'];
                            if(json.collectingEventID.localityID.paleoContextID.data.id) {
                                json.collectingEventID.localityID.paleoContextID = json.collectingEventID.localityID.paleoContextID.data.id;
                            } else {
                                json.collectingEventID.localityID.paleoContextID.disciplineID = parseInt(disciplineID);
                                json.collectingEventID.localityID.paleoContextID.chronosStratID = json.collectingEventID.localityID.paleoContextID.data['chronos-strat'];
                                json.collectingEventID.localityID.paleoContextID.lithoStratID = json.collectingEventID.localityID.paleoContextID.data['litho-strat'];
                            } 
                            delete json.collectingEventID.localityID.paleoContextID.data;
                        } 
                    } 
                    delete json.collectingEventID.localityID.data;
                }  


                json.collectingEventID.collectorList = json.collectingEventID.data.collectors; 
                json.collectingEventID.collectorList.forEach(function(element) {  
                    element.isPrimary =  element.data.attributes['is-primary'];
                    element.orderNumber = parseInt(element.data.attributes['order-number']); 
                    element.agentID = parseInt(element.data.agent); 
                    delete element.data;
                }); 
            } 
            delete json.collectingEventID.data; 
        }
 
        delete json.data;
        return json;
    },
     
  
});
