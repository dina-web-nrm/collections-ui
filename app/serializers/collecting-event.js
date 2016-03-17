import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    session: Ember.inject.service('session'),
    primaryKey: 'collectingEventID',
    attrs: {
        locality: {
            key: 'localityID',
            serialize: 'records'
        },
        givenName: 'text1',
        agent: 'createdByAgentID',
        collectors: {
            key: 'collectorList',
            serialize: 'records'
        }
    },
    serialize() {
        let json = this._super(...arguments);
        json.createdByAgentID = parseInt(this.get('session').get('data.authenticated.id'));
        return json;
    }
});