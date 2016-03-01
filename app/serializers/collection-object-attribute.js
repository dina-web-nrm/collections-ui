import DS from 'ember-data';

export default DS.JSONSerializer.extend({
    attrs: {
        lifeStage: 'text1',
        sex: 'text2',
        condition: 'text3',
        type: 'text4',
        placement: 'text5',
        rackNumber: 'text6',
        measurements: 'text7',
        preservationStage: 'text8',
        age: 'text9'
    }
});