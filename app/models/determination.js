import DS from 'ember-data';

export default DS.Model.extend({
    isCurrent: DS.attr('boolean'),
    determinedDate: DS.attr('date'),
    method: DS.attr(),
    taxonomy: DS.attr() 
    //taxon: DS.belongsTo('taxonomy')
});
