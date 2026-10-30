/* data/documenti.js — La Rivoluzione Russa */
const DOCUMENTI = [
  {
    id: 'd01',
    titolo: 'Petizione al Granduca Nicola II',
    data: '9 gennaio 1905',
    autore: 'Padre Georgij Gapon (e lavoratori di Pietroburgo)',
    cat: 'zarismo',
    cat_label: 'Zarismo e 1905',
    testo: 'Sire, noi lavoratori, i nostri figli, le nostre donne e i nostri impotenti vecchi genitori, siamo venuti da te, Sire, a cercare giustizia e protezione. Siamo caduti in povertà, siamo stati oppressi, caricati di lavoro insopportabile, trattati con disprezzo, non riconosciuti come uomini, trattati come schiavi che devono sopportare un amaro destino ed essere in silenzio. [...] Non c\'è per noi altra via, per questo siamo venuti a te. Non rifiutarci di aiutarci: fa\'uscire il popolo russo dalla tomba dell\'illegalità, della povertà e dell\'ignoranza. Ordina e giura che le nostre richieste siano soddisfatte.',
    commento: 'La petizione rappresentava la fiducia ancora riposta da molti lavoratori nella figura dello zar come "piccolo padre" della nazione. Chiedeva una giornata lavorativa di 8 ore, aumento dei salari, libertà di organizzazione sindacale e un\'Assemblea Costituente. La risposta fu la fucilazione della folla: la "Domenica di Sangue" del 22 gennaio 1905 distrusse per sempre l\'immagine dello zar benefattore.'
  },
  {
    id: 'd02',
    titolo: 'Manifesto d\'Ottobre',
    data: '17 ottobre 1905',
    autore: 'Nicola II (su consiglio di Witte)',
    cat: 'zarismo',
    cat_label: 'Zarismo e 1905',
    testo: 'Noi, Nicola II, [...] Ordiniamo al Governo di adempiere alla Nostra volontà incrollabile: 1. Concedere alla popolazione le fondamenta immutabili della libertà civile sulle basi della reale inviolabilità della persona, della libertà di coscienza, di parola, di riunione e di associazione. 2. Senza sospendere le elezioni già indette per la Duma di Stato, ammettere alla partecipazione alla Duma, per quanto possibile [...] quelle classi della popolazione che attualmente sono completamente prive di diritti elettorali. 3. Stabilire come regola inviolabile che nessuna legge possa entrare in vigore senza l\'approvazione della Duma di Stato.',
    commento: 'Il Manifesto d\'Ottobre fu strappato allo zar dallo sciopero generale di ottobre 1905. Nicola II lo firmò controvoglia, su pressione del primo ministro Witte. Concedeva una Duma legislativa e libertà civili, ma manteneva poteri autocratici allo zar. I liberali (cadetti) lo accettarono; socialisti e bolscevichi lo rifiutarono come insufficiente. Stolypin poi ridusse i poteri della Duma con i decreti del 1907.'
  },
  {
    id: 'd03',
    titolo: 'Che fare? (estratto)',
    data: '1902',
    autore: 'Vladimir Il\'ič Lenin',
    cat: 'bolscevichi',
    cat_label: 'Documenti Bolscevichi',
    testo: 'La storia di tutti i paesi attesta che, con le proprie sole forze, la classe operaia può arrivare soltanto alla coscienza tradeunionista, cioè alla convinzione che è necessario unirsi in sindacati, battersi contro i padroni, esigere dallo Stato queste o quelle leggi necessarie agli operai, ecc. La dottrina del socialismo invece è nata dalle teorie filosofiche, storiche, economiche elaborate dagli intellettuali, dai rappresentanti istruiti delle classi possidenti. [...] Non c\'è via di mezzo: o la borghese o la socialista. [...] Dateci un\'organizzazione di rivoluzionari, e sovvertiremo la Russia.',
    commento: 'Il Che fare? (1902) è il manifesto fondativo del leninismo. La tesi centrale — che il proletariato non può da solo sviluppare coscienza rivoluzionaria — giustifica il ruolo guida del partito di avanguardia. L\'opera fu contestata dai menscevichi (Martov, Plechanov) che vedevano in essa le premesse dell\'autoritarismo. Rosa Luxemburg la criticò come "ultracentralismo" che avrebbe portato alla sostituzione del proletariato con il partito e del partito con il Comitato Centrale.'
  },
  {
    id: 'd04',
    titolo: 'Tesi di Aprile',
    data: '4 aprile 1917',
    autore: 'V.I. Lenin',
    cat: 'bolscevichi',
    cat_label: 'Documenti Bolscevichi',
    testo: '1. Nella nostra attitudine verso la guerra, che da parte della Russia conserva, anche sotto il nuovo governo di L\'vov e Compagni, un carattere incontestabilmente predatorio e imperialista data la natura capitalistica di tale governo, è assolutamente inammissibile la minima concessione al "difensivismo rivoluzionario".\n\n3. Nessun appoggio al Governo Provvisorio; mettere a nudo il carattere illusorio di tutte le sue promesse, specialmente riguardo all\'abbandono delle annessioni.\n\n5. Non una repubblica parlamentare — ritornare ad essa dai Soviet dei deputati operai sarebbe un passo indietro — ma una repubblica dei Soviet dei deputati operai, braccianti e contadini in tutto il paese, dal basso in alto. Abolizione della polizia, dell\'esercito, della burocrazia. Tutti i funzionari, tutti, devono essere elettivi e revocabili in qualsiasi momento, e il loro salario non deve superare quello medio di un buon operaio.\n\n6. Confisca di tutte le proprietà latifondistiche. Nazionalizzazione di tutta la terra del paese che viene messa a disposizione dei Soviet locali dei braccianti e dei contadini. Organizzazione di Soviet separati di braccianti.\n\n7. Fusione immediata di tutte le banche del paese in un\'unica banca nazionale e controllo su di essa da parte dei Soviet dei deputati operai.\n\n10. Rinnovamento dell\'Internazionale.',
    commento: 'Le Tesi di Aprile spiazzarono inizialmente anche i bolscevichi più vicini a Lenin. Stalin e Kamenev avevano assunto posizioni di condizionato sostegno al Governo Provvisorio. Lenin impose la svolta: opposizione totale al governo, nessuna fiducia nella guerra, potere ai Soviet. Il giornale bolscevico Pravda le pubblicò con difficoltà. Questa strategia si rivelò determinante per il successo di Ottobre.'
  },
  {
    id: 'd05',
    titolo: 'Decreto sulla Pace',
    data: '26 ottobre 1917',
    autore: 'II Congresso dei Soviet',
    cat: 'decreti-sovietici',
    cat_label: 'Decreti del Potere Sovietico',
    testo: 'Il Governo Operaio e Contadino, creato dalla Rivoluzione del 24-25 ottobre e fondato sui Soviet dei Deputati Operai, Soldati e Contadini, propone a tutti i popoli belligeranti e ai loro governi di iniziare immediatamente trattative per una pace giusta e democratica. Per pace giusta e democratica, di cui aspira ardentemente l\'immensa maggioranza dei lavoratori e delle classi lavoratrici di tutti i paesi belligeranti esausti, logorati, tormentati dalla guerra, il Governo considera la pace immediata senza annessioni (cioè senza appropriazione di territori altrui, senza annessione di nazionalità straniere per forza) e senza contribuzioni di guerra.',
    commento: 'Primo documento del potere sovietico, presentato da Lenin al Congresso dei Soviet nella notte del 26 ottobre 1917. La proposta di pace era rivolta a tutti i governi belligeranti, ma intendeva soprattutto fare leva sui movimenti operai europei perché insorgessero. Nessun governo occidentale rispose. La pace separata con gli Imperi Centrali fu poi firmata a Brest-Litovsk (marzo 1918) a condizioni ben più dure di quelle proposte qui.'
  },
  {
    id: 'd06',
    titolo: 'Decreto sulla Terra',
    data: '27 ottobre 1917',
    autore: 'II Congresso dei Soviet',
    cat: 'decreti-sovietici',
    cat_label: 'Decreti del Potere Sovietico',
    testo: '1. La proprietà privata terriera è abolita immediatamente e senza riscatto alcuno. 2. Le tenute dei latifondisti, così come tutte le terre della corona, dei monasteri e delle chiese, con tutto il loro inventario vivo e morto, gli edifici e le dipendenze, passano a disposizione dei comitati agrari dei volost e dei Soviet dei deputati contadini dei uyezd, in attesa dell\'Assemblea Costituente. [...] La terra dei semplici contadini e dei cosacchi non sarà confiscata.',
    commento: 'Il Decreto sulla Terra recepiva il programma agrario dei Socialisti Rivoluzionari — non quello originale dei bolscevichi. Lenin era pragmatico: conquistare i contadini con la loro richiesta storica era necessario per sopravvivere. In seguito, il regime bolscevico avrebbe prima limitato (collettivizzazione parziale) e poi imposto brutalmente la collettivizzazione di massa sotto Stalin (1929-1933), con milioni di morti.'
  },
  {
    id: 'd07',
    titolo: 'Il Testamento di Lenin',
    data: '25 dicembre 1922 – 4 gennaio 1923',
    autore: 'V.I. Lenin (dettato)',
    cat: 'bolscevichi',
    cat_label: 'Documenti Bolscevichi',
    testo: 'Il compagno Stalin, diventato segretario generale, ha concentrato nelle sue mani un potere immenso e non sono sicuro che sappia sempre usarlo con sufficiente prudenza. [...] Stalin è troppo rozzo e questo difetto, pienamente tollerabile nei rapporti tra comunisti, diventa intollerabile nella funzione di segretario generale. Perciò propongo ai compagni di pensare a un modo di spostare Stalin da questo posto e di nominare al suo posto un altro uomo che in tutto si distingua dal compagno Stalin soltanto per la superiorità: più paziente, più leale, più cortese, più attento verso i compagni, meno capriccioso, ecc.',
    commento: 'Lenin dettò queste note nei mesi in cui gli ictus gli impedivano di lavorare normalmente. Oltre a Stalin, il documento valutava negativamente Trotsky ("eccessivo autocompiacimento"), Zinoviev e Kamenev ("tradimento dell\'ottobre 1917"), ma giudicava Stalin il più pericoloso. Bucharin era lodato come "il più grande teorico" ma "non ha mai capito la dialettica". Krupskaja consegnò il testo al Comitato Centrale nel maggio 1924, ma Stalin riuscì a seppellirlo con l\'appoggio di Zinoviev e Kamenev. Fu letto pubblicamente in URSS solo nel 1956, da Chruščëv.'
  }
];
