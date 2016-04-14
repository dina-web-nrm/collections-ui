export default {
    blank: '',
    definitions: {
        name: "Namn",
        accession: "Accession",
        male: 'Hane',
        female: 'Hona',
        unknown: 'Okänt',
        date: 'Datum',
        'date-descriptive': 'Datum(åååå-mm-dd)',
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
            "geology": "Geologi",
            "zoology-mammals": "Zoologi, Däggdjur",
            "zoology-invertebrate": "Zoologi, Ev/Fisk/Herp",
            "zoology-entomology": "Zoologi, Entomologi",
            "paleontology": "Paleontologi",
            "botany": "Botanik"
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
            'search-geography': 'Sök på ort, område, land',
            'created-by': 'Skapad {{date}} av {{name}}',
            'select-existing': 'Sök/välj sparad fyndplats',
            'new-locality': 'Ny fyndplats',
            'locality-name': 'Fyndplats/lokalnamn',
            'show-map': 'Välj från karta',
            'hide-map': 'Dölj karta',
            'uncertainty-radius': 'Osäkerhetsradie',
            'verbatim-longitude': 'Verbatim longitud',
            'verbatim-latitude': 'Verbatim latitud',
            'create-new': 'Skapa ny fyndplats',
            'center-map': 'Centrera på karta',
            'max-elevation': 'Höjd över hav',
            'min-elevation': 'Höjd under hav'
        },
        'preparation': {
            'object-type': 'Objektskategori',
            'preservation-stage': 'Fossilt bevaringstillstånd',
            'individuals-count': 'Antal individer',
            'object-description': 'Beskrivning av objekt'
        },
        'pick-list': {
            'no-values': 'Inga värden för vald samling',
            'pick': 'Välj ett värde'
        },
        'autocomplete-input': {
            'dropdown': {
                'subset': 'Förfina din sökning för att se en mer komplett lista.'
            },
            'inline': {
                'subset-danger': 'Visar {{max}} av <span class="subset-danger">{{count}}</span>'
            }
        },
        'collecting-event': {
            'create-new': 'Skapa nytt insamlingstillfälle',
            'start-date': 'Startdatum(åååå-mm-dd)',
            'end-date': 'Slutdatum(åååå-mm-dd)',
            'habitat-substrate': 'Habitat/Substrat',
            'botany-description': 'Beskrivning av föremål vid insamling',
            'collecting-circumstance': 'Fyndomständighet'
        },
        'single-determination': {
            'verbatim-taxon': 'Taxonomi, bestämmare, datum'
        }
    },
    collectionobject: {
        list: {
            header: 'Lista och sök efter samlingsföremål'
        },
        new: {
            title: "Nytt {{name}} föremål",
            type: {
                "geology": "geologiskt",
                "zoology-mammals": "zoologiskt",
                "zoology-invertebrate": "zoologiskt",
                "zoology-entomology": "zoologiskt",
                "paleontology": "paleontologiskt",
                "botany": "botaniskt"
            },
            toolbar: {
                save: "Spara",
                saving: "Sparar",
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
    "form-component-type-status": 'Typstatus',
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
                'determined-date': 'Bestämningsdatum',
                'type-status': 'Typstatus',
                add: 'Lägg till bestämning'
            },
            accession: 'Accession',
            preparation: {
                'preparation-type': 'Preparationstyp',
                count: 'Antal del',
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
                'start-date': {
                    label: 'Insamlingsdatum(åååå-mm-dd)',
                    name: 'Insamlingsstart'
                },
                'end-date': {
                    name: 'Insamlingsslut'
                },
                method: 'Insamlingsmetod',
                'verbatim-locality': 'Verbatim lokal',
                'verbatim-collector': 'Insamlare',
                'max-elevation': 'Nivå ö hav',
                'min-elevation': 'Nivå u hav',
                'select-existing': 'Sök/välj sparat insamlingstillfällen',
                name: 'Namnge tillfälle',
                number: 'Insamlingsnummer'
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
        after: "{{description}} måste vara efter {{after}}",
        wrongDateFormat: "{{description}} måste ha formatet {{format}}",
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
            body: `
                Har du förslag på förbättringar eller hittar något som inte fungerar?
                Fyll då gärna i feedback-formuläret. Feedback som lämnas finns <a target="_blank" href="https://trello.com/b/GCfLYqt1/cm-feedback">tillgänglig att se på Trello</a>. 
            `,
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
            },
            3: {
                body: `
                    <span class="label label-success">Ny funktionalitet</span>
                    <li>Mer avancerad sökning för insamlingstillfälle, fyndplats och geografi.<br>Möjligt att söka på datum, insamlare, fyndplats, geografi och angivet namn.</li>
                    <li>Påbörjad anpassning av formulär baserat på enhet.<br>Ordning på boxar samt innehåll i bestämning, objekt/preparation och insamlingstillfälle är nu baserat på enhet. Använd menyn upp till höger i formuläret för att ändra enhet.</li>
                    <li>Uppdaterad testdata på testsidan.</li>
                    <li>Omvänd ordning på listsidan.</li>
                    
                    <br><span class="label label-danger">Buggfixar</span>
                    <li>"Sök och välj"-listor hamnar under bottenmenyn.</li>
                    <li>Visa hela geografin i söknigar och efter val.</li>
                    <li>Geografisök innehåller många dubletter.</li>
                    <li>Möjligt att klicka flera gånger på spara-knappen.</li>
                `,
                date: '2016-04-01'
            },
            4: {
                body: `
                    <span class="label label-success">Ny funktionalitet</span>
                    <li>Visa att det finns fler resultat i "Sök och välj"-listor.</li>
                    <li>Visa fler resultat som standard i "Sök och välj"-listor.</li>
                    <li>Centrera resultat automatiskt i "Sök och välj"-listor.</li>
                    <li>Nya datumfält med validering.<br>Möjligt att ange bara År, År+Månad eller År+Månad+Dag.</li>
                    <li>Validera att katalognummer inte redan finns.</li>
                    <li>Uppdaterat utseende på verbatimfält.</li>
                    <li>Verbatimfält för koordinater.</li>
                    <li>Validera fyndplatsnamn och visa varning om det saknas.</li>
                    <li>Möjligt att specificera osäkerhet för nya fyndplatser.</li>
                    <li>Knapp för att centrera kartan över angiven koordinat.</li>
                    <li>Börjat lägga till samlingsspecifika värdelistor.</li>

                    <li>
                        <strong>Botanik:</strong> Lagt till "Habitat/Substrat" och "Beskrivning av föremål vid insamling".
                    </li>
                    <li>
                        <strong>Entomologi:</strong> Lagt till "Höjd över/under hav".
                    </li>
                    <li>
                        <strong>Däggdjur:</strong> Lagt till "Fyndomständighet".
                    </li>

                    <br><span class="label label-danger">Buggfixar</span>
                    <li>Öppna och stäng box genom att klicka på rubrikraden sker oavsiktligt.</li>
                    <li>"Välj på karta" felplacerad i vissa webbläsare.</li>
                    <li>Uppdaterat "Skapa ny/nytt" och "Sök"-texter.</li>
                `,
                date: '2016-04-15'
            }
        }
    }
};
