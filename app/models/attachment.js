import DS from 'ember-data';

export default DS.Model.extend({
    remarks: DS.attr('string'),
    origFilename: DS.attr('string', {
        defaultValue() { return 'attachment'; },
    }),
    tableID: DS.attr('string', {

        /* Dummy value due to NON-NULL restriction in database. */
        defaultValue() { return 1; },
    }),
    isPublic: DS.attr('boolean', {
        defaultValue() { return true; },
    }),
});
