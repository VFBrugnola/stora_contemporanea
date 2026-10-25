const timelineData = [
  {
    year: 1919,
    date: "23 marzo 1919",
    title: "Fondazione dei Fasci di Combattimento",
    category: "politica",
    description: "Benito Mussolini fonda i Fasci Italiani di Combattimento a Milano, in piazza San Sepolcro. Il movimento nasce dall'aggregazione di ex combattenti, nazionalisti, futuristi e sindacalisti rivoluzionari delusi dalla 'vittoria mutilata'.",
    tags: ["origini", "mussolini"]
  },
  {
    year: 1919,
    date: "Settembre 1919",
    title: "Impresa di Fiume",
    category: "politica",
    description: "Gabriele D'Annunzio occupa Fiume con i suoi legionari. L'impresa crea il modello simbolico, rituale e organizzativo che il fascismo imiterà: camicie nere, saluto romano, discorsi dal balcone, culto dell'azione.",
    tags: ["origini", "nazionalismo"]
  },
  {
    year: 1920,
    date: "1920",
    title: "Biennio Rosso e violenza squadrista",
    category: "violenza",
    description: "Le agitazioni operaie e contadine del biennio 1919-1920 spaventano i ceti proprietari. Le squadre fasciste vengono finanziate da agrari e industriali per distruggere le organizzazioni sindacali, le cooperative e le Case del Popolo.",
    tags: ["squadrismo", "violenza"]
  },
  {
    year: 1921,
    date: "15 maggio 1921",
    title: "I fascisti in parlamento",
    category: "politica",
    description: "Giolitti inserisce i fascisti nei blocchi nazionali alle elezioni. Entrano in parlamento 35 deputati fascisti, tra cui Mussolini. Il fascismo ottiene legittimità istituzionale pur continuando la violenza squadrista.",
    tags: ["elezioni", "parlamento"]
  },
  {
    year: 1921,
    date: "7-10 novembre 1921",
    title: "Fondazione del Partito Nazionale Fascista",
    category: "politica",
    description: "Al congresso di Roma i Fasci di Combattimento si trasformano nel Partito Nazionale Fascista (PNF). Il fascismo diventa un partito di massa con una struttura gerarchica. Mussolini viene eletto segretario.",
    tags: ["PNF", "partito"]
  },
  {
    year: 1922,
    date: "28 ottobre 1922",
    title: "Marcia su Roma",
    category: "svolta",
    description: "Le colonne fasciste convergono su Roma. Il re Vittorio Emanuele III rifiuta di firmare lo stato d'assedio e incarica Mussolini di formare il governo. La marcia è più un bluff che un'insurrezione armata, ma segna la resa dello Stato liberale.",
    tags: ["marcia su roma", "governo"]
  },
  {
    year: 1923,
    date: "1923",
    title: "Legge Acerbo",
    category: "leggi",
    description: "La legge Acerbo (riforma elettorale) assegna i due terzi dei seggi alla lista che ottiene almeno il 25% dei voti. Strumento per garantire la maggioranza parlamentare fascista alle successive elezioni.",
    tags: ["legge", "elezioni"]
  },
  {
    year: 1924,
    date: "Aprile 1924",
    title: "Elezioni con intimidazioni",
    category: "politica",
    description: "Le elezioni del 1924, svoltesi con massiccia violenza e intimidazione, assegnano al 'Listone' fascista il 66% dei voti. L'opposizione denuncia i brogli.",
    tags: ["elezioni", "violenza"]
  },
  {
    year: 1924,
    date: "10 giugno 1924",
    title: "Delitto Matteotti",
    category: "svolta",
    description: "Il deputato socialista Giacomo Matteotti viene rapito e assassinato da una squadra fascista dopo aver denunciato i brogli elettorali. La crisi politica che ne segue sembra poter far cadere il governo, ma il re non interviene.",
    tags: ["matteotti", "violenza", "crisi"]
  },
  {
    year: 1924,
    date: "Estate-Autunno 1924",
    title: "Secessione dell'Aventino",
    category: "politica",
    description: "Le opposizioni abbandonano il parlamento (Secessione dell'Aventino) come atto di protesta morale, senza organizzare una reale resistenza. La tattica si rivela un errore: il parlamento continua a funzionare senza di loro.",
    tags: ["opposizione", "parlamento"]
  },
  {
    year: 1925,
    date: "3 gennaio 1925",
    title: "Discorso di Mussolini: inizio della dittatura",
    category: "svolta",
    description: "Mussolini si assume la responsabilità politica, morale e storica del delitto Matteotti davanti al parlamento. È la svolta autoritaria: inizia lo smantellamento sistematico delle istituzioni liberali.",
    tags: ["dittatura", "mussolini"]
  },
  {
    year: 1925,
    date: "1925-1926",
    title: "Leggi fascistissime",
    category: "leggi",
    description: "Tra il 1925 e il 1926 vengono emanate le 'leggi fascistissime': abolizione della libertà di stampa, scioglimento dei partiti e sindacati, istituzione dell'OVRA (polizia segreta), reintroduzione della pena di morte, istituzione del Tribunale Speciale.",
    tags: ["leggi", "dittatura", "repressione"]
  },
  {
    year: 1926,
    date: "Novembre 1926",
    title: "OVRA e Tribunale Speciale",
    category: "repressione",
    description: "Vengono istituiti l'OVRA (Opera Volontaria per la Repressione dell'Antifascismo) e il Tribunale Speciale per la Difesa dello Stato. Gli oppositori possono essere arrestati, condannati al confino o fucilati.",
    tags: ["repressione", "OVRA", "polizia"]
  },
  {
    year: 1929,
    date: "11 febbraio 1929",
    title: "Patti Lateranensi",
    category: "politica",
    description: "I Patti Lateranensi risolvono la 'questione romana': il Vaticano riconosce lo Stato italiano, l'Italia riconosce la sovranità del Papa sullo Stato della Città del Vaticano. Il fascismo ottiene la legittimazione della Chiesa cattolica.",
    tags: ["chiesa", "vaticano", "concordato"]
  },
  {
    year: 1929,
    date: "Marzo 1929",
    title: "Plebiscito",
    category: "politica",
    description: "Il 'plebiscito' del 1929 — con lista unica e voto palese — segna il consenso di massa al regime: il 98,4% vota sì. È l'apice del consenso popolare al fascismo.",
    tags: ["consenso", "plebiscito"]
  },
  {
    year: 1929,
    date: "1929",
    title: "Crisi economica mondiale",
    category: "economia",
    description: "La Grande Crisi colpisce anche l'Italia. Il regime risponde con l'autarchia, la 'quota 90' (rivalutazione della lira), la creazione dell'IRI e politiche di lavori pubblici. L'intervento statale nell'economia si intensifica.",
    tags: ["economia", "crisi", "autarchia"]
  },
  {
    year: 1935,
    date: "Ottobre 1935",
    title: "Guerra d'Etiopia",
    category: "guerra",
    description: "L'Italia fascista aggredisce l'Etiopia. La Società delle Nazioni impone sanzioni economiche, ma inefficaci. La conquista (maggio 1936) viene celebrata come la fondazione dell'Impero. Mussolini è al culmine della popolarità.",
    tags: ["etiopia", "imperialismo", "guerra"]
  },
  {
    year: 1936,
    date: "Novembre 1936",
    title: "Asse Roma-Berlino",
    category: "politica",
    description: "L'Italia fascista si avvicina alla Germania nazista. Nasce l'Asse Roma-Berlino. Il regime fascista inizia a mutuare politiche antisemite dal nazismo.",
    tags: ["nazismo", "asse", "germania"]
  },
  {
    year: 1938,
    date: "Luglio-Novembre 1938",
    title: "Leggi razziali",
    category: "svolta",
    description: "Il regime fascista emana le leggi razziali contro gli ebrei: esclusione dalle scuole, dalle professioni, dalla vita pubblica. L'antisemitismo viene codificato per legge. Circa 47.000 ebrei italiani sono colpiti.",
    tags: ["leggi razziali", "ebrei", "antisemitismo"]
  },
  {
    year: 1940,
    date: "10 giugno 1940",
    title: "Entrata in guerra",
    category: "guerra",
    description: "Mussolini dichiara guerra a Francia e Gran Bretagna. L'Italia entra nella Seconda Guerra Mondiale al fianco della Germania nazista. L'esercito italiano si rivela impreparato.",
    tags: ["guerra", "ww2"]
  },
  {
    year: 1943,
    date: "25 luglio 1943",
    title: "Caduta di Mussolini",
    category: "svolta",
    description: "Il Gran Consiglio del Fascismo vota la sfiducia a Mussolini. Il re lo fa arrestare e nomina Badoglio capo del governo. Il regime fascista ventennale crolla in una notte.",
    tags: ["caduta", "badoglio"]
  },
  {
    year: 1943,
    date: "8 settembre 1943",
    title: "Armistizio",
    category: "guerra",
    description: "L'armistizio con gli Alleati viene annunciato. L'esercito si disgrega. Il Nord Italia viene occupato dai tedeschi. Mussolini, liberato dai tedeschi, fonda la Repubblica Sociale Italiana (RSI) a Salò.",
    tags: ["armistizio", "RSI", "salò"]
  },
  {
    year: 1943,
    date: "Settembre 1943 - Aprile 1945",
    title: "Resistenza e guerra civile",
    category: "guerra",
    description: "Nell'Italia occupata dai tedeschi nasce la Resistenza partigiana. Si combatte anche una guerra civile tra partigiani e fascisti della RSI. I tedeschi deportano gli ebrei italiani nei campi di sterminio nazisti.",
    tags: ["resistenza", "guerra civile", "deportazioni"]
  },
  {
    year: 1945,
    date: "28 aprile 1945",
    title: "Fine di Mussolini",
    category: "fine",
    description: "Mussolini, catturato dai partigiani mentre cerca di fuggire in Svizzera, viene fucilato a Giulino di Mezzegra. Il suo cadavere viene appeso a testa in giù in piazzale Loreto a Milano. Il 25 aprile è la Liberazione.",
    tags: ["fine", "liberazione"]
  }
];
