import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    primaryKey: 'collectingEventID',
    attrs: {
        locality: 'localityID',
        givenName: 'text1',
        collectors: {
            key: 'collectorList',
            serialize: 'records'
        }
    },

    /**
     * Override serialize to set attributes required by the
     * database that are not used in UI.
     */
    serialize(snapshot) {
        var json = this._super(...arguments);

        let collectors = [];
        snapshot.record.get('collectors').forEach((collector) => {
            collectors.push(collector.serialize());
        });

        json.collectorList = collectors;

        return json;
    }
});