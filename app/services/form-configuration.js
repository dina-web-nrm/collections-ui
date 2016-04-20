import Ember from 'ember';

const previewAttributes = {
    localitySelector: [{
        key: 'localityName',
        title: 'component.locality-selector.locality-name'
    }, {
        key: 'geography.displayName',
        title: 'definitions.geography'
    }, {
        key: 'uncertaintyRadius',
        title: 'component.locality-selector.uncertainty-radius'
    }, {
        key: 'location',
        title: 'definitions.coordinates'
    }],
    collectingEvent: [{
        key: 'givenName',
        title: ''
    }, {
        key: 'startDate',
        title: 'fields.labels.collecting-event.start-date.name',
        date: {
            precision: 'startDatePrecision'
        }
    }, {
        key: 'endDate',
        title: 'fields.labels.collecting-event.end-date.name',
        date: {
            precision: 'endDatePrecision'
        }
    }, {
        key: 'method',
        title: 'fields.labels.collecting-event.method'
    }, {
        key: 'locality.localityName',
        title: 'component.locality-selector.locality-name'
    }, {
        key: 'locality.geography.displayName',
        title: 'definitions.geography'
    }, {
        key: 'locality.location',
        title: 'definitions.coordinates'
    }, {
        arrayKey: 'collectors',
        class: 'label label-default',
        title: 'fields.labels.collector',
        key: 'agent.fullName'
    }]
};

const CONFIGURATIONS = {
    1: {
        type: 'zoology-mammals',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-determination': 'form-component/determination',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-preparation': 'form-component/preparation'
        },
        component: {
            collectingEvent: {
                enableCreate: true,
                preview: {
                    attributes: previewAttributes.collectingEvent
                }
            },
            locality: {
                hide: {
                    elevation: true,
                    paleoContext: true
                }
            },
            localitySelector: {
                preview: {
                    attributes: previewAttributes.localitySelector
                }
            }
        }
    },
    2: {
        type: 'zoology-entomology',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-determination': 'form-component/determination',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-preparation': 'form-component/preparation'
        },
        component: {
            determination: {
                hide: {
                    confidence: true
                }
            },
            locality: {
                hide: {
                    paleoContext: true
                }
            },
            localitySelector: {
                preview: {
                    attributes: previewAttributes.localitySelector
                }
            },
            collectingEvent: {
                preview: {
                    attributes: previewAttributes.collectingEvent
                }
            }
        }
    },
    3: {
        type: 'zoology-invertebrate',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-determination': 'form-component/determination',
            'form-component-preparation': 'form-component/preparation',
            'form-component-collecting-event': 'form-component/collecting-event'   
        },
        component: {
            determination: {
                hide: {
                    method: true
                }
            },
            locality: {
                hide: {
                    elevation: true,
                    paleoContext: true
                }
            },
            localitySelector: {
                preview: {
                    attributes: previewAttributes.localitySelector
                }
            },
            collectingEvent: {
                preview: {
                    attributes: previewAttributes.collectingEvent
                }
            }
        }
    },
    4: {
        type: 'botany',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-preparation': 'form-component/preparation',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-type-status': 'form-component/type-status',
            'form-component-determination': 'form-component/determination'
        },
        component: {
            determination: {
                hide: {
                    method: true,
                    confidence: true,
                    typeStatus: true
                },
                top: {
                    verbatimTaxon: true
                }
            },
            collectingEvent: {
                enableCreate: true,
                preview: {
                    attributes: previewAttributes.collectingEvent
                }
            },
            locality: {
                hide: {
                    elevation: true,
                    paleoContext: true
                }
            },
            localitySelector: {
                preview: {
                    attributes: previewAttributes.localitySelector
                }
            },
            preparation: {
                disableAdd: true
            }
        }
    },
    5: {
        type: 'paleontology',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-preparation': 'form-component/preparation',
            'form-component-determination': 'form-component/determination'
        },
        component: {
            singlePreparation: {
                hide: {
                    individualsCount: true,
                    preparationNumber: true
                }
            },
            collectingEvent: {
                enableCreate: true,
                preview: {
                    attributes: previewAttributes.collectingEvent
                }
            },
            locality: {
                hide: {
                    elevation: true,
                    paleoContext: true
                }
            },
            localitySelector: {
                preview: {
                    attributes: previewAttributes.localitySelector
                }
            }
        }
    },
    6: {
        type: 'geology',
        components: {
            'form-component-basic-data': 'form-component/basic-data',
            'form-component-collecting-event': 'form-component/collecting-event',
            'form-component-determination': 'form-component/determination',
            'form-component-preparation': 'form-component/preparation'
        },
        component: {
            singlePreparation: {
                hide: {
                    individualsCount: true,
                    preparationNumber: true
                }
            },
            determination: {
                hide: {
                    confidence: true
                }
            },
            collectingEvent: {
                enableCreate: true,
                preview: {
                    attributes: previewAttributes.collectingEvent.concat([{
                        key: 'locality.paleoContext.lithoStrat.fullName',
                        title: 'component.locality.lithostrat'
                    }, {
                        key: 'locality.paleoContext.chronosStrat.fullName',
                        title: 'component.locality.chronostrat'        
                    }])
                }
            },
            locality: {
                hide: {
                    elevation: true
                }
            },
            localitySelector: {
                preview: {
                    attributes: previewAttributes.localitySelector.concat([{
                        key: 'paleoContext.lithoStrat.fullName',
                        title: 'component.locality.lithostrat'        
                    }, {
                        key: 'paleoContext.chronosStrat.fullName',
                        title: 'component.locality.chronostrat'        
                    }])
                }
            }
        }
    }
};

export default Ember.Service.extend({

    /** Inject services. */
    session: Ember.inject.service('session'),
    
    /** All available configurations. */
    configurations: CONFIGURATIONS,
    
    /** Return active configuration. */
    configuration: Ember.computed('session.data.division', function () {
        const DIVISION = this.get('session.data.division');
        const configuration = (
            this.get('configurations')[DIVISION] ||
            this.get('configurations')[1]
        );
        
        return configuration;
    }),
    
    /** Return type based on division. */
    type: Ember.computed.alias('configuration.type'),
    
    /** Return components based on division. */
    components: Ember.computed.alias('configuration.components'),
    
    /** Return component specific configurations based on division. */
    component: Ember.computed.alias('configuration.component')

});
