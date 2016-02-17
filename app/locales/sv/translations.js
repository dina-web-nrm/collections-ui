export default {
    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
    definitions: {
        zoological: "zoologiskt",
        name: "Namn",
        accession: "Accession",
        male: 'Hane',
        female: 'Hona',
        unknown: 'Okänt'
    },
    main: {
        application_name: "DINA Samlingshanteraren",
        welcome: "Välkommen till Samlingshanteraren!",
        error: "Ett fel uppstod, försök igen eller gå till startsidan."
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
            accession: 'Accession',
            confidence: 'Osäkerhet',
            method: 'Metod',
            determiner: 'Bestämmare',
            'preparation-type': 'Preparationstyp',
            count: 'Antal',
            'life-stage': 'Livsstadie',
            'sex': 'Kön',
            'measurements': 'Mätningar',
            'condition': 'Kondition'
        }
    }
};
