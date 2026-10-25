const timelineData = [
  {
    anno: 1889,
    data: "20 aprile 1889",
    titolo: "Nascita di Adolf Hitler",
    desc: "Hitler nasce a Braunau am Inn, in Austria, figlio del doganiere Alois Hitler e di Klara Pözl. Crescerà come cattolico, con un rapporto burrascoso con il padre.",
    categoria: "origini"
  },
  {
    anno: 1907,
    data: "1907–1913",
    titolo: "Vienna: rifiuto e radicalizzazione",
    desc: "Hitler viene rifiutato dall'Accademia delle Belle Arti di Vienna. In questi anni entra in contatto con l'antisemitismo viennese. Fugge dall'Austria per evitare la leva, salvo arruolarsi volontariamente nell'esercito tedesco allo scoppio della guerra.",
    categoria: "origini"
  },
  {
    anno: 1919,
    data: "5 gennaio 1919",
    titolo: "Fondazione del DAP",
    desc: "Anton Drexler fonda il Deutsche Arbeiterpartei (DAP, Partito dei Lavoratori Tedeschi) a Monaco di Baviera. Hitler vi entra come agente dell'esercito e ne diventa ben presto uno dei principali oratori.",
    categoria: "origini"
  },
  {
    anno: 1920,
    data: "24 febbraio 1920",
    titolo: "Il programma in 25 punti",
    desc: "Hitler presenta il programma del partito, ora rinominato NSDAP, in 25 punti: pangermanesimo, abolizione dei trattati di pace, esclusione degli ebrei dalla cittadinanza, lotta ai redditi non da lavoro.",
    categoria: "origini"
  },
  {
    anno: 1923,
    data: "8–9 novembre 1923",
    titolo: "Putsch di Monaco",
    desc: "Hitler tenta un colpo di stato a Monaco (Bierkeller Putsch). Il tentativo fallisce, 16 nazisti muoiono, Hitler viene arrestato e condannato a 5 anni. In carcere scrive il Mein Kampf. Uscirà dopo soli 9 mesi.",
    categoria: "origini"
  },
  {
    anno: 1925,
    data: "18 luglio 1925",
    titolo: "Pubblicazione del Mein Kampf",
    desc: "Viene pubblicato il primo volume del Mein Kampf, scritto durante la detenzione. Hitler vi espone la sua visione razzista, l'antisemitismo biologico e il progetto di uno spazio vitale (Lebensraum) a est.",
    categoria: "ideologia"
  },
  {
    anno: 1929,
    data: "Ottobre 1929",
    titolo: "La crisi del '29 colpisce la Germania",
    desc: "Il crollo di Wall Street si riversa sulla Germania in modo devastante: disoccupazione di massa, fallimenti bancari, miseria. Il NSDAP sfrutta il malcontento e cresce rapidamente nei consensi.",
    categoria: "ascesa"
  },
  {
    anno: 1930,
    data: "14 settembre 1930",
    titolo: "Balzo elettorale del NSDAP",
    desc: "Nelle elezioni federali il NSDAP passa dal 2,6% al 18,3%, diventando il secondo partito tedesco. La crisi economica alimenta il consenso verso i movimenti antisistema.",
    categoria: "ascesa"
  },
  {
    anno: 1932,
    data: "31 luglio 1932",
    titolo: "NSDAP primo partito",
    desc: "Il NSDAP ottiene il 37,4% dei voti, diventando il primo partito del Reichstag. La Germania è in piena crisi di governabilità tra nazisti, comunisti e socialdemocratici.",
    categoria: "ascesa"
  },
  {
    anno: 1933,
    data: "30 gennaio 1933",
    titolo: "Hitler cancelliere",
    desc: "Il presidente Hindenburg conferisce a Hitler l'incarico di formare il governo. Su 11 ministri solo 3 sono nazisti: gli avversari sottovalutano la minaccia e credono di poterlo controllare.",
    categoria: "regime"
  },
  {
    anno: 1933,
    data: "27 febbraio 1933",
    titolo: "Incendio del Reichstag",
    desc: "Il parlamento tedesco va a fuoco. Un militante comunista olandese viene arrestato. Hitler usa l'evento come pretesto per sospendere le libertà civili e perseguitare gli oppositori.",
    categoria: "regime"
  },
  {
    anno: 1933,
    data: "5 marzo 1933",
    titolo: "Elezioni: NSDAP al 44%",
    desc: "Nuove elezioni in clima di intimidazione. Il NSDAP ottiene il 44% dei voti. Non è ancora la maggioranza assoluta, ma con i nazionalisti raggiunge la maggioranza parlamentare.",
    categoria: "regime"
  },
  {
    anno: 1933,
    data: "1° aprile 1933",
    titolo: "Boicottaggio delle attività ebraiche",
    desc: "SA e SS si appostano davanti ai negozi e alle attività degli ebrei per scoraggiare i clienti. Il boicottaggio è nazionale e simultaneo. Ad Amburgo e Kiel si registrano i primi omicidi.",
    categoria: "antisemitismo"
  },
  {
    anno: 1933,
    data: "24 marzo 1933",
    titolo: "Legge dei pieni poteri",
    desc: "Il Parlamento approva l'Ermächtigungsgesetz: Hitler può legiferare per decreto senza passare per il Reichstag. È la fine della Repubblica di Weimar e l'inizio del Terzo Reich.",
    categoria: "regime"
  },
  {
    anno: 1933,
    data: "20 luglio 1933",
    titolo: "Concordato con la Chiesa",
    desc: "Il regime nazista firma un concordato con la Santa Sede. La Chiesa cattolica ottiene tutele per le istituzioni religiose; in cambio non si oppone pubblicamente al regime.",
    categoria: "regime"
  },
  {
    anno: 1934,
    data: "30 giugno 1934",
    titolo: "Notte dei lunghi coltelli",
    desc: "Le SS eliminano Ernst Röhm e circa 70 capi delle SA durante un raduno. Hitler riprende il controllo sull'ala più radicale del partito e consolida il consenso della Wehrmacht.",
    categoria: "regime"
  },
  {
    anno: 1934,
    data: "2 agosto 1934",
    titolo: "Morte di Hindenburg — Hitler Führer",
    desc: "Alla morte del presidente Hindenburg, Hitler assume anche la carica di presidente, diventando Führer und Reichskanzler. I soldati prestano giuramento personale a Hitler, non alla Costituzione.",
    categoria: "regime"
  },
  {
    anno: 1935,
    data: "15 settembre 1935",
    titolo: "Leggi di Norimberga",
    desc: "Il Parlamento riunito a Norimberga approva le leggi antisemite all'unanimità: divieto di matrimoni misti, definizione razziale di ebreo, esclusione dalle professioni liberali.",
    categoria: "antisemitismo"
  },
  {
    anno: 1936,
    data: "1936",
    titolo: "Piano economico quadriennale",
    desc: "Göring coordina il piano quadriennale: l'economia tedesca viene orientata verso il riarmo totale. La disoccupazione scende a zero — ma attraverso lavori forzati, esclusione delle donne e persecuzione degli indesiderati.",
    categoria: "economia"
  },
  {
    anno: 1938,
    data: "9–10 novembre 1938",
    titolo: "Notte dei cristalli (Kristallnacht)",
    desc: "In tutta la Germania pogrom organizzati dallo Stato: migliaia di ebrei assassinati o arrestati, sinagoghe incendiate, vetrine di negozi ebraici distrutte. L'evento segna il passaggio dalla discriminazione alla violenza di massa aperta.",
    categoria: "antisemitismo"
  }
];
