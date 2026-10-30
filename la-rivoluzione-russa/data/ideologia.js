/* data/ideologia.js — La Rivoluzione Russa */
const IDEOLOGIA = [
  {
    id: 'i01',
    cat: 'Marxismo',
    icona: '⚙',
    titolo: 'Materialismo Storico',
    preview: 'La storia come lotta di classe determinata dai rapporti di produzione.',
    def: 'Marx ed Engels teorizzarono che la storia umana è la storia della lotta tra classi sociali. I rapporti di produzione — chi possiede i mezzi di produzione e chi è costretto a vendere il proprio lavoro — determinano la struttura politica, giuridica e culturale di ogni società (la "sovrastruttura"). Il capitalismo, basato sullo sfruttamento del lavoro salariato e sulla produzione di plusvalore, porta inevitabilmente alla propria crisi per le sue contraddizioni interne. Il proletariato è destinato a rovesciarlo.',
    contesto: 'In Russia il marxismo giunse attraverso Plechanov negli anni \'80 dell\'800. Il problema teorico principale era: una Russia ancora prevalentemente agraria e preindustriale era "matura" per la rivoluzione socialista? I populisti (narodniki) sostenevano che la comunità contadina (obščina) potesse essere la base di un socialismo russo originale, senza passare per il capitalismo industriale.',
    citazione: '"La storia di tutte le società finora esistite è storia di lotte di classe." — Marx, Manifesto del Partito Comunista, 1848'
  },
  {
    id: 'i02',
    cat: 'Leninismo',
    icona: '✶',
    titolo: 'Il Partito di Avanguardia',
    preview: 'Un partito di professionisti della rivoluzione come guida del proletariato.',
    def: 'Nel Che fare? (1902), Lenin sostenne che il proletariato, lasciato a sé stesso, sviluppa soltanto una "coscienza sindacale" (rivendicazioni salariali), non una coscienza rivoluzionaria. È necessario un partito di "professionisti della rivoluzione" — disciplinato, centralizzato, clandestino — che porti la coscienza socialista alle masse dall\'esterno. Il principio organizzativo è il "centralismo democratico": libera discussione, poi obbedienza unanime alla decisione presa dalla maggioranza.',
    contesto: 'La questione del partito divise i socialdemocratici russi nel 1903 (II Congresso a Bruxelles-Londra): i bolscevichi (maggioritari, bol\'šinstvo) seguirono Lenin; i menscevichi (minoritari, men\'šinstvo) preferivano un partito di massa più aperto. La scissione si rivelò definitiva e insanabile.',
    citazione: '"Dateci un\'organizzazione di rivoluzionari e sovvertiremo la Russia." — Lenin, Che fare?, 1902'
  },
  {
    id: 'i03',
    cat: 'Leninismo',
    icona: '★',
    titolo: 'L\'Imperialismo e la Guerra',
    preview: 'La guerra imperialista come prodotto del capitalismo in fase monopolistica.',
    def: 'In L\'Imperialismo, fase suprema del capitalismo (1916), Lenin analizzò la Prima Guerra Mondiale come conflitto tra potenze capitaliste per la spartizione del mondo. Il capitalismo, nella sua fase monopolistica (fusione di capitale bancario e industriale in "capitale finanziario"), è costretto a esportare capitali nelle colonie, generando rivalità imperiali e guerre. La soluzione non era difendere la propria nazione, ma trasformare la guerra imperialista in guerra civile rivoluzionaria.',
    contesto: 'La posizione di Lenin sulla guerra isolò i bolscevichi dai socialdemocratici europei che avevano votato i crediti di guerra nel 1914. L\'Internazionale Socialista (II Internazionale) si spaccò: "difensisti" vs. internazionalisti. Lenin fondò poi la III Internazionale (Comintern, 1919).',
    citazione: '"L\'imperialismo è il capitalismo giunto a quel grado di sviluppo in cui si è affermata la dominazione dei monopoli." — Lenin, 1916'
  },
  {
    id: 'i04',
    cat: 'Bolscevismo',
    icona: '☭',
    titolo: 'Dittatura del Proletariato',
    preview: 'Il potere sovietico come forma transitoria verso il comunismo.',
    def: 'Lenin riprendeva da Marx il concetto di "dittatura del proletariato": dopo la rivoluzione, la classe operaia deve esercitare il potere politico per sopprimere la resistenza della borghesia e costruire le basi del socialismo. In Russia questa dittatura prese la forma del potere sovietico — i Soviet (consigli) di operai, soldati e contadini come nuova forma di Stato — controllata e guidata dal Partito Comunista (nome adottato nel 1918). Lo Stato si sarebbe progressivamente "estinto" con l\'avvento del comunismo.',
    contesto: 'Nella pratica, la "dittatura del proletariato" divenne rapidamente dittatura del Partito Comunista, e poi del suo Comitato Centrale e Politburo. La violenta repressione delle opposizioni interne (menscevichi, SR, anarchici) avvenne già prima del 1921, ben prima della deriva staliniana.',
    citazione: '"I Soviet sono la forma statale della dittatura del proletariato." — Lenin'
  },
  {
    id: 'i05',
    cat: 'Menscevismo',
    icona: '⚖',
    titolo: 'Via Graduala al Socialismo',
    preview: 'Il socialismo come esito di un processo democratico e storicamente maturo.',
    def: 'I menscevichi (Martov, Plechanov, Dan, Tsereteli) sostenevano che la Russia dovesse prima completare la sua rivoluzione "borghese-democratica" — sviluppo capitalista, costituzione liberale, democrazia parlamentare — prima di poter aspirare al socialismo. Un\'alleanza con i partiti liberal-democratici era necessaria nella fase transitoria. Si opponevano al governo di minoranza bolscevico come "avventurismo" e cercarono di partecipare al Governo Provvisorio.',
    contesto: 'Dopo la Rivoluzione d\'Ottobre i menscevichi furono progressivamente marginalizzati e poi repressi. Molti emigrarono. Il menscevismo fu liquidato non dalla discussione ideologica ma dalla forza. Nel 1921 il partito fu sciolto. La storia del menscevismo pone una domanda ancora aperta: era possibile una via democratica al socialismo in Russia?',
    citazione: null
  },
  {
    id: 'i06',
    cat: 'Socialismo Rivoluzionario',
    icona: '🌾',
    titolo: 'Il Contadino come Soggetto Rivoluzionario',
    preview: 'Il contadino, non solo l\'operaio, come forza motrice della rivoluzione russa.',
    def: 'Il Partito Socialista Rivoluzionario (SR), fondato nel 1901, rielaborò il populismo russo in chiave socialista. A differenza dei marxisti ortodossi, i SR vedevano nel contadino (e non solo nell\'operaio industriale) un soggetto rivoluzionario centrale. Proponevano la "socializzazione della terra" — non nazionalizzazione statale, ma gestione comunitaria tramite le comunità contadine. Erano il partito più votato in Russia nel 1917.',
    contesto: 'Il Decreto sulla Terra dei bolscevichi (ottobre 1917) recepì di fatto il programma agrario degli SR, non quello marxista originale. I bolscevichi lo sapevano: fu una mossa tattica per conquistare i contadini. L\'ala sinistra degli SR (SR di Sinistra) collaborò inizialmente col governo bolscevico; dopo Brest-Litovsk e l\'assassinio dell\'ambasciatore tedesco Mirbach (luglio 1918) fu repressa.',
    citazione: null
  },
  {
    id: 'i07',
    cat: 'Anarchismo',
    icona: '⊗',
    titolo: 'Né Zar né Commissari',
    preview: 'L\'abolizione immediata di ogni Stato: contro zarismo e bolscevismo.',
    def: 'Gli anarchici russi — nella tradizione di Bakunin e Kropotkin — si opposero sia allo zarismo sia al bolscevismo, vedendo in entrambi forme di autoritarismo statale. L\'obiettivo era l\'abolizione immediata di ogni Stato e la costruzione di comunità libere e autogestite. Il movimento di Machno in Ucraina (1918-1921) fu la più significativa realizzazione pratica: organizzò un territorio con milioni di persone secondo principi di autogestione contadina, libere elezioni locali e libertà di stampa.',
    contesto: 'La rivolta di Kronstadt del 1921 è considerata da molti anarchici e socialisti libertari il momento in cui i bolscevichi tradirono definitivamente la rivoluzione. I marinai di Kronstadt, già eroi di Ottobre, chiedevano ciò che gli anarchici predicavano: libertà politica senza la dittatura del partito.',
    citazione: '"Lo Stato è la negazione della vita." — Michail Bakunin'
  },
  {
    id: 'i08',
    cat: 'Trotskismo',
    icona: '↔',
    titolo: 'Rivoluzione Permanente',
    preview: 'La rivoluzione non può fermarsi ai confini nazionali né alla fase democratica.',
    def: 'Trotsky teorizzò che in paesi a "sviluppo combinato e ineguale" come la Russia, la borghesia era troppo debole e dipendente dallo Stato zarista per portare a termine la propria rivoluzione democratica. Il proletariato, alleato ai contadini, avrebbe dovuto compiere sia la rivoluzione democratica sia quella socialista in un processo continuo ("permanente"). Ma la rivoluzione russa non poteva sopravvivere in isolamento: doveva propagarsi all\'Europa, soprattutto alla Germania industriale.',
    contesto: 'La teoria contrapposta di Stalin — "socialismo in un solo paese" — prevalse dopo la morte di Lenin. La mancata rivoluzione in Germania (1919, 1923) indebolì enormemente la posizione di Trotsky. La sua teoria divenne il nucleo dell\'opposizione di sinistra al regime staliniano.',
    citazione: '"La rivoluzione permanente non è una \"grande svolta\" ma un processo di sviluppo continuo della lotta di classe." — Trotsky'
  }
];
