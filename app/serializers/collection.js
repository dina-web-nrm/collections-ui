import DS from 'ember-data';

export default DS.JSONAPISerializer.extend(DS.EmbeddedRecordsMixin, {
    
    //primaryKey: 'id',
 
    attrs: {
        discipline: {
        	key: 'disciplineID',
            serialize: 'ids'
        }
    } 
});