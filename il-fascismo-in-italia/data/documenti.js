const documentiData = [
  {
    id: "discorso-sansepolcro",
    titolo: "Programma di San Sepolcro",
    data: "23 marzo 1919",
    categoria: "origini",
    autore: "Benito Mussolini",
    testo: "«Noi ci permettiamo il lusso di essere aristocratici e democratici, conservatori e progressisti, reazionari e rivoluzionari, legalisti e illegalisti, secondo le circostanze di tempo, di luogo, di ambiente in cui siamo costretti a vivere e ad agire.»",
    commento: "Il primo programma fascista è volutamente contraddittorio: il fascismo delle origini non ha un'ideologia coerente ma aggrega chiunque sia deluso dall'ordine politico esistente. L'eclettismo è uno strumento di reclutamento."
  },
  {
    id: "discorso-bivacco",
    titolo: "Discorso del bivacco",
    data: "16 novembre 1922",
    categoria: "dittatura",
    autore: "Benito Mussolini",
    testo: "«Mi sono detto che la migliore saggezza è quella che non ci abbandona dopo la vittoria. Con 300 mila giovani armati di tutto punto, decisi a tutto e quasi misticamente pronti ad un mio ordine, io potevo castigare tutti coloro che hanno diffamato e tentato di infangare il Fascismo. Potevo fare di questa Aula sorda e grigia un bivacco di manipoli: potevo sprangare il Parlamento e costituire un Governo esclusivamente di fascisti. Potevo: ma non ho, almeno in questo primo tempo, voluto.»",
    commento: "Il primo discorso di Mussolini al Parlamento come Presidente del Consiglio. È l'esempio perfetto del 'doppio binario': la minaccia è esplicita — poteva distruggere il Parlamento — ma la moderazione è ostentata e dichiaratamente provvisoria ('almeno in questo primo tempo'). Rassicura i moderati e al tempo stesso esalta i fascisti più intransigenti. La 'Aula sorda e grigia' è diventata una delle frasi più note della retorica fascista."
  },
  {
    id: "discorso-3-gennaio",
    titolo: "Discorso del 3 gennaio 1925",
    data: "3 gennaio 1925",
    categoria: "dittatura",
    autore: "Benito Mussolini",
    testo: "«Ebbene, io dichiaro qui al cospetto di questa assemblea ed al cospetto di tutto il popolo italiano che assumo, io solo, la responsabilità politica, morale, storica di tutto quanto è avvenuto. […] Se il Fascismo non è stato che olio di ricino e manganello e non invece una superba passione della migliore gioventù italiana, a me la colpa! Se il Fascismo è stato un'associazione a delinquere, se tutte le violenze sono state il risultato di un determinato clima storico, politico, morale, a me la responsabilità di questo, perché questo clima storico, politico e morale io l'ho creato con una propaganda che va dall'intervento fino ad oggi.»",
    commento: "Pronunciato sei mesi dopo il delitto Matteotti, quando l'indignazione si era attenuata, questo discorso sancisce la fine di qualsiasi politica 'moderata' e l'inizio della dittatura. Mussolini si assume la responsabilità politica, morale e storica di tutto quanto è avvenuto — e trasforma l'ammissione di colpa in atto di forza. Da questo momento iniziano le leggi fascistissime."
  },
  {
    id: "mussolini-donne",
    titolo: "Mussolini sulla donna (1932)",
    data: "1932",
    categoria: "dittatura",
    autore: "Benito Mussolini",
    testo: "«La donna deve obbedire […]. Essa è analitica e non sintetica. […] La mia opinione della sua parte nello Stato è opposizione a ogni femminismo. Naturalmente essa non deve essere schiava, ma se le concedessi il diritto elettorale mi deriderebbero. Nel nostro Stato non deve contare.»",
    commento: "La posizione del regime sulla donna è esplicita: moglie, madre, educatrice, strumento di politica demografica. I Fasci Femminili, fondati nel 1921 da Elisa Majer Rizzioli, inquadrano le donne in modo totalmente apolitico e subordinato. La donna 'non deve contare' nella vita pubblica — eppure il regime la mobilita massicciamente per i propri fini: campagne demografiche, assistenza sociale, propaganda."
  },
  {
    id: "manifesto-croce",
    titolo: "Manifesto degli intellettuali antifascisti",
    data: "1° maggio 1925",
    categoria: "antifascismo",
    autore: "Benedetto Croce",
    testo: "«Il fascismo [...] è qualcosa di ben diverso dal movimento conservatore, o anche reazionario, che si suole a volta vedere nel fascismo: è un movimento politico che ha assunto caratteri di religione politica, e si è conformato sul modello, con le insegne e coi metodi del bolscevismo russo, suo avversario, ma anche, senza che se ne avveda, suo imitatore.»",
    commento: "Risposta al Manifesto degli intellettuali fascisti di Giovanni Gentile. Croce è il principale intellettuale italiano a mantenere una posizione critica aperta durante il ventennio, pur restando in Italia."
  },
  {
    id: "carta-lavoro",
    titolo: "Carta del Lavoro",
    data: "21 aprile 1927",
    categoria: "economia",
    autore: "Gran Consiglio del Fascismo",
    testo: "«Lo Stato fascista considera l'iniziativa privata nel campo della produzione come lo strumento più efficace e più utile nell'interesse della nazione. [...] L'organizzazione privata della produzione è una funzione di interesse nazionale. Il dirigente dell'impresa è responsabile della direzione della produzione davanti allo Stato.»",
    commento: "La Carta del Lavoro definisce il corporativismo fascista: l'economia privata è mantenuta, ma sottoposta al controllo dello Stato. In pratica gli industriali mantengono il potere economico."
  },
  {
    id: "manifesto-razza",
    titolo: "Manifesto della razza",
    data: "14 luglio 1938",
    categoria: "leggi-razziali",
    autore: "Gruppo di scienziati fascisti",
    testo: "«7. È tempo che gli Italiani si proclamino francamente razzisti. Tutta l'opera che finora ha fatto il Regime in Italia è in fondo del razzismo. […] 9. Gli ebrei non appartengono alla razza italiana. Dei semiti che nel corso dei secoli sono approdati sul sacro suolo della nostra Patria nulla in generale è rimasto. […] 10. I caratteri fisici e psicologici puramente europei degli Italiani non devono essere alterati in nessun modo. […] Il carattere puramente europeo degli Italiani viene alterato dall'incrocio con qualsiasi razza extra-europea e portatrice di una civiltà diversa dalla millenaria civiltà degli ariani.»",
    commento: "Il Manifesto della razza è la base pseudoscientifica delle leggi razziali del 1938. Nasce dal razzismo coloniale dell'occupazione etiopica (preoccupavano i matrimoni misti) e si indirizza poi contro gli ebrei, in coincidenza con l'avvicinamento alla Germania. La rivista 'La difesa della razza' (1938) tentò invano di definire i caratteri della presunta 'razza italica'. Oggi sappiamo con certezza che non ha alcun senso parlare di razze umane: esiste solo quella umana.",
    immagine: "assets/img/difesa-della-razza.png"
  },
  {
    id: "lettera-gramsci",
    titolo: "Lettera di Gramsci dal carcere",
    data: "19 marzo 1927",
    categoria: "antifascismo",
    autore: "Antonio Gramsci",
    testo: "«Sono tranquillo e sereno. Moralmente mi sento superiore ai miei persecutori. [...] Sono convinto che la causa per cui combatto vincerà, anche se io non potrò vedere questa vittoria. [...] Dobbiamo essere realisti: nessuno dà la vita per niente.»",
    commento: "Le lettere di Gramsci dal carcere (pubblicate postume nel 1947) mostrano la dignità e la lucidità intellettuale dell'intellettuale marxista di fronte alla persecuzione. I Quaderni del carcere, scritti tra il 1929 e il 1935, sono la sua opera principale."
  },
  {
    id: "manifesto-ventotene",
    titolo: "Il Manifesto di Ventotene",
    data: "1941",
    categoria: "antifascismo",
    autore: "Altiero Spinelli ed Ernesto Rossi",
    testo: "«La linea di divisione tra partiti progressisti e partiti reazionari cade ormai lungo la sostanziale nuova linea: quelli che concepiscono come fine essenziale della lotta quello antico, cioè la conquista del potere politico nazionale, e quelli che vedono come compito fondamentale la creazione di un solido stato internazionale.»",
    commento: "Scritto sull'isola di Ventotene dove Spinelli era confinato, il Manifesto propone la costruzione di una federazione europea come risposta al nazionalismo che ha prodotto il fascismo e la guerra. È uno dei testi fondativi del federalismo europeo."
  },
  {
    id: "discorso-25-luglio",
    titolo: "Comunicato della caduta di Mussolini",
    data: "25 luglio 1943",
    categoria: "caduta",
    autore: "Radio italiana",
    testo: "«Sua Maestà il Re e Imperatore ha accettato le dimissioni dalla carica di Capo del Governo, Primo Ministro e Segretario di Stato di Sua Eccellenza il Cavaliere Benito Mussolini, e ha nominato Capo del Governo, Primo Ministro e Segretario di Stato Sua Eccellenza il Cavaliere Maresciallo d'Italia Pietro Badoglio.»",
    commento: "Il comunicato radio della notte tra il 25 e il 26 luglio 1943 annuncia la caduta di Mussolini. La folla scende in piazza ad abbattere i simboli del regime: il ventennio fascista finisce senza resistenza popolare."
  }
];
