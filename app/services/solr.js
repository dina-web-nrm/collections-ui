import Ember from 'ember';

export default Ember.Service.extend({
    baseUrl: 'http://localhost/solr',
    core: 'dina',
    
    parseResponse (data) {
        return data.response.docs.mapBy('primary_id');
    },
    
    select (query, {entityType, fq}) {
        const service = this;
        let url = `${this.baseUrl}/${this.core}/select?q=${query}&fl=primary_id&wt=json&indent=true`;

        if (entityType) {
            fq['entity_type'] = entityType;
        }

        let fqString = '';
        for(let key in fq) {
            fqString += `&fq=${key}%3D${fq[key]}`;
        }
        
        url += fqString;
        
        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.getJSON(url).success((data)=>{
                resolve(service.parseResponse(data));
            }).fail((error)=>{
                reject(error);
            });
        });
    },
    updateIndex () {
        const url = `${this.baseUrl}/${this.core}/dataimport?command=delta-import&commit=1&wt=json`;
        Ember.$.getJSON(url);
    }
});
