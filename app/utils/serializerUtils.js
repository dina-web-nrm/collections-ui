function arConcat(ar1, ar2) {
    if(ar1 != null) {
        if(ar2 != null) {
            ar2 = ar2.concat(ar1);
        }
        else {
            ar2 = ar1;
        }
    }
    return ar2;
}

function getRelData(payload, key, type) {
    var data = null;
    if(Array.isArray(payload.attributes[key])) {  // many relationship
        var ids = payload.attributes[key];
        data = [];
        console.log("Many relationship");
        for(var j = 0; j < ids.length;j++) {
            var dataRow = {};
            
            dataRow.type = type;
            dataRow.id = ids[j];
            data[j] = dataRow;
        }
    }

    else { // single relationship
        data = {};
        data.type = type;
        data.id = payload.attributes[key];

    }

    return data;
}


function createRelationships(fieldName, type, key, payload) {
    var tmp = {};
    var data = null;
    

    if(Array.isArray(payload.length)) { //multi item payload
        for(var i = 0;i < payload.length;i++) {
            var di = payload[i];
            var tmpData = getRelData(di, key, type);
            console.log("Multipayload");
            data = arConcat(tmpData, data);
            
        }
    }
    else { // single item payload
        data = getRelData(payload, key, type);
    }

    if(data != null) {
        tmp.data = data;
    }

    return tmp;
}

function buildRelations(fieldName, type, key, payload) {
    var tmpRel = createRelationships(fieldName, type, key, payload);
    var curRel = payload.relationships;
    var ret = null;

    if(tmpRel != null) {
        if(curRel == null) {
            curRel = {};
        }
        curRel[fieldName] = tmpRel;
        ret = curRel;
    }
    else {
        ret = curRel;
    }
    return ret;
}

/*
    addRelation adds the relationships tag for the given fieldName in the model, which has type 'type', 
    where id is in field 'key'.
    this relationsships tag is added to all objects in payload.data.

    It can be called multiple times in a row with different field, types and key on the same payload
    to add multiple relationships.
*/

function addRelation(fieldName, type, key, payload) {
    var data = payload.data;
    if(Array.isArray(data)) { //multi data
        for(var i= 0; i < data.length;i++) {
            data[i].relationships = buildRelations(fieldName, type, key, data[i]);
        }
    }
    else {
        data.relationships= buildRelations(fieldName, type, key, data);
    }
}
export {addRelation};