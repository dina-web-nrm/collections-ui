import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    list: DS.belongsTo('pick-list', {
        async: true
    })
});
