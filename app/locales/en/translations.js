export default {
    definitions: {
        zoological: "zoological",
        name: "Name",
        accession: "Accession",
        male: 'Male',
        female: 'Female',
        unknown: 'Unknown',
        date: 'Date',
        'create-new': {
            1: 'Create new',
            2: 'Create new'
        },
        user: 'User',
        'sign-out': 'Sign out',
        'sign-in': 'Sign in',
        map: 'Map',
        count: 'pcs',
        next: 'Next',
        previous: 'Previous',
        use: 'Use',
        'type-to-search': 'Type to search',
        'collecting-place': {
            one: 'Locality',
            other: 'Localities'
        },
        'no-result': 'No result',
        geography: 'Geography',
        coordinates: 'Coordinates'
    },
    main: {
        application_name: "Collection manager",
        welcome: "Välkommen till Samlingshanteraren!",
        error: "An error occured. Please try again.",
        'validation-message': {
            save: 'Could not save'
        }
    },
    navigation: {
        start: "Start",
        "collections": "Collections",
        "collection_object.root": "Collection object",
        "collection_object.add": "Register new",
        "collection_object.list": "List all",
        "search.button": "Search",
        "search.input": "Search for ID/Species"
    },
    component: {
        'locality-selector': {
            'to-many-results': 'Too many localities. Please select a smaller area.',
            'search-geography': 'Search on name, city, area or country',
            'created-by': 'Created {{date}} by {{name}}'
        }
    },
    collectionobject: {
        list: {
            header: 'List and search for collection objects'
        },
        new: {
            title: "New {{name}} object",
            toolbar: {
                save: "Save",
                print: "Print label",
                close: "Close",
                duplicate: "Duplicate"
            }
        }
    },

    "form-component-basic-data": 'Basic data',
    "form-component-determination": 'Taxonomy/Determination',
    "form-component-collecting-event": 'Collecting event/Locality',
    "form-component-preparation": 'Object/Preparations',
    "form-component-other": 'Other',
    fields: {
        labels: {
            cataloger: 'Registered by',
            collector: 'Collector',
            collecting_place: 'Locality',
            collecting_event: 'Collecting event',
            collection: 'Collection',
            catalogNumber: 'Catalog number',
            determination: {
                confidence: 'Confidence',
                method: 'Method',
                determiner: 'Determiner',
                'determined-date': 'Date (yyyy-mm-dd)',
                'type-status': 'Type status',
                add: 'Add determination'
            },
            accession: 'Accession',
            preparation: {
                'preparation-type': 'Preparation type',
                count: 'Count',
                'life-stage': 'Life stage',
                age: 'Age',
                sex: 'Sex',
                measurements: 'Measurements',
                condition: 'Condition',
                part: 'Part',
                status: 'Status',
                storage: 'Storage',
                number: 'Preparation nr',
                add: 'Add part/preparation'
            },
            'collecting-event': {
                'start-date': 'Collection date (yyyy-mm-dd)',
                method: 'Method',
                'verbatim-locality': 'Locality',
                'verbatim-collector': 'Collector',
                'max-elevation': 'Nivå ö hav',
                'min-elevation': 'Nivå u hav',
                'select-existing': 'Select existing collecting event',
                'show-map': 'Pick on map',
                'hide-map': 'Hide map'
            }
        },
        placeholder: {
            'date-format': 'Eg. 1985-05-08'
        }
    },
    errors: {
        description: "This field",
        inclusion: "{{description}} is not included in the list",
        exclusion: "{{description}} is reserved",
        invalid: "{{description}} is invalid",
        confirmation: "{{description}} doesn't match {{on}}",
        accepted: "{{description}} must be accepted",
        empty: "{{description}} can't be empty",
        blank: "{{description}} can't be blank",
        present: "{{description}} must be blank",
        collection: "{{description}} must be a collection",
        singular: "{{description}} can't be a collection",
        tooLong: "{{description}} is too long (maximum is {{max}} characters)",
        tooShort: "{{description}} is too short (minimum is {{min}} characters)",
        before: "{{description}} must be before {{before}}",
        after: "{{description}} must be after {{after}}",
        wrongDateFormat: "{{description}} must be in the format of {{format}}",
        wrongLength: "{{description}} is the wrong length (should be {{is}} characters)",
        notANumber: "{{description}} must be a number",
        notAnInteger: "{{description}} must be an integer",
        greaterThan: "{{description}} must be greater than {{gt}}",
        greaterThanOrEqualTo: "{{description}} must be greater than or equal to {{gte}}",
        equalTo: "{{description}} must be equal to {{is}}",
        lessThan: "{{description}} must be less than {{lt}}",
        lessThanOrEqualTo: "{{description}} must be less than or equal to {{lte}}",
        otherThan: "{{description}} must be other than {{value}}",
        odd: "{{description}} must be odd",
        even: "{{description}} must be even",
        positive: "{{description}} must be positive",
        date: "{{description}} must be a valid date",
        email: "{{description}} must be a valid email address",
        phone: "{{description}} must be a valid phone number",
        url: "{{description}} must be a valid url"
    },
    beta: {
        header: 'Collection manager beta',
        intro: ' is a test site to evaluate the new collection manager. the site will be continuesly updated with new features and fixes based on the internal priority and feedback from user testing.',
        information: {
            header: 'Information',
            body: {
                1: 'The site will be updated with the latest available release and you can find a release log in the "Release log" column.',
                2: 'to get started click on <i>Collection object</i> and choose <i>Register new</i>'
            }
        },
        feedback: {
            body: 'Use the feedback form if you find anything that is not working correctly or if you have suggestions on improvements.',
            header: 'Feedback',
            button: 'Send feedback'
        },
        sprint: {
            header: 'Current sprint',
            body: 'The current sprint is focusing on Collecting events, Localities, User authentication and being able to test with real data.'
        },
        changes: {
            header: 'Release log',
            1: {
                body: `
                    <li>Updated list and view page for collection objects.</li>
                    <li>language selection is persisted between.</li>
                    <li>Possible to "login" as different users (click "Sign in" and search by lastname).</li>
                    <li>Updated start page with information about beta site.</li>
                    <li>Register collection object form with basic funtionality in place.</li>
                `,
                date: '2016-03-07'
            },
            2: {
                body: `
                    <span class="label label-success">New features</span>
                    <li>Search for Locality now displays more information.</li>
                    <li>Find and select Locality on map.</li>
                    <li>Expand and collapse form boxes by click on header.</li>
                    <li>Translated start page to English.</li>
                    <span class="label label-danger">Fixes</span>
                    <li>Autocomplete fields always focused and covers other content on page.</li>
                    <li>Selecting a new collector shuold clear and close autocomplete field.</li>
                `,
                date: '2016-03-22'
            }
        }
    }
};
