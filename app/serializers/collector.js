import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {
    primaryKey: 'collectorID',
    attrs: {
        agent: 'agentID'
    },

    serialize () {
        var json = this._super(...arguments);
        json.agentID = parseInt(json.agentID);
        return json;
    }
});