const personaggiData = [
  {
    id: "mussolini",
    nome: "Benito Mussolini",
    ruolo: "Duce del Fascismo",
    anni: "1883–1945",
    schieramento: "regime",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Mussolini_mezzobusto_crop.jpg/400px-Mussolini_mezzobusto_crop.jpg",
    bio: "Nato a Predappio (FC) da un fabbro socialista e una maestra. Giornalista e militante socialista, direttore dell'Avanti!, espulso dal PSI per interventismo nel 1914. Fonda i Fasci di Combattimento nel 1919, diventa capo del governo nel 1922. Costruisce la dittatura tra il 1925 e il 1926. Firma il Patto d'Acciaio con Hitler (1939) e porta l'Italia in guerra nel 1940. Deposto il 25 luglio 1943, liberato dai tedeschi, fonda la RSI. Fucilato dai partigiani il 28 aprile 1945.",
    ruolo_esteso: "Fondatore del fascismo, capo del governo 1922-1943, Duce della RSI 1943-1945"
  },
  {
    id: "vittorio-emanuele",
    nome: "Vittorio Emanuele III",
    ruolo: "Re d'Italia",
    anni: "1869–1947",
    schieramento: "regime",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Vittorio_Emanuele_III_of_Italy.jpg/400px-Vittorio_Emanuele_III_of_Italy.jpg",
    bio: "Re d'Italia dal 1900. La sua complicità è fondamentale per la conquista del potere da parte del fascismo: rifiuta di firmare lo stato d'assedio nel 1922 e incarica Mussolini di formare il governo. Firma le leggi razziali nel 1938. Solo nel luglio 1943 lo fa arrestare, troppo tardi. Abdica nel 1946 in favore del figlio Umberto II, pochi giorni prima del referendum istituzionale.",
    ruolo_esteso: "Garante istituzionale del regime fascista"
  },
  {
    id: "grandi",
    nome: "Dino Grandi",
    ruolo: "Gerarca fascista",
    anni: "1895–1988",
    schieramento: "regime",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dino_Grandi.jpg/400px-Dino_Grandi.jpg",
    bio: "Uno dei 'ras' dello squadrismo bolognese, poi Ministro degli Esteri e Ambasciatore a Londra. È lui a presentare l'ordine del giorno al Gran Consiglio del Fascismo nella notte tra il 24 e il 25 luglio 1943 che sfiducia Mussolini e ne provoca la caduta.",
    ruolo_esteso: "Ministro degli Esteri, poi artefice della caduta di Mussolini"
  },
  {
    id: "farinacci",
    nome: "Roberto Farinacci",
    ruolo: "Gerarca fascista",
    anni: "1892–1945",
    schieramento: "regime",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Roberto_Farinacci.jpg/400px-Roberto_Farinacci.jpg",
    bio: "'Ras' di Cremona, rappresenta l'ala più radicale e violenta del fascismo. Segretario del PNF nel 1925-1926. Fervente antisemita, spinge per l'adozione delle leggi razziali. Fugge in Germania nel 1945, fucilato dai partigiani.",
    ruolo_esteso: "Leader dell'ala intransigente del fascismo, antisemita"
  },
  {
    id: "bottai",
    nome: "Giuseppe Bottai",
    ruolo: "Intellettuale del regime",
    anni: "1895–1959",
    schieramento: "regime",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Giuseppe_Bottai.jpg/400px-Giuseppe_Bottai.jpg",
    bio: "Intellettuale fascista, direttore della rivista 'Critica Fascista'. Rappresenta il 'fascismo critico' che tenta di conciliare autoritarismo e cultura. Ministro dell'Educazione Nazionale (1936-1943), riforma la scuola italiana. Vota l'odg Grandi nel luglio 1943. Dopo la guerra riprende l'attività intellettuale.",
    ruolo_esteso: "Ministro dell'Educazione, intellettuale del regime"
  },
  {
    id: "balbo",
    nome: "Italo Balbo",
    ruolo: "Quadrumviro e aviatore",
    anni: "1896–1940",
    schieramento: "regime",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Italo_Balbo.jpg/400px-Italo_Balbo.jpg",
    bio: "Uno dei quadrumviri della Marcia su Roma, ras ferrrarese. Organizza le trasvolate atlantiche (1930, 1933) che celebrano l'aviazione italiana nel mondo. Governatore della Libia. Critico dell'alleanza con Hitler. Muore abbattuto per errore dalla contraerea italiana nel 1940.",
    ruolo_esteso: "Quadrumviro, Ministro dell'Aeronautica, trasvolatore"
  },
  {
    id: "matteotti",
    nome: "Giacomo Matteotti",
    ruolo: "Deputato socialista",
    anni: "1885–1924",
    schieramento: "antifascismo",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Giacomo_Matteotti.jpg/400px-Giacomo_Matteotti.jpg",
    bio: "Segretario del Partito Socialista Unitario, deputato eletto nel 1924. Il 30 maggio 1924 denuncia in parlamento le violenze e i brogli elettorali. Il 10 giugno viene rapito e assassinato da una squadra fascista. Il suo assassinio provoca la più grave crisi del regime.",
    ruolo_esteso: "Martire del movimento antifascista"
  },
  {
    id: "gramsci",
    nome: "Antonio Gramsci",
    ruolo: "Intellettuale marxista",
    anni: "1891–1937",
    schieramento: "antifascismo",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Antonio_Gramsci.jpg/400px-Antonio_Gramsci.jpg",
    bio: "Fondatore del Partito Comunista d'Italia (1921), direttore dell'Ordine Nuovo. Deputato, viene arrestato nel 1926. Al processo il PM dice: 'Bisogna impedire a questo cervello di funzionare per vent'anni.' Scrive i Quaderni del carcere, opera fondamentale del pensiero marxista del '900. Muore in clinica nel 1937 per le conseguenze del carcere.",
    ruolo_esteso: "Teorico marxista, prigioniero politico del regime"
  },
  {
    id: "rosselli",
    nome: "Carlo Rosselli",
    ruolo: "Fondatore di Giustizia e Libertà",
    anni: "1899–1937",
    schieramento: "antifascismo",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Carlo_Rosselli.jpg/400px-Carlo_Rosselli.jpg",
    bio: "Intellettuale liberalsocialista, fonda Giustizia e Libertà nel 1929 a Parigi. Combatte nella Guerra civile spagnola. Viene assassinato in Francia insieme al fratello Nello nel 1937 dai Cagoulards su mandato del governo fascista italiano.",
    ruolo_esteso: "Leader dell'antifascismo liberalsocialista in esilio"
  },
  {
    id: "togliatti",
    nome: "Palmiro Togliatti",
    ruolo: "Segretario del PCI",
    anni: "1893–1964",
    schieramento: "antifascismo",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Palmiro_Togliatti.jpg/400px-Palmiro_Togliatti.jpg",
    bio: "Segretario del Partito Comunista d'Italia dall'esilio. Opera a Mosca durante il ventennio fascista. Rientra in Italia nel 1944 con la 'svolta di Salerno': i comunisti sostengono il governo badogliano in nome dell'unità nazionale contro i nazifascisti.",
    ruolo_esteso: "Leader del PCI in esilio, poi nella Resistenza"
  },
  {
    id: "don-sturzo",
    nome: "Luigi Sturzo",
    ruolo: "Fondatore del PPI",
    anni: "1871–1959",
    schieramento: "antifascismo",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Luigi_Sturzo.jpg/400px-Luigi_Sturzo.jpg",
    bio: "Sacerdote siciliano, fonda il Partito Popolare Italiano nel 1919. L'opposizione del Vaticano (che preferisce trattare con il fascismo) lo costringe alle dimissioni nel 1923 e all'esilio. Opera come antifascista dall'estero.",
    ruolo_esteso: "Fondatore della democrazia cristiana italiana, esiliato"
  },
  {
    id: "pertini",
    nome: "Sandro Pertini",
    ruolo: "Socialista e partigiano",
    anni: "1896–1990",
    schieramento: "antifascismo",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Sandro_Pertini.jpg/400px-Sandro_Pertini.jpg",
    bio: "Socialista, viene condannato dal Tribunale Speciale a oltre dieci anni di carcere e confino. Partecipa alla Resistenza. Dopo la guerra è deputato, Presidente della Camera, e dal 1978 Presidente della Repubblica — il più amato della storia repubblicana.",
    ruolo_esteso: "Prigioniero politico, partigiano, poi Presidente della Repubblica"
  }
];
