export default {
    blank: '',
    definitions: {
        name: "Namn",
        accession: "Accession",
        male: 'Hane',
        female: 'Hona',
        unknown: 'Okänt',
        date: 'Datum',
        'create-new': {
            1: 'Skapa nytt',
            2: 'Skapa ny'
        },
        user: 'Användare',
        'sign-out': 'Logga ut',
        'sign-in': 'Logga in',
        map: 'Karta',
        count: 'st',
        next: 'Nästa',
        previous: 'Föregående',
        use: 'Använd',
        'type-to-search': 'Skriv för att söka',
        'collecting-place': {
            one: 'Fyndplats',
            other: 'Fyndplatser'
        },
        'no-result': 'Inget resultat',
        geography: 'Geografi',
        coordinates: 'Koordinater',
        longitude: 'Longitud',
        latitude: 'Latitud',
        type: {
            geology: "Geologi",
            zoology: {
                mammals: "Zoologi, Däggdjur",
                invertebrate: "Zoologi, Ev/Fisk/Herp",
                entomology: "Zoologi, Entomologi"
            },
            paleontology: "Paleontologi",
            botany: "Botanik"
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
        "search.input": "Sök på art/ID"
    },
    component: {
        'locality-selector': {
            'to-many-results': 'För många fyndplatser. Välj ett mindre område.',
            'search-geography': 'Sök på namn, ort, område, land',
            'created-by': 'Skapad {{date}} av {{name}}',
            'select-existing': 'Sök/välj sparad fyndplats',
            'new-locality': 'Ny fyndplats',
            'locality-name': 'Fyndplats/lokalnamn',
            'show-map': 'Välj från karta',
            'hide-map': 'Dölj karta'
        }
    },
    collectionobject: {
        list: {
            header: 'Lista och sök efter samlingsföremål'
        },
        new: {
            title: "Nytt {{name}} föremål",
            type: {
                geology: "geologiskt",
                zoology: {
                    mammals: "zoologiskt",
                    invertebrate: "zoologiskt",
                    entomology: "zoologiskt"
                },
                paleontology: "paleontologiskt",
                botany: "botaniskt"
            },
            toolbar: {
                save: "Spara",
                print: "Skriv ut etikett",
                close: "Stäng",
                duplicate: "Duplicera"
            }
        }
    },

    "form-component-basic-data": 'Grunddata',
    "form-component-determination": 'Taxonomi/Bestämning',
    "form-component-collecting-event": 'Insamling/Fyndplats',
    "form-component-preparation": 'Objekt/Preparationer',
    "form-component-other": 'Övrigt',
    fields: {
        labels: {
            cataloger: 'Registrerad av',
            collector: 'Insamlare',
            collecting_place: 'Fyndplats(lokal)',
            collecting_event: 'Insamlingstillfälle',
            collection: 'Samling/delsamling',
            catalogNumber: 'Katalognr',
            determination: {
                confidence: 'Osäkerhet',
                method: 'Metod',
                determiner: 'Bestämmare',
                'determined-date': 'Datum(åååå-mm-dd)',
                'type-status': 'Typstatus',
                add: 'Lägg till bestämning'
            },
            accession: 'Accession',
            preparation: {
                'preparation-type': 'Preparationstyp',
                count: 'Antal',
                'life-stage': 'Livsstadium',
                age: 'Ålder',
                sex: 'Kön',
                measurements: 'Mätningar',
                condition: 'Kondition',
                part: 'Del',
                status: 'Status',
                storage: 'Placering',
                number: 'Preparationsnr',
                add: 'Lägg till del/preparation'
            },
            'collecting-event': {
                'start-date': 'Insamlingsdatum(åååå-mm-dd)',
                method: 'Insamlingsmetod',
                'verbatim-locality': 'Verbatim lokal',
                'verbatim-collector': 'Insamlare',
                'max-elevation': 'Nivå ö hav',
                'min-elevation': 'Nivå u hav',
                'select-existing': 'Sök/välj sparat insamlingstillfällen',
                name: 'Namnge tillfälle'
            }
        },
        placeholder: {
            'date-format': 'T.ex. 1985-05-08'
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
    },
    beta: {
        header: 'Samlingshanteraren beta',
        intro: ' är en testsida för att utvärdera nya samlingshanteraren. Sidan kommer löpande att uppdateras med nya funktioner och buggfixar baserat på den interna prioriteringen och feedback.',
        information: {
            header: 'Information',
            body: {
                1: 'Sidan kommer alltid att vara uppdaterad med den senast tillgängliga versionen och en lista över förändingar.',
                2: 'För att komma till formuläret klicka på <i>Samlingsföremål</i> och välj <i>Registrera föremål</i>'
            }
        },
        feedback: {
            body: 'Har du förslag på förbättringar eller hittar något som inte fungerar? Fyll då gärna i feedback-formuläret.',
            header: 'Feedback',
            button: 'Lämna feedback'
        },
        sprint: {
            header: 'Nuvarande sprint',
            body: 'Sprinten som pågår just nu kommer att fokusera på Insamlingstillfälle, Fyndplatser, Inloggning med riktiga användare och riktig testdata.'
        },
        changes: {
            header: 'Förändringar',
            1: {
                body: `
                    <li>Uppdaterad visningssida för sparade föremål.</li>
                    <li>Språkval sparas och aktiveras automatiskt när man kommer till sidan.</li>
                    <li>Möjligt att logga in som olika användare(klicka logga in och sök på efternamn).</li>
                    <li>Uppdaterad startsida med information om testsidan.</li>
                    <li>Grundformulär med basfunktioner för att registrera ett nytt förmål.</li>
                `,
                date: '2016-03-07'
            },
            2: {
                body: `
                    <span class="label label-success">Ny funktionalitet</span>
                    <li>Sök efter fyndplats, insamlingstillfälle och geografi visar nu mer information.</li>
                    <li>Hitta och välj fyndplats på karta.</li>
                    <li>Möjligt att skapa ny fyndplats.</li>
                    <li>Öppna och stäng box genom att klicka på rubrikraden.</li>
                    <li>Startsidan översatt till engelska.</li>
                    <li>Preparationstyp filtereras på vald samling.</li>
                    <li>Uppdaterat utseende för verbatimfält.</li>
                    <li>Förhindra val av datum i framtiden för bestämningar och insamlingstillfällen.</li>
                    <br><span class="label label-danger">Buggfixar</span>
                    <li>"Sök och välj"-fält hänger kvar och ligger över annat innehåll.</li>
                    <li>Insamlare ska stängas och rensas efter att en insamlare är vald.</li>
                `,
                date: '2016-03-22'
            }
        }
    }
};
