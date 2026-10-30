/* data/timeline.js — La Rivoluzione Russa */
const TIMELINE = [
  {
    id: 't01',
    anno: 1905,
    data: '22 gennaio 1905',
    titolo: 'Domenica di Sangue',
    descrizione: 'Una processione pacifica guidata da padre Georgij Gapon marcia verso il Palazzo d\'Inverno per presentare una petizione allo zar Nicola II. Le truppe imperiali sparano sulla folla: muoiono tra 130 e oltre mille persone. L\'evento scredita definitivamente il "piccolo padre" agli occhi del popolo e innesca la Rivoluzione del 1905. È il momento fondativo della coscienza rivoluzionaria di massa.',
    cat: 'svolta',
    tags: ['zarismo', 'violenza', '1905']
  },
  {
    id: 't02',
    anno: 1905,
    data: 'giugno 1905',
    titolo: 'Rivolta della Potemkin',
    descrizione: 'I marinai della corazzata Principe Potemkin si ammutinano per protesta contro le condizioni di vita — a scintilla, la carne avariata — e si rifiutano di sparare sui manifestanti di Odessa. La rivolta diventa simbolo della frattura tra zarismo e esercito. Ejzenštejn la immortalerà nel film del 1925.',
    cat: 'rivolta',
    tags: ['zarismo', 'marina', '1905']
  },
  {
    id: 't03',
    anno: 1905,
    data: 'ottobre 1905',
    titolo: 'Manifesto d\'Ottobre e primo Soviet',
    descrizione: 'Lo sciopero generale paralizza il paese. Nicola II concede il Manifesto d\'Ottobre: libertà civili fondamentali e la creazione della Duma, un parlamento elettivo con potere legislativo. I liberali accettano; socialisti e bolscevichi rifiutano la riforma come insufficiente. Nasce il Soviet di Pietroburgo, coordinato da Trotsky: prima grande esperienza di autogoverno operaio.',
    cat: 'politica',
    tags: ['zarismo', 'riforma', 'duma', 'soviet', '1905']
  },
  {
    id: 't04',
    anno: 1907,
    data: '1906–1907',
    titolo: 'Reazione Stolypiniana',
    descrizione: 'Il primo ministro Pёtr Stolypin reprime duramente le rivolte contadine e scioglie le Dume con decreti extracostituzionali. La forca è usata così spesso da venire chiamata "cravatta di Stolypin". Parallelamente avvia una riforma agraria che smantella la comunità contadina (obščina) per creare un ceto di contadini proprietari lealisti.',
    cat: 'zarismo',
    tags: ['repressione', 'riforma agraria', 'stolypin']
  },
  {
    id: 't05',
    anno: 1912,
    data: 'aprile 1912',
    titolo: 'Massacro della Lena',
    descrizione: 'Soldati zaristi sparano su minatori in sciopero nelle miniere d\'oro della Lena in Siberia: almeno 150 morti. L\'evento scatena ondate di scioperi in tutto il paese e rilancia il movimento operaio dopo anni di stagnazione post-1905.',
    cat: 'violenza',
    tags: ['operai', 'zarismo', 'siberia']
  },
  {
    id: 't06',
    anno: 1914,
    data: 'agosto 1914',
    titolo: 'Ingresso nella Prima Guerra Mondiale',
    descrizione: 'La Russia entra in guerra contro gli Imperi Centrali. L\'esercito zarista, mal equipaggiato e peggio comandato, subisce disastrose sconfitte: Tannenberg (agosto 1914) costa 170.000 prigionieri. La guerra accelera la crisi interna: milioni di morti al fronte, penuria alimentare nelle città, inflazione galoppante, trasporti al collasso.',
    cat: 'guerra',
    tags: ['wwi', 'zarismo', 'fronte orientale']
  },
  {
    id: 't07',
    anno: 1916,
    data: 'dicembre 1916',
    titolo: 'Assassinio di Rasputin',
    descrizione: 'Grigorij Rasputin, mistico siberiano che esercitava enorme influenza sulla zarina Aleksandra grazie alla gestione della malattia (emofilia) dell\'erede Aleksej, viene assassinato da un gruppo di nobili. L\'evento rivela la profonda crisi del regime: la famiglia imperiale è isolata dalla nobiltà stessa.',
    cat: 'politica',
    tags: ['zarismo', 'famiglia reale', 'corte']
  },
  {
    id: 't08',
    anno: 1917,
    data: '23 feb. – 2 mar. 1917',
    titolo: 'Rivoluzione di Febbraio',
    descrizione: 'Scioperi e manifestazioni esplodono a Pietrogrado il 23 febbraio (cal. giuliano) — Giornata internazionale della donna — per la penuria di pane. Le truppe rifiutano di sparare sui manifestanti e fraternizzano con loro. Il 2 marzo Nicola II abdica. Si forma il Governo Provvisorio (liberale-cadetto) e si ricostituisce il Soviet di Pietrogrado: nasce la "duplice autorità" (dvoe vlast\'e).',
    cat: 'svolta',
    tags: ['rivoluzione', 'governo provvisorio', 'soviet', 'abdicazione']
  },
  {
    id: 't09',
    anno: 1917,
    data: '3–16 aprile 1917',
    titolo: 'Lenin ritorna: le Tesi di Aprile',
    descrizione: 'Lenin torna dall\'esilio in Svizzera grazie al "vagone piombato" concesso dalla Germania (che scommette sulla destabilizzazione russa). Alla Stazione di Finlandia di Pietrogrado presenta le Tesi di Aprile: nessun sostegno al Governo Provvisorio, fine immediata della guerra, tutto il potere ai Soviet, nazionalizzazione della terra. Spiazzano anche molti bolscevichi, ma Lenin le impone come linea del partito.',
    cat: 'svolta',
    tags: ['bolscevichi', 'lenin', 'soviet', 'tesi di aprile']
  },
  {
    id: 't10',
    anno: 1917,
    data: 'giugno–luglio 1917',
    titolo: 'Giornate di Luglio',
    descrizione: 'I soldati rifiutano di partecipare all\'offensiva Kerensky (giugno). A luglio, manifestazioni spontanee a Pietrogrado chiedono il potere ai Soviet. Lenin consiglia cautela — i tempi non sono maturi. I bolscevichi vengono incolpati dell\'insurrezione; Lenin fugge in Finlandia; Trotsky viene arrestato. Il Governo Provvisorio di Kerensky sembra stabilizzarsi.',
    cat: 'politica',
    tags: ['bolscevichi', 'governo provvisorio', 'crisi', 'giornate di luglio']
  },
  {
    id: 't11',
    anno: 1917,
    data: 'agosto–settembre 1917',
    titolo: 'Affare Kornilov',
    descrizione: 'Il generale Lavr Kornilov tenta un colpo di stato militare per "ristabilire l\'ordine". Kerensky è costretto a chiedere aiuto ai Soviet e ai bolscevichi per fermare l\'avanzata. Le Guardie Rosse, armate dai bolscevichi, bloccano Kornilov. Il fallito golpe legittima i bolscevichi come difensori della rivoluzione e scredita definitivamente Kerensky. La svolta è decisiva.',
    cat: 'svolta',
    tags: ['bolscevichi', 'esercito', 'governo provvisorio', 'kornilov']
  },
  {
    id: 't12',
    anno: 1917,
    data: '25–26 ottobre 1917 (cal. giuliano)',
    titolo: 'Rivoluzione d\'Ottobre',
    descrizione: 'Nella notte tra il 25 e il 26 ottobre (7–8 novembre nel calendario gregoriano), le Guardie Rosse guidate da Trotsky occupano i punti strategici di Pietrogrado. L\'incrociatore Aurora spara un colpo a salve come segnale. Il Palazzo d\'Inverno viene preso. Il II Congresso dei Soviet approva il trasferimento del potere al Consiglio dei Commissari del Popolo (Sovnarkom), guidato da Lenin.',
    cat: 'svolta',
    tags: ['bolscevichi', 'soviet', 'aurora', 'palazzo d\'inverno', 'ottobre 1917']
  },
  {
    id: 't13',
    anno: 1917,
    data: '26–27 ottobre 1917',
    titolo: 'I Decreti del potere sovietico',
    descrizione: 'Il giorno dopo la Rivoluzione d\'Ottobre, il Congresso dei Soviet approva due decreti fondamentali: il Decreto sulla Pace (armistizio immediato, pace senza annessioni né indennità) e il Decreto sulla Terra (abolizione della proprietà privata terriera, distribuzione ai contadini). Seguirà il Decreto sull\'orario di lavoro (giornata di 8 ore).',
    cat: 'politica',
    tags: ['decreti', 'pace', 'terra', 'bolscevichi']
  },
  {
    id: 't14',
    anno: 1918,
    data: 'gennaio 1918',
    titolo: 'Scioglimento dell\'Assemblea Costituente',
    descrizione: 'L\'Assemblea Costituente si riunisce il 5 gennaio 1918: i SR (Socialisti Rivoluzionari) hanno la maggioranza. Il giorno dopo le Guardie Rosse sciolgono l\'assemblea con la forza — non si riunirà mai più. Per molti socialisti è il momento in cui i bolscevichi tradiscono la democrazia. Per Lenin è necessità: la rivoluzione non può essere votata via.',
    cat: 'politica',
    tags: ['assemblea costituente', 'democrazia', 'sr', 'bolscevichi']
  },
  {
    id: 't15',
    anno: 1918,
    data: '3 marzo 1918',
    titolo: 'Pace di Brest-Litovsk',
    descrizione: 'La Russia firma la pace separata con gli Imperi Centrali. I termini sono durissimi: la Russia cede Polonia, Finlandia, Estonia, Lettonia, Lituania, Ucraina, Bielorussia — oltre un quarto del territorio europeo. Lenin accetta l\'umiliazione per poter concentrare le forze sulla guerra civile. Trotsky aveva tentato la formula "né pace né guerra".',
    img: './img/brest-litovsk.png',
    imgCredito: 'Cartina: territori ceduti dalla Russia con la pace di Brest-Litovsk (3 marzo 1918) · Elaborazione propria',
    cat: 'guerra',
    tags: ['brest-litovsk', 'wwi', 'ucraina', 'pace']
  },
  {
    id: 't16',
    anno: 1918,
    data: '16–17 luglio 1918',
    titolo: 'Assassinio della famiglia Romanov',
    descrizione: 'Nicola II, la zarina Aleksandra, i cinque figli e quattro servitori vengono fucilati in una cantina a Ekaterinburg per ordine del Soviet locale (con probabile autorizzazione di Mosca) mentre l\'Esercito Bianco avanza. I corpi vengono bruciati e sepolti in una foresta. La notizia è tenuta segreta per settimane.',
    cat: 'violenza',
    tags: ['romanov', 'guerra civile', 'ekaterinburg']
  },
  {
    id: 't17',
    anno: 1918,
    data: '1918–1921',
    titolo: 'Comunismo di Guerra',
    descrizione: 'Per far fronte alla guerra civile, il governo bolscevico impone il "comunismo di guerra": nazionalizzazione di quasi tutta l\'industria, requisizioni forzate di grano dai contadini (prodrazvërstka), soppressione del mercato. La politica provoca disastri economici e una carestia devastante (1920-1922) con milioni di morti.',
    cat: 'economia',
    tags: ['comunismo di guerra', 'grano', 'carestia', 'nazionalizzazione']
  },
  {
    id: 't18',
    anno: 1918,
    data: '1918–1922',
    titolo: 'Guerra Civile: Rossi contro Bianchi',
    descrizione: 'L\'Armata Rossa (fondata e organizzata da Trotsky) affronta l\'Esercito Bianco sostenuto da 14 paesi stranieri. I Bianchi sono divisi tra Kolčak (Siberia), Denikin (sud), Wrangel (Crimea) e Judenič (nord-ovest). Il Terrore Rosso (Čeka) e il Terrore Bianco insanguinano il paese. Le divisioni interne dell\'Esercito Bianco e il suo mancato appello ai contadini ne decretano la sconfitta.',
    cat: 'guerra',
    tags: ['guerra civile', 'armata rossa', 'esercito bianco', 'intervento straniero']
  },
  {
    id: 't19',
    anno: 1921,
    data: 'marzo 1921',
    titolo: 'Rivolta di Kronstadt',
    descrizione: 'I marinai di Kronstadt — già eroi della Rivoluzione d\'Ottobre — si ribellano contro il regime bolscevico chiedendo libertà di parola, stampa, assemblea e "Soviet senza partiti". Lenin definisce la rivolta "più pericolosa della Guardia Bianca". Trotsky la reprime con l\'Armata Rossa sul ghiaccio del Golfo di Finlandia. Per molti socialisti libertari segna il tradimento definitivo della rivoluzione.',
    cat: 'rivolta',
    tags: ['kronstadt', 'repressione', 'marina', 'libertà']
  },
  {
    id: 't20',
    anno: 1921,
    data: 'marzo 1921',
    titolo: 'Nuova Politica Economica (NEP)',
    descrizione: 'In risposta alla crisi economica e alle rivolte, Lenin annuncia la NEP: abolizione delle requisizioni forzate, reintroduzione del commercio privato e dei mercati, concessione di piccole imprese ai privati. La NEP rilancia la produzione agricola ma crea tensioni ideologiche nel partito. Lenin la definisce "un passo indietro per fare due passi avanti".',
    cat: 'economia',
    tags: ['nep', 'mercato', 'contadini', 'riforma economica']
  },
  {
    id: 't21',
    anno: 1922,
    data: '30 dicembre 1922',
    titolo: 'Nascita dell\'URSS',
    descrizione: 'Il I Congresso dei Soviet dell\'URSS approva il Trattato sull\'Unione delle Repubbliche Socialiste Sovietiche. L\'URSS riunisce Russia, Ucraina, Bielorussia e Transcaucasia in uno Stato federale a partito unico. Nel frattempo Lenin, colpito da ictus ripetuti, si ritira progressivamente dall\'attività politica. Inizia la lotta per la sua successione.',
    cat: 'svolta',
    tags: ['urss', 'federazione', 'partito unico', 'unione']
  }
];
