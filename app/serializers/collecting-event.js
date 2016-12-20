import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
    session: Ember.inject.service('session'),
 
   

/*
    attrs: {
        locality: {
            key: 'locality',
            serialize: 'records'
        },
        givenName: 'text1',
        description: 'text2',
        //agent: 'createdByAgentID',
        collectors: {
            key: 'collectors',
            serialize: 'records'
        },
        attachments: {
            key: 'collectingeventattachments',
            serialize: 'records'
        }
    },
    */
});
