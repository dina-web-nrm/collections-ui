import Ember from 'ember';

const DIVISIONS = {
    PAL: 1,
    ZOO: 2,
    BOT: 3,
    GEO: 4
};

const DEFAULT_CONFIGURATION = {
    type: 'blank',
    components: {
        'form-component-basic-data': 'form-component/basic-data',
        'form-component-determination': 'form-component/determination',
        'form-component-preparation': 'form-component/preparation',
        'form-component-collecting-event': 'form-component/collecting-event'   
    }
};

const CONFIGURATIONS = {
    1: {
        type: 'zoology.mammals',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-determination': 'form-component/determination',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-preparation': 'form-component/preparation'
        }
    },
    2: {
        type: 'zoology.entomology',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-determination': 'form-component/determination',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-preparation': 'form-component/preparation'
        }
    },
    3: {
        type: 'zoology.invertebrate',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-determination': 'form-component/determination',
            'form-component-preparation': 'form-component/preparation',
            'form-component-collecting-event': 'form-component/collecting-event'   
        }
    },
    4: {
        type: 'botany',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-preparation': 'form-component/preparation',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-determination': 'form-component/determination'
        }
    },
    5: {
        type: 'paleontology',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-preparation': 'form-component/preparation',
            'form-component-determination': 'form-component/determination'
        }
    },
    6: {
        type: 'geology',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-determination': 'form-component/determination',
            'form-component-preparation': 'form-component/preparation'
        }
    }
};

export default Ember.Service.extend({
    /** Inject services. */
    session: Ember.inject.service('session'),
    
    /** Constants */
    constants: DIVISIONS,    
    configurations: CONFIGURATIONS,

    type: Ember.computed('session.data.division', 'session.data.locale', function () {
        const DIVISION = this.get('session.data.division');
        return (
            CONFIGURATIONS[DIVISION].type || DEFAULT_CONFIGURATION.type
        );
    }),
    
    /** Return components based on logged in user. */
    components: Ember.computed('session.data.division', function () {
        const DIVISION = this.get('session.data.division');
        return (
            CONFIGURATIONS[DIVISION].components || DEFAULT_CONFIGURATION.components
        );
    })
});
