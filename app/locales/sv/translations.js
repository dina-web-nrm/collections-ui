export default {
    blank: '',
    definitions: {
        abort: 'Avbryt',
        continue: 'Fortsätt',
        name: 'Namn',
        accession: 'Accession',
        male: 'Hane',
        female: 'Hona',
        unknown: 'Okänt',
        date: 'Datum',
        'date-descriptive': 'Datum(åååå-mm-dd)',
        user: 'Användare',
        username: 'Användarnamn',
        password: 'Lösenord',
        usernameOrPassword: 'Användarnamn eller lösenord',
        'sign-out': 'Logga ut',
        'sign-in': 'Logga in',
        'signing-in': 'Loggar in',
        map: 'Karta',
        count: 'st',
        next: 'Nästa',
        previous: 'Föregående',
        use: 'Använd',
        'type-to-search': 'Skriv för att söka',
        'collecting-place': {
            one: 'Fyndplats',
            other: 'Fyndplatser',
        },
        'no-result': 'Inget resultat',
        geography: 'Geografi',
        coordinates: 'Koordinater',
        longitude: 'Longitud',
        latitude: 'Latitud',
        type: {
            'geology': 'Geologi',
            'zoology-mammals': 'Zoologi, Däggdjur',
            'zoology-invertebrate': 'Zoologi, Ev/Fisk/Herp',
            'zoology-entomology': 'Zoologi, Entomologi',
            'paleontology': 'Paleontologi',
            'botany': 'Botanik',
        },
        'comment-field': 'Kommentarsfält externt',
        'verbatim-field': 'Verbatimfält',
        'comment-field-private': 'Kommentarsfält internt',
        'add-comment': 'Lägg till kommentar/etikett',
    },
    main: {
        application_name: 'Samlingshanteraren',
        welcome: 'Välkommen till Samlingshanteraren!',
        error: 'Ett fel uppstod, försök igen eller gå till startsidan.',
        'validation-message': {
            save: 'Det gick inte att spara',
        },
    },
    navigation: {
        start: 'Start',
        'collections': 'Samlingar',
        'collection_object.root': 'Samlingsföremål',
        'collection_object.add': 'Registrera föremål',
        'collection_object.list': 'Lista',
        'collection.root': 'Samlingar',
        'collection.list': 'Lista',
        'search.button': 'Sök',
        'search.input': 'Sök på art/ID',
    },
    component: {
        'attachments-list': {
            'remove': {
                'title': 'Ta bort fält',
                'body': 'Du håller på att ta bort ett extrafält. Vill du fortsätta?',
            },
        },
        'autocomplete-input.previous-selection': 'Tidigare val',
        'locality-selector': {
            'to-many-results': 'För många fyndplatser. Välj ett mindre område.',
            'search-geography': 'Sök på ort, område, land',
            'created-by': 'Skapad {{date}} av {{name}}',
            'select-existing': 'Sök/välj sparad fyndplats',
            'new-locality': 'Ny fyndplats',
            'locality-name': 'Fyndplats/lokalnamn',
            'show-map': 'Välj från karta',
            'hide-map': 'Dölj karta',
            'uncertainty-radius': 'Osäkerhetsradie(m)',
            'verbatim-longitude': 'Verbatim longitud',
            'verbatim-latitude': 'Verbatim latitud',
            'create-new': 'Skapa ny fyndplats',
            'center-map': 'Centrera på karta',
            'max-elevation': 'Höjd över hav',
            'min-elevation': 'Höjd under hav',
        },
        'locality': {
            'lithostrat': 'Litostratigrafi',
            'chronostrat': 'Kronostratigrafi',
        },
        'preparation': {
            'object-type': 'Objektskategori',
            'preservation-stage': 'Fossilt bevaringstillstånd',
            'individuals-count': 'Antal individer',
            'object-description': 'Beskrivning av objekt',
        },
        'pick-list': {
            'no-values': 'Inga värden för vald samling',
            'pick': 'Välj ett värde',
        },
        'autocomplete-input': {
            'dropdown': {
                'subset': 'Förfina din sökning för att se en mer komplett lista.',
            },
            'inline': {
                'subset-danger': 'Visar {{max}} av <span class="subset-danger">{{count}}</span>',
            },
        },
        'collecting-event': {
            'create-new': 'Skapa nytt insamlingstillfälle',
            'start-date': 'Startdatum(åååå-mm-dd)',
            'end-date': 'Slutdatum(åååå-mm-dd)',
            'habitat-substrate': 'Habitat/Substrat, enligt etikett',
            'botany-description': 'Beskrivning av föremål, enligt etikett',
            'collecting-circumstance': 'Fyndomständighet',
            'verbatim-date': 'Verbatim datum',
            'given-name': 'Angivet namn',
        },
        'single-determination': {
            'verbatim-taxon': 'Verbatim bestämning',
            'remove': {
                'body': 'Du håller på att ta bort en bestämning. Vill du fortsätta?',
                'title': 'Ta bort bestämning',
            },
        },
        'single-preparation': {
            'remove': {
                'body': 'Du håller på att ta bort en en preparation. Vill du fortsätta?',
                'title': 'Ta bort preparation',
            },
        },
    },
    collectionobject: {
        list: {
            header: 'Lista och sök efter samlingsföremål',
        },
        new: {
            title: 'Nytt {{name}} föremål',
            type: {
                'geology': 'geologiskt',
                'zoology-mammals': 'zoologiskt',
                'zoology-invertebrate': 'zoologiskt',
                'zoology-entomology': 'zoologiskt',
                'paleontology': 'paleontologiskt',
                'botany': 'botaniskt',
            },
            toolbar: {
                save: 'Spara',
                saving: 'Sparar',
                print: 'Skriv ut etikett',
                close: 'Stäng',
                duplicate: 'Duplicera',
            },
        },
    },
    collection: {
        list: {
            header: 'Lista och sök efter samlingar',
        },
    },
    'form-component-basic-data': 'Grunddata',
    'form-component-determination': 'Taxonomi/Bestämning',
    'form-component-collecting-event': 'Insamling/Fyndplats',
    'form-component-preparation': 'Objekt/Preparationer',
    'form-component-type-status': 'Typstatus',
    'form-component-other': 'Övrigt',
    fields: {
        labels: {
            cataloger: 'Registrerad av',
            collector: 'Insamlare',
            collecting_place: 'Fyndplats(lokal)',
            collecting_event: 'Insamlingstillfälle',
            collection: 'Samling/delsamling',
            collection_code: 'Samlingskod',
            catalogNumber: 'Katalognr',
            determination: {
                confidence: 'Osäkerhet',
                method: 'Metod',
                determiner: 'Bestämmare',
                'determined-date': 'Bestämningsdatum',
                'type-status': 'Typstatus',
                add: 'Lägg till bestämning',
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
                add: 'Lägg till del/preparation',
            },
            'collecting-event': {
                'start-date': {
                    label: 'Insamlingsdatum(åååå-mm-dd)',
                    name: 'Insamlingsstart',
                },
                'end-date': {
                    name: 'Insamlingsslut',
                },
                method: 'Insamlingsmetod',
                'verbatim-locality': 'Verbatim lokal',
                'verbatim-collector': 'Insamlare',
                'max-elevation': 'Nivå ö hav',
                'min-elevation': 'Nivå u hav',
                'select-existing': 'Sök/välj sparat insamlingstillfällen',
                name: 'Namnge tillfälle',
                number: 'Insamlingsnummer',
            },
        },
        placeholder: {
            'date-format': 'T.ex. 1985-05-08',
        },
    },
    errors: {
        description: 'Fältet',
        inclusion: '{{description}} finns inte med i listan',
        exclusion: '{{description}} är ett reserverat ord',
        invalid: '{{description}} är inte giltigt',
        confirmation: '{{description}} matchar inte {{on}}',
        accepted: '{{description}} måste accepteras',
        empty: '{{description}} kan inte vara tomt',
        blank: '{{description}} måste vara angivet',
        present: '{{description}} måste vara tomt',
        collection: '{{description}} måste vara en lista',
        singular: '{{description}} kan inte vara en lista',
        tooLong: '{{description}} är för långt (max är {{max}} tecken)',
        tooShort: '{{description}} är för kort (minimum är {{min}} tecken)',
        before: '{{description}} måste vara före {{before}}',
        after: '{{description}} måste vara efter {{after}}',
        wrongDateFormat: '{{description}} måste ha formatet {{format}}',
        wrongLength: '{{description}} har fel längd (ska ha {{is}} tecken)',
        notANumber: '{{description}} måste vara ett nummer',
        notAnInteger: '{{description}} måste vara ett heltal',
        greaterThan: '{{description}} måste vara större än {{gt}}',
        greaterThanOrEqualTo: '{{description}} måste vara större eller lika med {{gte}}',
        equalTo: '{{description}} måste vara lika med {{is}}',
        lessThan: '{{description}} måste vara mindre än {{lt}}',
        lessThanOrEqualTo: '{{description}} måste vara mindre eller lika med {{lte}}',
        otherThan: '{{description}} får inte vara {{value}}',
        odd: '{{description}} måste vara udda',
        even: '{{description}} måste vara jämt',
        positive: '{{description}} måste vara positivt',
        date: '{{description}} måste vara ett giltigt datum',
        email: '{{description}} måste vara en giltig e-postadress',
        phone: '{{description}} måste vara ett giltigt telefonnummer',
        url: '{{description}} måste vara en giltig url',
        unique: '{{description}} måste vara unik',
    },
    beta: {
        header: 'Samlingshanteraren beta',
        intro: ' är en testsida för att utvärdera nya samlingshanteraren. Sidan kommer löpande att uppdateras med nya funktioner och buggfixar baserat på den interna prioriteringen och feedback.',
        information: {
            header: 'Information',
            body: {
                1: 'Sidan kommer alltid att vara uppdaterad med den senast tillgängliga versionen och en lista över förändingar.',
                2: 'För att komma till formuläret klicka på <i>Samlingsföremål</i> och välj <i>Registrera föremål</i>',
            },
        },
        feedback: {
            body: `
                Har du förslag på förbättringar eller hittar något som inte fungerar?
                Fyll då gärna i feedback-formuläret. Feedback som lämnas finns <a target='_blank' href='https://trello.com/b/GCfLYqt1/cm-feedback'>tillgänglig att se på Trello</a>.
            `,
            header: 'Feedback',
            button: 'Lämna feedback',
            'sign-in': 'Logga in för att lämna feedback.',
        },
        sprint: {
            header: 'Nuvarande sprint',
            body: 'Fokus i nuvarande sprint ligger på extrafält för Insamlingstillfälle och Fyndplats samt uppsamling av mindre buggar/fixar som har kommit in som feedback.',
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
                date: '2016-03-07',
            },
            2: {
                body: `
                    <span class='label label-success'>Ny funktionalitet</span>
                    <li>Sök efter fyndplats, insamlingstillfälle och geografi visar nu mer information.</li>
                    <li>Hitta och välj fyndplats på karta.</li>
                    <li>Möjligt att skapa ny fyndplats.</li>
                    <li>Öppna och stäng box genom att klicka på rubrikraden.</li>
                    <li>Startsidan översatt till engelska.</li>
                    <li>Preparationstyp filtereras på vald samling.</li>
                    <li>Uppdaterat utseende för verbatimfält.</li>
                    <li>Förhindra val av datum i framtiden för bestämningar och insamlingstillfällen.</li>
                    <br><span class='label label-danger'>Buggfixar</span>
                    <li>'Sök och välj'-fält hänger kvar och ligger över annat innehåll.</li>
                    <li>Insamlare ska stängas och rensas efter att en insamlare är vald.</li>
                `,
                date: '2016-03-22',
            },
            3: {
                body: `
                    <span class='label label-success'>Ny funktionalitet</span>
                    <li>Mer avancerad sökning för insamlingstillfälle, fyndplats och geografi.<br>Möjligt att söka på datum, insamlare, fyndplats, geografi och angivet namn.</li>
                    <li>Påbörjad anpassning av formulär baserat på enhet.<br>Ordning på boxar samt innehåll i bestämning, objekt/preparation och insamlingstillfälle är nu baserat på enhet. Använd menyn upp till höger i formuläret för att ändra enhet.</li>
                    <li>Uppdaterad testdata på testsidan.</li>
                    <li>Omvänd ordning på listsidan.</li>

                    <br><span class='label label-danger'>Buggfixar</span>
                    <li>'Sök och välj'-listor hamnar under bottenmenyn.</li>
                    <li>Visa hela geografin i söknigar och efter val.</li>
                    <li>Geografisök innehåller många dubletter.</li>
                    <li>Möjligt att klicka flera gånger på spara-knappen.</li>
                `,
                date: '2016-04-01',
            },
            4: {
                body: `
                    <span class='label label-success'>Ny funktionalitet</span>
                    <li>Visa att det finns fler resultat i 'Sök och välj'-listor.</li>
                    <li>Visa fler resultat som standard i 'Sök och välj'-listor.</li>
                    <li>Centrera resultat automatiskt i 'Sök och välj'-listor.</li>
                    <li>Nya datumfält med validering.<br>Möjligt att ange bara År, År+Månad eller År+Månad+Dag.</li>
                    <li>Validera att katalognummer inte redan finns.</li>
                    <li>Uppdaterat utseende på verbatimfält.</li>
                    <li>Verbatimfält för koordinater.</li>
                    <li>Validera fyndplatsnamn och visa varning om det saknas.</li>
                    <li>Möjligt att specificera osäkerhet för nya fyndplatser.</li>
                    <li>Knapp för att centrera kartan över angiven koordinat.</li>
                    <li>Börjat lägga till samlingsspecifika värdelistor.</li>

                    <li>
                        <strong>Botanik:</strong> Lagt till 'Habitat/Substrat' och 'Beskrivning av föremål vid insamling'.
                    </li>
                    <li>
                        <strong>Entomologi:</strong> Lagt till 'Höjd över/under hav'.
                    </li>
                    <li>
                        <strong>Däggdjur:</strong> Lagt till 'Fyndomständighet'.
                    </li>

                    <br><span class='label label-danger'>Buggfixar</span>
                    <li>Öppna och stäng box genom att klicka på rubrikraden sker oavsiktligt.</li>
                    <li>'Välj på karta' felplacerad i vissa webbläsare.</li>
                    <li>Uppdaterat 'Skapa ny/nytt' och 'Sök'-texter.</li>
                `,
                date: '2016-04-15',
            },
            5: {
                body: `
                    <span class='label label-success'>Ny funktionalitet</span>
                    <li>Inloggning<br>
                        För att lista och skapa nya föremål krävs nu att man är inloggad.
                    </li>
                    <li>Möjligt att lägga till Kommentarsfält och etikettsfält på Insamlingstillfälle och Objekt/Preparationer.</li>
                    <li>Visa geografityp i 'Sök och välj'-listor(typen ej översatt).</li>
                    <li>Visa skala i kartvyer.</li>
                    <li>Mer validering på fält som har begränsningar.</li>
                    <li>Visa enhetsspecifik information efter val i 'Sök och välj'-listor.</li>
                    <li>Standardvy för kartor är nu hela världen.</li>
                    <li>Bekräfta borttagning av preparation, bestämning och extrafält.</li>
                    <li>
                        <strong>Geologi:</strong> Lagt till 'Litostratigrafi' och 'Kronostratigrafi' när man skapar fyndplats.
                    </li>

                    <br><span class='label label-danger'>Buggfixar</span>
                    <li>Långa geografinamn klipps av.</li>
                    <li>Går inte att välja ett redan valt objekt i 'Sök och välj'-listor.</li>
                    <li>Uppdaterad stil på verbatimfält.</li>
                    <li>Möjligt att fylla i felaktiga dagar och månader.</li>
                    <li>Val av geografi med koordinater uppdaterade inte alltid kartan.</li>
                    <li>Hover över fynplatser i kartan blir inte markerade i listvyn.</li>
                `,
                date: '2016-05-18',
            },
            6: {
                body: `
                    <span class='label label-success'>Ny funktionalitet</span>
                    <li>Privata kommentarer<br>
                        Möjligt att lägga till privata kommentarer.
                    </li>
                    <li>Begränsa antalet kommentarer till en av varje typ(Privat, Vanlig, Verbatim)</li>
                    <li>Visa senaste använda samlingar i "Sök och välj" för samling.</li>
                    <li>Visa laddningsinkdikator när man söker i "Sök och välj"-listor.</li>
                    <li>Fler kartvyer<br>
                        Möjligt att ändra vy i kartor till "Outdoor", "Satelite" eller "Open Street Maps"
                    </li>
                    <li>
                        <strong>Entomologi:</strong> Lagt till "Beskrivning av objekt" till Objekt/Preparationer.
                    </li>
                    <li>
                        <strong>Entomologi:</strong> "Skapa nytt insamlingstillfälle" som standard.
                    </li>
                    <li>
                        <strong>Entomologi:</strong> Tagit bort "Antal del" från Objekt/Preparationer.
                    </li>
                    <li>
                        <strong>Entomologi:</strong> Ersatt "Metod" med "Osäkerhet" i Taxonomi/Bestämning.
                    </li>
                    <li>
                        <strong>Botanik:</strong> "Habitat/Substrat" och "Beskrivning av föremål vid insamling" ska vara verbatimfält.
                    </li>
                    <li>
                        <strong>Botanik:</strong> "Habitat/Substrat" och "Beskrivning av föremål vid insamling" ska vara placerade tidigare.
                    </li>
                    <li>
                        <strong>Botanik:</strong> "Skapa ny fyndplats" som standard.
                    </li>
                    <br><span class='label label-danger'>Buggfixar</span>
                    <li>Kan inte söka efter lokal eller geografi med "ÄÖÅ" i namnet(endast Internet Explorer).</li>
                    <li>Kan inte tabba från "Sök och välj"-listor.</li>
                    <li>Reglage för osäkerhetsradie fungerar inte(endast Internet Explorer)</li>
                    <li>Reglage för osäkerhetsradie stödjer endast 2000m.</li>
                    <li>Koordinater har för många decimaler.</li>
                    <li>Ensiffriga siffror utan ledande nolla (0) är inte giltiga datum.</li>
                    <li>Datumvalidering fungerar inte när man använder pilknapparna.</li>
                    <li>Uppdaterat rubrik för "Verbatim bestämning".</li>
                    <li>Uppdaterat rubrik för "Verbatim datum".</li>
                    <li>"Antal individer" ska vara satt till ett (1) som standard.</li>
                    <li>"Ålder" ska vara textfält.</li>
                    <li>Osäkerhetsradie visas inte rätt i förhandsvisning av Insamlingstillfälle.</li>
                    <li>Går ej att söka efter "Angivet namn" när man söker efter Insamlingstillfälle.</li>
                    <li>"Lägg till bestämning" and "Lägg till del/preparation" går inte att tabba till.</li>
                `,
                date: '2016-06-03',
            },
            7: {
                body: `
                    <span class='label label-success'>Ny funktionalitet</span>
                    <li>Sök på både för- och efternamn i sökning efter bestämmare och insamlare.</li>
                    <li>Visa födelse- och dödsdatum i sökning efter bestämmare och insamlare.</li>
                    <br><span class='label label-danger'>Buggfixar</span>
                    <li>Bytt namn på kommentarer till "Interna" och "Externa".</li>
                    <li>
                        <strong>Botanik:</strong> Uppdaterat rubriker för "Beskrivning av föremål" samt "Habitat/Substrat".
                    </li>
                `,
                date: '2016-06-23',
            },
        },
    },
};
