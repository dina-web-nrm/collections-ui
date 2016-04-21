import DS from 'ember-data';

export default DS.Model.extend({
    ordinal: DS.attr('number', {
       defaultValue() { return 0; }
    }),
    originalAttachment: DS.belongsTo('attachment')
});
