export default {
    definitions: {
        zoological: "zoologiskt",
        name: "Namn",
        accession: "Accession",
        male: 'Hane',
        female: 'Hona',
        unknown: 'Okänt',
        date: 'Datum',
        'create-new': {
            1: 'Skapa nytt',
            2: 'Skapa ny'
        }
    },
    main: {
        application_name: "Samlingshanteraren",
        welcome: "Välkommen till Samlingshanteraren!",
        error: "Ett fel uppstod, försök igen eller gå till startsidan.",
        'validation-message': {
            save: 'Det gick inte att spara'
        }
    },
    navigation: {
        start: "Start",
        "collections": "Samlingar",
        "collection_object.root": "Samlingsföremål",
        "collection_object.add": "Registrera föremål",
        "collection_object.list": "Lista",
        "search.button": "Sök",
        "search.input": "Sök på art/ID",
        sign_out: "Logga ut"
    },
    collectionobject: {
        new: {
            title: "Nytt {{name}} föremål",
            toolbar: {
                save: "Spara",
                print: "Skriv ut etikett",
                close: "Stäng",
                duplicate: "Duplicera"
            }
        }
    },

    "dwcm-basic-data": 'Grunddata',
    "dwcm-taxonomy": 'Taxonomi/Bestämning',
    "dwcm-collecting-event": 'Insamling/Fyndplats',
    "dwcm-preparation": 'Objekt/Preparationer',
    "dwcm-other": 'Övrigt',
    fields: {
        labels: {
            collector: 'Insamlare',
            collecting_place: 'Fyndplats(lokal)',
            collecting_event: 'Insamlingstillfälle',
            collection: 'Samling/delsamling',
            catalogNumber: 'Katalognr',
            determination: {
                confidence: 'Osäkerhet',
                method: 'Metod',
                determiner: 'Bestämmare',
                'determined-date': 'Datum(åååå-mm-dd)'
            },
            accession: 'Accession',
            'preparation-type': 'Preparationstyp',
            count: 'Antal',
            'life-stage': 'Livsstadie',
            sex: 'Kön',
            measurements: 'Mätningar',
            condition: 'Kondition',
            'collecting-event': {
                'start-date': 'Insamlingsdatum(åååå-mm-dd)',
                method: 'Insamlingsmetod',
                'verbatim-locality': 'Lokal',
                'verbatim-collector': 'Insamlare',
                'max-elevation': 'Nivå ö hav',
                'min-elevation': 'Nivå u hav',
                'select-existing': 'Välj från sparade insamlingstillfällen'
            }
        },
        placeholder: {
            'date-format': '1985-05-08'
        }
    }
};
