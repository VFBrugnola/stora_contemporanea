const propagandaData = [
  {
    id: "luce",
    titolo: "Istituto LUCE",
    categoria: "cinema",
    anno: "1924",
    descrizione: "L'Istituto Nazionale LUCE (L'Unione Cinematografica Educativa) viene fondato nel 1924 e nazionalizzato nel 1925. Produce i cinegiornali obbligatori proiettati in tutti i cinema prima dei film: filmati di propaganda sul regime, sui lavori pubblici, sulle conquiste coloniali, sulle attività di Mussolini. Il Duce capisce per primo il potenziale politico del cinema.",
    esempio: "I cinegiornali LUCE mostrano Mussolini intento a mietere il grano, pilotare aerei, nuotare, costruire: l'immagine del capo poliedrico e vigoroso.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Logo_Istituto_Luce.svg/400px-Logo_Istituto_Luce.svg.png"
  },
  {
    id: "radio",
    titolo: "Radio e discorsi del Duce",
    categoria: "radio",
    anno: "1924-1943",
    descrizione: "L'EIAR (Ente Italiano per le Audizioni Radiofoniche, fondato 1924) diventa strumento di propaganda. I discorsi di Mussolini vengono trasmessi in diretta e ascoltati collettivamente in piazze e dopolavori. La radio porta il Duce nelle case degli italiani, creando un rapporto diretto e quasi fisico.",
    esempio: "Il discorso del 10 giugno 1940 (dichiarazione di guerra) viene ascoltato da milioni di italiani: le piazze si riempiono spontaneamente.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/EIAR_logo.svg/400px-EIAR_logo.svg.png"
  },
  {
    id: "stampa",
    titolo: "Controllo della stampa",
    categoria: "stampa",
    anno: "1925-1943",
    descrizione: "Con la legge sulla stampa del 1925 viene abolita la libertà di stampa. I giornali vengono controllati da direttori approvati dal regime. Il 'Minculpop' (Ministero della Cultura Popolare) invia quotidianamente le 'veline': istruzioni su cosa scrivere, cosa tacere, quali notizie enfatizzare.",
    esempio: "I quotidiani devono pubblicare le fotografie di Mussolini in prima pagina, evitare notizie di insuccessi militari, enfatizzare i successi del regime.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Il_Popolo_d%27Italia.jpg/400px-Il_Popolo_d%27Italia.jpg"
  },
  {
    id: "architettura",
    titolo: "Architettura fascista",
    categoria: "architettura",
    anno: "1925-1943",
    descrizione: "Il fascismo usa l'architettura come propaganda monumentale: edifici pubblici, case del fascio, colonie marine, università, stazioni ferroviarie costruiti in stile razionalista o monumentale. L'EUR a Roma, il Foro Mussolini (oggi Foro Italico), la via dell'Impero riorganizzano lo spazio urbano come celebrazione del regime.",
    esempio: "Il Palazzo della Civiltà Italiana (EUR, 1942) — il 'Colosseo quadrato' — con le sue arcate ripete il modello dell'architettura imperiale romana in chiave modernista.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Palazzo_della_Civilta_Italiana_-_Roma.jpg/400px-Palazzo_della_Civilta_Italiana_-_Roma.jpg"
  },
  {
    id: "simbologia",
    titolo: "Simbologia e rituali",
    categoria: "simboli",
    anno: "1922-1943",
    descrizione: "Il fascismo costruisce un sistema di simboli e riti: il fascio littorio (simbolo del potere romano), la camicia nera (dalle squadre d'azione), il saluto romano (braccio teso), l'adunata in piazza, il discorso dal balcone, il rito dell'appello, le divise per ogni organizzazione. La politica diventa liturgia laica.",
    esempio: "Il saluto romano — braccio teso — sostituisce la stretta di mano come gesto di saluto ufficiale. Viene copiato dai nazisti tedeschi.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Fascio_littorio.svg/400px-Fascio_littorio.svg.png"
  },
  {
    id: "gioventu",
    titolo: "Opera Nazionale Balilla e GIL",
    categoria: "gioventu",
    anno: "1926-1943",
    descrizione: "Il regime inquadrava i giovani sin da piccoli in organizzazioni paramilitari non volontarie, con lo scopo di formare perfetti cittadini fascisti, sempre pronti a 'credere, obbedire, combattere'. Le strutture erano: <strong>Figli della Lupa</strong> (bambini/e 6–8 anni), <strong>Balilla</strong> e <strong>Piccole Italiane</strong> (8–14 anni), <strong>Avanguardisti</strong> e <strong>Giovani Fasciste</strong> (14–18 anni, con addestramento militare per i ragazzi), <strong>GUF</strong> (Gruppi Universitari Fascisti). Tutte queste organizzazioni confluivano nella <strong>GIL</strong> — Gioventù Italiana del Littorio (1937). I giovani erano strumento di propaganda: sfilate, giochi ginnici, uniformi obbligatorie.",
    esempio: "Lo scopo era formare il 'nuovo uomo fascista': i ragazzi dagli 8 anni erano già in uniforme, partecipavano a sfilate e giochi ginnici, mentre gli Avanguardisti ricevevano addestramento all'uso delle armi.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Balilla_emblem.svg/400px-Balilla_emblem.svg.png"
  },
  {
    id: "dopolavoro",
    titolo: "Opera Nazionale Dopolavoro",
    categoria: "consenso",
    anno: "1925-1943",
    descrizione: "L'Opera Nazionale Dopolavoro (OND) organizza il tempo libero dei lavoratori: gite, sport, teatro, cinema, radio, ferie. È uno strumento di consenso mascherato da benessere: fa sentire i lavoratori parte di una comunità nazionale, li distrae dalla politica, li integra nel sistema fascista.",
    esempio: "Nel 1939 l'OND conta 4 milioni di iscritti. Organizza sagre, tornei di bocce, gare ciclistiche, proiezioni cinematografiche. Il regime si presenta come il garante del benessere popolare.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Opera_Nazionale_Dopolavoro.png/400px-Opera_Nazionale_Dopolavoro.png"
  },
  {
    id: "sport",
    titolo: "Sport e propaganda",
    categoria: "sport",
    anno: "1930-1938",
    descrizione: "Il regime usa lo sport come strumento di propaganda nazionale e razziale. La vittoria ai Mondiali di calcio del 1934 e del 1938 viene sfruttata politicamente. Le Olimpiadi di Berlino (1936) mostrano il fascismo come sistema vincente. Primo Carnera, pugile campione del mondo, è l'incarnazione dell'atleta fascista.",
    esempio: "La nazionale di calcio vince i Mondiali del 1934 (in Italia) e del 1938 (in Francia). Le maglie nere — colore fascista — vengono indossate nella finale del 1938.",
    immagine: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/1934_FIFA_World_Cup_poster.jpg/400px-1934_FIFA_World_Cup_poster.jpg"
  },
  {
    id: "battaglia-grano",
    titolo: "La battaglia del grano",
    categoria: "campagne",
    anno: "1925-1935",
    descrizione: "Lanciata nel 1925, la 'battaglia del grano' è la più celebre campagna autarchica del regime: obiettivo raggiungere l'autosufficienza cerealicola per ridurre le importazioni. Il grano diventa simbolo di forza nazionale. Il regime mobilitò contadini, scienziati agrari e propaganda per aumentare la produzione. Mussolini stesso si fece fotografare e filmare mentre mieteva il grano a torso nudo — immagine iconica del Duce-lavoratore.",
    esempio: "I manifesti della campagna combinano iconografia ruralista (spighe, falci, campi) con retorica autarchica ('Ogni agricoltore italiano che porta a casa il grano porta a casa la patria'). La rivista 'I Quaderni della Calciocianamide' e altre pubblicazioni divulgavano le tecniche di concimazione. I risultati furono reali ma pagati a caro prezzo: si sacrificò la produzione di carne e latticini, impoverendo la dieta contadina.",
    immagine: "assets/img/battaglia-del-grano.png"
  }
];
