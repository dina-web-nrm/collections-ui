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
        accession: "Accession"
    },
    main: {
        application_name: "DINA Samlingshanteraren",
        welcome: "Välkommen till Samlingshanteraren!"
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

    // Use underscore to be able to use the name as id and class name in HTML.
    field_group_basic_data: 'Grunddata',
    field_group_taxonomy: 'Taxonomi/Bestämning',
    field_group_site: 'Insamling/Fyndplats',
    field_group_preparation: 'Objekt/Preparationer',
    field_group_other: 'Övrigt'
};
