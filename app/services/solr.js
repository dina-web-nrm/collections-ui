import Ember from 'ember';

import config from '../config/environment';

export default Ember.Service.extend({
    host: config.HOST,
    namespace: 'solr',
    core: 'dina',

    parseResponse (data) {
        return {
            records: data.response.docs.mapBy('primary_id'),
            totalRows: data.response.numFound,
        };
    },

    select (query, {entityType, fq, rows}) {
        const service = this;
        const encodedQuery = encodeURI(query);

        let url = `${this.host}/${this.namespace}/${this.core}/select?q=${encodedQuery}&fl=primary_id&wt=json&indent=true`;

        let fqString = '';
        if (entityType) {
            fq['entity_type'] = entityType;
        }

        for(let key in fq) {
            fqString += `&fq=${key}%3A${fq[key]}`;
        }

        url += fqString;

        if (rows) {
            url += `&rows=${rows}`;
        }

        return new Ember.RSVP.Promise(function (resolve, reject) {
            Ember.$.getJSON(url).success((data)=>{
                let {records, totalRows} = service.parseResponse(data);
                resolve({records, totalRows});
            }).fail((error)=>{
                reject(error);
            });
        });
    },
    updateIndex () {
        const url = `${this.host}/${this.namespace}/${this.core}/dataimport?command=delta-import&commit=1&wt=json`;
        Ember.$.getJSON(url);
    },
});
