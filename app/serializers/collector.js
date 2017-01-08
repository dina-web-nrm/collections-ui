import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
  //  primaryKey: 'collectorID',
 

    attrs: {
        agent: {
        	key: 'agentID',
            serialize: 'ids'
        }
    },

/*
    serialize () {
        var json = this._super(...arguments);
        json.agentID = parseInt(json.agentID);
        return json;
    }
    */
});