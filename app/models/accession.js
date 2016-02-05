import DS from 'ember-data';

export default DS.Model.extend({
    remarks: DS.attr(),
    accessionNumber: DS.attr()
});
