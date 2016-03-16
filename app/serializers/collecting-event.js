import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend({
    primaryKey: 'collectingEventID',
    attrs: {
        locality: {
            key: 'localityID',
            serialize: 'records'
        },
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
    },
    serializeBelongsTo (snapshot, json, relationship) {
        let key = relationship.key;
        let belongsTo = snapshot.belongsTo(key);

        key = this.keyForRelationship ? this.keyForRelationship(key, "belongsTo", "serialize") : key;
        json[key] = Ember.isNone(belongsTo) ? belongsTo : belongsTo.record.serialize();

        return json;
    }
});