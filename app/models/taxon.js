import DS from 'ember-data';

export default DS.Model.extend({
    fullName: DS.attr(),
    name: DS.attr(),
    author: DS.attr()
});
