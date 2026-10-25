const ideologiaData = [
  {
    id: "totalitarismo",
    concetto: "Totalitarismo",
    categoria: "struttura",
    definizione: "Il fascismo è la prima ideologia a rivendicare esplicitamente il carattere 'totalitario' dello Stato. Mussolini e Gentile coniarono il termine in senso positivo: lo Stato deve permeare ogni aspetto della vita individuale e collettiva. 'Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato.'",
    contesto: "Hannah Arendt (Le origini del totalitarismo, 1951) analizza il fascismo e il nazismo come forme storicamente nuove di dominio politico che vanno oltre la semplice dittatura: non basta l'obbedienza, occorre il consenso attivo.",
    citazione: "«Tutto nello Stato, niente al di fuori dello Stato, nulla contro lo Stato.» — Mussolini, 1925"
  },
  {
    id: "culto-duce",
    concetto: "Culto del Duce",
    categoria: "politica",
    definizione: "Il fascismo costruisce attorno a Mussolini un culto della personalità senza precedenti nella storia italiana. Il Duce è infallibile ('Mussolini ha sempre ragione'), onnipresente (fotografie, busti, scritte sui muri), incarnazione della nazione. La politica diventa spettacolo e rito collettivo.",
    contesto: "Simonetta Falasca-Zamponi (Fascist Spectacle, 1997) studia come il fascismo abbia trasformato la politica in estetica, anticipando la categoria benjaminiana dell'estetizzazione della politica.",
    citazione: "«Il fascismo è una religione. Il ventesimo secolo sarà il secolo del fascismo.» — Mussolini"
  },
  {
    id: "nazionalismo",
    concetto: "Nazionalismo e 'vittoria mutilata'",
    categoria: "origini",
    definizione: "Il fascismo nasce dalla rabbia nazionalista per la 'vittoria mutilata': nonostante la vittoria nella Grande Guerra, l'Italia non ottiene Fiume, la Dalmazia e le colonie promesse. Il mito della nazione offesa e tradita è il carburante emotivo del fascismo delle origini.",
    contesto: "Il termine 'vittoria mutilata' è di D'Annunzio. Il nazionalismo fascista è aggressivo e imperialista: vuole fare dell'Italia una grande potenza mediterranea ('Mare Nostrum').",
    citazione: "«Noi vogliamo fare dell'Italia una grande nazione.» — Mussolini, 1919"
  },
  {
    id: "corporativismo",
    concetto: "Corporativismo",
    categoria: "economia",
    definizione: "Il corporativismo è la 'terza via' fascista tra capitalismo liberale e socialismo: abolisce i sindacati e li sostituisce con corporazioni — associazioni 'dal sapore medievale' — che riuniscono padroni delle aziende e operai sotto la guida dello Stato. La contrattazione sindacale viene soppressa, gli scioperi aboliti. Il risultato è un sistema di controllo sociale: sebbene sia introdotto un contratto collettivo di lavoro, pochi controlli nelle industrie ne verificano l'applicazione. Nel 1939 la Camera dei fasci e delle corporazioni sostituisce la Camera dei Deputati: lo Stato si identifica col Partito.",
    contesto: "A questo punto i cittadini non disponevano di alcun mezzo per fare valere la propria volontà sullo Stato, mentre quest'ultimo aveva un controllo pressoché totale sulla cittadinanza. Il corporativismo è anche un sistema di corruzione e clientelismo — attitudine tipica dello Stato italiano post-unitario che il fascismo non elimina ma amplifica.",
    citazione: "«Lo Stato fascista è uno Stato corporativo.» — Carta del Lavoro, 1927"
  },
  {
    id: "doppio-binario",
    concetto: "Il doppio binario",
    categoria: "politica",
    definizione: "Dopo la Marcia su Roma Mussolini adottò una strategia duplice, nota come 'doppio binario': da un lato mostrava moderazione, formando un governo di coalizione con liberali, popolari e militari per ottenere il più largo consenso possibile; dall'altro lasciava che i radicali del PNF — come Farinacci — continuassero la pressione violenta e rivoluzionaria. Il discorso del bivacco (16 novembre 1922) è l'esempio più celebre: Mussolini dichiara di poter fare del Parlamento 'un bivacco di manipoli', ma di non averlo voluto fare 'almeno in questo primo tempo'. La precarietà esplicita della moderazione rassicurava al tempo stesso i moderati e gli intransigenti.",
    contesto: "Il doppio binario è la chiave interpretativa del periodo 1922-1925: Mussolini finge di muoversi nei limiti dello Stato liberale mentre lo svuota sistematicamente dall'interno. La svolta definitiva è il discorso del 3 gennaio 1925, dopo il delitto Matteotti.",
    citazione: "«Potevo fare di questa Aula sorda e grigia un bivacco di manipoli: potevo sprangare il Parlamento e costituire un Governo esclusivamente di fascisti. Potevo: ma non ho, almeno in questo primo tempo, voluto.» — Mussolini, 16 novembre 1922"
  },
  {
    id: "antisocialismo",
    concetto: "Antisocialismo e anticomunismo",
    categoria: "origini",
    definizione: "Il fascismo nasce come risposta violenta al 'pericolo rosso': le agitazioni operaie e contadine del Biennio Rosso (1919-1920) spaventano i ceti proprietari. Le squadre fasciste vengono finanziate da agrari e industriali per distruggere il movimento operaio organizzato.",
    contesto: "La classe dirigente liberale e la borghesia vedono nel fascismo uno strumento per restaurare l'ordine, senza immaginare che il fascismo avrebbe poi travolto anche le istituzioni liberali.",
    citazione: "«Il fascismo è stato la risposta al pericolo bolscevico.» — interpretazione degli apologeti del fascismo, smentita dalla storiografia moderna"
  },
  {
    id: "imperialismo",
    concetto: "Imperialismo e mito di Roma",
    categoria: "ideologia",
    definizione: "Il fascismo si pone come erede dell'Impero Romano: Roma è il modello di grandezza a cui l'Italia deve tornare. L'imperialismo fascista mira a creare un 'impero' nel Mediterraneo e in Africa. La conquista dell'Etiopia (1936) e la proclamazione dell'Impero sono il culmine di questa ideologia.",
    contesto: "Il mito di Roma è onnipresente: nell'architettura (EUR, via dell'Impero), nei simboli (fascio littorio, aquila), nei rituali. L'archeologia viene usata a fini propagandistici (demolizioni nel centro di Roma per 'liberare' i monumenti antichi).",
    citazione: "«Roma è il nostro punto di partenza e di riferimento; è il nostro simbolo o, se si vuole, il nostro mito.» — Mussolini"
  },
  {
    id: "antisemitismo",
    concetto: "Razzismo e antisemitismo",
    categoria: "repressione",
    definizione: "Il razzismo non è una componente originaria del fascismo italiano (a differenza del nazismo): molti ebrei italiani sono stati fascisti convinti. Le leggi razziali del 1938 arrivano sotto influenza nazista. Il 'Manifesto della razza' (luglio 1938) afferma la superiorità della razza italiana e l'estraneità degli ebrei alla nazione.",
    contesto: "Le leggi razziali del 1938 colpiscono circa 47.000 ebrei italiani: espulsi dalle scuole, dalle professioni, dall'esercito, impossibilitati a sposare 'ariani'. Con l'occupazione tedesca del 1943-45 iniziano le deportazioni.",
    citazione: "«Gli ebrei non appartengono alla razza italiana.» — Manifesto della razza, 1938"
  },
  {
    id: "consenso",
    concetto: "Consenso e costruzione del consenso",
    categoria: "politica",
    definizione: "Il fascismo non si regge solo sulla violenza: costruisce attivamente il consenso attraverso l'Opera Nazionale Dopolavoro (attività ricreative per i lavoratori), la gioventù fascista (Opera Nazionale Balilla, GIL), la scuola, la radio, il cinema (LUCE), lo sport. Il regime vuole creare un 'uomo nuovo' fascista.",
    contesto: "Renzo De Felice (Mussolini il duce, 1974) sostiene che il regime raggiunse un consenso di massa reale, specie negli anni Trenta. La tesi è controversa ma ha aperto un dibattito storiografico fondamentale.",
    citazione: "«Non è il consenso che fa la forza del fascismo, ma la forza che crea il consenso.» — provocazione storiografica"
  },
  {
    id: "violenza",
    concetto: "Violenza come strumento politico",
    categoria: "struttura",
    definizione: "La violenza non è un eccesso o una degenerazione del fascismo: è uno strumento politico costitutivo. Lo squadrismo degli anni 1919-1922 distrugge fisicamente il movimento operaio organizzato. Il Tribunale Speciale condanna gli oppositori. L'OVRA sorveglia e perseguita chiunque. La violenza fascista è sistematica e pianificata.",
    contesto: "Hannah Arendt e George Mosse analizzano la violenza fascista non come patologia ma come elemento strutturale di un'ideologia che esalta l'azione, la forza, il combattimento come valori in sé.",
    citazione: "«La violenza non è immorale, anzi in certi momenti storici è altamente morale.» — Mussolini, 1921"
  }
];
