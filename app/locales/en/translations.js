export default {
    blank: '',
    definitions: {
        abort: 'Abort',
        continue: 'Continue',
        name: "Name",
        accession: "Accession",
        male: 'Male',
        female: 'Female',
        unknown: 'Unknown',
        date: 'Date',
        'date-descriptive': 'Date (YYYY-MM-DD)',
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
        coordinates: 'Coordinates',
        longitude: 'Longitude',
        latitude: 'Latitude',
        type: {
            "geology": "geology",
            "zoology-mammals": "zoology, Mammals",
            "zoology-invertebrate": "zoology, Inv/Fish/Herp",
            "zoology-entomology": "zoology, Entomology",
            "paleontology": "paleontology",
            "botany": "botany"
        },
        'comment-field': 'Comment',
        'verbatim-field': 'Verbatim field',
        'add-comment': 'Add comment/verbatimfield'
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
        'attachments-list': {
            'remove': {
                'title': 'Remove field',
                'body': 'You are about to remove an extra field. Do you want to continue?'
            }
        },
        'locality-selector': {
            'to-many-results': 'Too many localities. Please select a smaller area.',
            'search-geography': 'Search for city, area or country',
            'created-by': 'Created {{date}} by {{name}}',
            'select-existing': 'Select existing locality',
            'new-locality': 'New locality',
            'locality-name': 'Locality name',
            'show-map': 'Pick on map',
            'hide-map': 'Hide map',
            'uncertainty-radius': 'Uncertainty radius (m)',
            'verbatim-longitude': 'Verbatim longitude',
            'verbatim-latitude': 'Verbatim latitude',
            'create-new': 'Create new locality',
            'center-map': 'Center on map',
            'max-elevation': 'Alt. over sea',
            'min-elevation': 'Alt. under sea'

        },
        'locality': {
            'lithostrat': 'Lithostratigraphy',
            'chronostrat': 'Chronostratigraphy'
        },
        'preparation': {
            'object-type': 'Object category',
            'preservation-stage': 'Fossil preservation stage',
            'individuals-count': 'Nr. individuals',
            'object-description': 'Object description'
        },
        'pick-list': {
            'no-values': 'No values for collection',
            'pick': 'Pick a value'
        },
        'autocomplete-input': {
            'dropdown': {
                'subset': 'Refine your search for a more complete list.'
            },
            'inline': {
                'subset-danger': 'Displaying {{max}} of <span class="subset-danger">{{count}}</span>'
            }
        },
        'collecting-event': {
            'create-new': 'Create new collecting event',
            'start-date': 'Start date (YYYY-MM-DD)',
            'end-date': 'End date (YYYY-MM-DD)',
            'habitat-substrate': 'Habitat/Substrate',
            'botany-description': 'Object description at collection',
            'collecting-circumstance': 'Collecting circumstance',
            'verbatim-date': 'Verbatim date',
            'given-name': 'Given name'
        },
        'single-determination': {
            'verbatim-taxon': 'Taxonomy, determined, date',
            'remove': {
                'body': 'You are about to remove a determination. Do you want to continue?',
                'title': 'Remove determination'
            }
        },
        'single-preparation': {
            'remove': {
                'body': 'You are about to remove a preparation. Do you want to continue?',
                'title': 'Remove preparation'
            }
        }
    },
    collectionobject: {
        list: {
            header: 'List and search for collection objects'
        },
        new: {
            title: "New {{name}} object",
            type: {
                "geology": "geological",
                "zoology-mammals": "zoological",
                "zoology-invertebrate": "zoological",
                "zoology-entomology": "zoological",
                "paleontology": "paleontological",
                "botany": "botanical"
            },
            toolbar: {
                save: "Save",
                saving: "Saving",
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
    "form-component-type-status": 'Type status',
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
                'determined-date': 'Determination date',
                'type-status': 'Type status',
                add: 'Add determination'
            },
            accession: 'Accession',
            preparation: {
                'preparation-type': 'Preparation type',
                count: 'Count parts',
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
                'start-date': {
                    label: 'Collection date (yyyy-mm-dd)',
                    name: 'Start date'
                },
                'end-date': {
                    name: 'End date'
                },
                method: 'Method',
                'verbatim-locality': 'Verbatim locality',
                'verbatim-collector': 'Collector',
                'max-elevation': 'Nivå ö hav',
                'min-elevation': 'Nivå u hav',
                'select-existing': 'Select existing collecting event',
                name: 'Name event',
                number: 'Collecting number'
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
        url: "{{description}} must be a valid url",
        unique: "{{description}} must be unique"
    },
    beta: {
        header: 'Collection manager beta',
        intro: ' is a test site to evaluate the new collection manager. The site will be continuously updated with new features and fixes based on the internal priority and feedback from user testing.',
        information: {
            header: 'Information',
            body: {
                1: 'The site will be updated with the latest available release and you can find a release log in the "Release log" column.',
                2: 'To get started click on <i>Collection object</i> and choose <i>Register new</i>'
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
                    <li>Search for Locality, Collecting event and Geography now displays more information.</li>
                    <li>Find and select Locality on map.</li>
                    <li>Create new locality.</li>
                    <li>Expand and collapse form boxes by click on header.</li>
                    <li>Translated start page to English.</li>
                    <li>Preparation type is filtered by selected Collection.</li>
                    <li>Styling for verbatim fields.</li>
                    <li>Restrict future dates on determination and collecting event.</li>
                    <br><span class="label label-danger">Fixes</span>
                    <li>Autocomplete fields always focused and covers other content on page.</li>
                    <li>Selecting a new collector should clear and close autocomplete field.</li>
                `,
                date: '2016-03-22'
            },
            3: {
                body: `
                    <span class="label label-success">New features</span>
                    <li>Better searching for collecting event, locality and geography.<br>Possible to search for date, collector, locality, geography and given name.</li>
                    <li>Initial customization of form based on unit.<br>Order of boxes and content for determination, object/preparation and collecting event are now based on unit. To change unit use the menu in the top right corner in the form.</li>
                    <li>Updated test data for beta site.</li>
                    <li>Reversed ordering on list page.</li>

                    <br><span class="label label-danger">Fixes</span>
                    <li>Autocomplete dropdowns hidden by bottom menu.</li>
                    <li>Display entire geography in searches and after selection.</li>
                    <li>Geography search contains duplicates.</li>
                    <li>Possible to click several times on the save button.</li>
                `,
                date: '2016-04-01'
            },
            4: {
                body: `
                    <span class="label label-success">New features</span>
                    <li>Display information about number of results in autocomplete dropdowns.</li>
                    <li>Display more results in autocomplete dropdowns.</li>
                    <li>Automatically center dropdown list.</li>
                    <li>New date picker with validation.<br>Possible to add Year, year+Month or year+Month+Day.</li>
                    <li>Validate uniqueness of catalog number.</li>
                    <li>Updated style for verbatim fields.</li>
                    <li>Verbatim fields for coordinates.</li>
                    <li>Validate locality name and display warning if missing.</li>
                    <li>Specify uncertainty when creating new locality.</li>
                    <li>Center map over current coordinate with button.</li>
                    <li>Started to add collection specific value lists.</li>

                    <li>
                        <strong>Botany:</strong> Added "Habitat/Substrate" and "Object description at collection".
                    </li>
                    <li>
                        <strong>Entomology:</strong> Added "Altitude over/under sea".
                    </li>
                    <li>
                        <strong>Mammals:</strong> Added "Collecting circumstance".
                    </li>

                    <br><span class="label label-danger">Fixes</span>
                    <li>Toggling with box header occurs unintentionally.</li>
                    <li>"Pick on map" misplaced in certain browsers.</li>
                    <li>Unified "Create new" and "Search for" labels.</li>

                `,
                date: '2016-04-15',
            },
            5: {
                body: `
                    <span class="label label-success">New features</span>
                    <li>Possible to add notes and verbatim fields to Collecting event and Object/Preparations.</li>
                    <li>Display geography rank in geography dropdowns(not translated).</li>
                    <li>Display scale in maps.</li>
                    <li>Add more validation to fields that have restrictions.</li>
                    <li>Display unit specific information in autocomplete dropdowns.</li>
                    <li>Default map view is now the entire world.</li>
                    <li>Confirm removing preparation, determination and extra fields.</li>
                    <li>
                        <strong>Paleontology:</strong> Added "Lithostratigraphy" and "Chronostratigraphy" fields when creating locality.
                    </li>

                    <br><span class="label label-danger">Fixes</span>
                    <li>Long geography names not visible.</li>
                    <li>Cannot select an already selected item in autocomplete dropdowns.</li>
                    <li>Updated style on verbatim fields.</li>
                    <li>Possible to specify dates with day and month out of range.</li>
                    <li>Selecting geography with coordinates does not always center on map.</li>
                    <li>Hovering an locality in the map should highlight in list.</li>
                `,
                date: '2016-05-18',
            },
        },
    },
};
