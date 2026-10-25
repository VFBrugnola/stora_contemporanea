const luoghiData = [
  {
    id: "milano-sansepolcro",
    nome: "Milano – Piazza San Sepolcro",
    lat: 45.4626,
    lng: 9.1863,
    categoria: "origini",
    titolo: "Fondazione dei Fasci (1919)",
    descrizione: "Il 23 marzo 1919 Mussolini fonda i Fasci Italiani di Combattimento nel salone dell'Alleanza Industriale. Da qui nasce il movimento fascista."
  },
  {
    id: "addis-abeba",
    nome: "Addis Abeba (Etiopia)",
    lat: 9.0320,
    lng: 38.7469,
    categoria: "imperialismo",
    titolo: "Guerra d'Etiopia (1935-1936)",
    descrizione: "Senza dichiarazione di guerra, l'esercito italiano invase l'Etiopia nell'ottobre 1935. Il conflitto fu devastante per la disparità tecnologica: l'Italia perse ~4.000 uomini, l'Etiopia ~200.000 (50 volte tanto). L'uso dell'iprite — gas tossico — fu autorizzato da Mussolini e ordinato da Badoglio e Graziani, deliberatamente rivolto a civili, fonti idriche e bestiame. Il negus Hailé Selassié (1892-1975) fu costretto all'esilio in Inghilterra. L'Italia uscì dalla Società delle Nazioni nel 1937."
  },
  {
    id: "bologna-accursio",
    nome: "Bologna – Palazzo d'Accursio",
    lat: 44.4938,
    lng: 11.3426,
    categoria: "squadrismo",
    titolo: "Assalto a Palazzo d'Accursio (1920)",
    descrizione: "Il 21 novembre 1920, durante l'insediamento della nuova giunta socialista, squadristi fascisti assaltano Palazzo d'Accursio: 10 morti, decine di feriti. È uno degli episodi più violenti del biennio nero e testimonia la brutalità dello scontro tra fascismo e socialismo nel contado padano."
  },
  {
    id: "fiume",
    nome: "Fiume (Rijeka)",
    lat: 45.3271,
    lng: 14.4422,
    categoria: "origini",
    titolo: "Impresa di Fiume (1919-1920)",
    descrizione: "D'Annunzio occupa Fiume con i legionari. Il 'proto-fascismo' dannunziano crea il modello rituale, simbolico e organizzativo che Mussolini imiterà: camicie nere, saluto romano, arringhe dal balcone."
  },
  {
    id: "roma-quirinale",
    nome: "Roma – Quirinale",
    lat: 41.8997,
    lng: 12.4875,
    categoria: "regime",
    titolo: "Marcia su Roma (28 ottobre 1922)",
    descrizione: "Il re Vittorio Emanuele III rifiuta di firmare lo stato d'assedio e incarica Mussolini di formare il governo. La resa dello Stato liberale avviene senza combattimento."
  },
  {
    id: "roma-palazzo-venezia",
    nome: "Roma – Palazzo Venezia",
    lat: 41.8961,
    lng: 12.4823,
    categoria: "regime",
    titolo: "Balcone del Duce",
    descrizione: "Sede del governo fascista. Dal balcone di Palazzo Venezia Mussolini teneva i suoi discorsi alla folla radunata in piazza. Simbolo del culto del Duce e della politica come spettacolo."
  },
  {
    id: "roma-laterano",
    nome: "Roma – Palazzo del Laterano",
    lat: 41.8859,
    lng: 12.5058,
    categoria: "regime",
    titolo: "Patti Lateranensi (1929)",
    descrizione: "L'11 febbraio 1929 vengono firmati i Patti Lateranensi tra Stato italiano e Santa Sede. Il fascismo ottiene la legittimazione della Chiesa cattolica."
  },
  {
    id: "roma-eur",
    nome: "Roma – EUR",
    lat: 41.8315,
    lng: 12.4677,
    categoria: "architettura",
    titolo: "Esposizione Universale di Roma (1942)",
    descrizione: "Il quartiere EUR viene costruito per l'Esposizione Universale prevista per il 1942. L'architettura razionalista-fascista, con il Colosseo quadrato (Palazzo della Civiltà Italiana), celebra la grandezza imperiale di Roma."
  },
  {
    id: "brescia",
    nome: "Brescia",
    lat: 45.5416,
    lng: 10.2118,
    categoria: "squadrismo",
    titolo: "Squadrismo in Pianura Padana",
    descrizione: "La Pianura Padana è il cuore dello squadrismo fascista: le squadre d'azione distruggono cooperative, camere del lavoro, sedi socialiste e cattoliche tra il 1920 e il 1922. Brescia, Ferrara, Bologna sono i centri principali."
  },
  {
    id: "ferrara",
    nome: "Ferrara",
    lat: 44.8352,
    lng: 11.6198,
    categoria: "squadrismo",
    titolo: "Feudo fascista di Balbo",
    descrizione: "Ferrara è il feudo di Italo Balbo, uno dei 'quadrumviri' della Marcia su Roma. Le squadre ferraresi sono tra le più violente nella lotta contro il movimento operaio e contadino."
  },
  {
    id: "milano-matteotti",
    nome: "Roma – Via Mazzini (già Via Pisanelli)",
    lat: 41.9086,
    lng: 12.4742,
    categoria: "repressione",
    titolo: "Rapimento Matteotti (10 giugno 1924)",
    descrizione: "Giacomo Matteotti viene rapito da una squadra fascista guidata da Amerigo Dumini davanti alla sua abitazione. Il corpo viene ritrovato il 16 agosto in una macchia vicino Roma."
  },
  {
    id: "ventotene",
    nome: "Ventotene (LT)",
    lat: 40.7976,
    lng: 13.4299,
    categoria: "repressione",
    titolo: "Confino di polizia",
    descrizione: "Ventotene è uno dei luoghi di confino più noti. Qui Altiero Spinelli ed Ernesto Rossi scrivono nel 1941 il Manifesto di Ventotene, fondativo del federalismo europeo. Il confino è la punizione per chi non può essere processato."
  },
  {
    id: "lipari",
    nome: "Lipari (ME)",
    lat: 38.4666,
    lng: 14.9536,
    categoria: "repressione",
    titolo: "Isola di confino",
    descrizione: "Lipari è l'isola di confino più nota: tra i confinati Carlo Rosselli, Emilio Lussu e Francesco Fausto Nitti, che nel 1929 fuggono spettacolarmente su un motoscafo verso la Tunisia."
  },
  {
    id: "addis-abeba",
    nome: "Addis Abeba (Etiopia)",
    lat: 9.0251,
    lng: 38.7469,
    categoria: "imperialismo",
    titolo: "Conquista dell'Etiopia (1936)",
    descrizione: "L'Italia fascista conquista l'Etiopia con l'uso di gas tossici e bombardamenti sui civili. Mussolini proclama l'Impero dal balcone di Palazzo Venezia il 9 maggio 1936."
  },
  {
    id: "salò",
    nome: "Salò (BS)",
    lat: 45.6062,
    lng: 10.5241,
    categoria: "fine",
    titolo: "Repubblica Sociale Italiana (1943-1945)",
    descrizione: "Dopo il 25 luglio 1943, Mussolini liberato dai tedeschi fonda la Repubblica Sociale Italiana a Salò, sul lago di Garda. È uno Stato fantoccio sotto controllo nazista, noto per le deportazioni degli ebrei e la violenza contro i partigiani."
  },
  {
    id: "dongo",
    nome: "Giulino di Mezzegra (CO)",
    lat: 46.0013,
    lng: 9.2221,
    categoria: "fine",
    titolo: "Fucilazione di Mussolini (28 aprile 1945)",
    descrizione: "Mussolini, catturato a Dongo mentre fuggiva travestito da soldato tedesco, viene fucilato a Giulino di Mezzegra dai partigiani il 28 aprile 1945. Il giorno dopo il suo cadavere viene esposto in piazzale Loreto a Milano."
  },
  {
    id: "milano-loreto",
    nome: "Milano – Piazzale Loreto",
    lat: 45.4865,
    lng: 9.2201,
    categoria: "fine",
    titolo: "Fine del regime (29 aprile 1945)",
    descrizione: "I cadaveri di Mussolini, Claretta Petacci e altri gerarchi vengono esposti capovolti in piazzale Loreto, nello stesso luogo dove nel 1944 i tedeschi avevano esposto i cadaveri di 15 partigiani fucilati."
  },
  {
    id: "torino-fiat",
    nome: "Torino – FIAT Lingotto",
    lat: 44.9283,
    lng: 7.6403,
    categoria: "economia",
    titolo: "Industria e corporativismo",
    descrizione: "Il corporativismo fascista teorizza la 'terza via' tra capitalismo e socialismo: i sindacati fascisti sostituiscono quelli liberi, le corporazioni regolano i rapporti di lavoro. In realtà gli industriali mantengono il controllo dell'economia."
  }
];
