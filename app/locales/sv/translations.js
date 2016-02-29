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
    },
    errors: {
        description: "Fältet",
        inclusion: "{{description}} finns inte med i listan",
        exclusion: "{{description}} är ett reserverat ord",
        invalid: "{{description}} är inte giltigt",
        confirmation: "{{description}} matchar inte {{on}}",
        accepted: "{{description}} måste accepteras",
        empty: "{{description}} kan inte vara tomt",
        blank: "{{description}} måste vara angivet",
        present: "{{description}} måste vara tomt",
        collection: "{{description}} måste vara en lista",
        singular: "{{description}} kan inte vara en lista",
        tooLong: "{{description}} är för långt (max är {{max}} tecken)",
        tooShort: "{{description}} är för kort (minimum är {{min}} tecken)",
        before: "{{description}} måste vara före {{before}}",
        after: "{{description}} måstae komma efter {{after}}",
        wrongDateFormat: "{{description}} måste ha format {{format}}",
        wrongLength: "{{description}} har fel längd (ska ha {{is}} tecken)",
        notANumber: "{{description}} måste vara ett nummer",
        notAnInteger: "{{description}} måste vara ett heltal",
        greaterThan: "{{description}} måste vara större än {{gt}}",
        greaterThanOrEqualTo: "{{description}} måste vara större eller lika med {{gte}}",
        equalTo: "{{description}} måste vara lika med {{is}}",
        lessThan: "{{description}} måste vara mindre än {{lt}}",
        lessThanOrEqualTo: "{{description}} måste vara mindre eller lika med {{lte}}",
        otherThan: "{{description}} får inte vara {{value}}",
        odd: "{{description}} måste vara udda",
        even: "{{description}} måste vara jämt",
        positive: "{{description}} måste vara positivt",
        date: "{{description}} måste vara ett giltigt datum",
        email: "{{description}} måste vara en giltig e-postadress",
        phone: "{{description}} måste vara ett giltigt telefonnummer",
        url: "{{description}} måste vara en giltig url"
    }
};
