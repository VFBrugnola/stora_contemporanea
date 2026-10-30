/* data/fazioni.js — La Rivoluzione Russa */
const FAZIONI = [
  {
    id: 'f01',
    nome: 'Bolscevichi',
    sottotitolo: 'POSDR-b → Partito Comunista (1918)',
    colore_hex: '#A01C12',
    colore_bg: '#FCE8E6',
    schieramento: 'sinistra-rivoluzionaria',
    periodo: '1903 – presente (come PC)',
    posizione: 'Estrema sinistra — marxismo-leninismo',
    base_sociale: 'Operai industriali, intellettuali rivoluzionari, soldati',
    leader: 'Lenin, Trotsky, Stalin, Zinov\'ev, Kamenev, Bucharin',
    posizioni: [
      'Rivoluzione socialista immediata, senza fasi intermedie borghesi',
      'Tutto il potere ai Soviet (controllati dal partito)',
      'Pace senza annessioni e conquiste (inizialmente)',
      'Nazionalizzazione della terra, delle banche e dei mezzi di produzione',
      'Partito centralizzato di avanguardia ("centralismo democratico")'
    ],
    esito: 'Vincitori della Rivoluzione d\'Ottobre e della guerra civile. Nel 1918 diventano Partito Comunista (bolscevichi) — PC(b)R. Partito unico dell\'URSS dal 1921.'
  },
  {
    id: 'f02',
    nome: 'Menscevichi',
    sottotitolo: 'POSDR-m',
    colore_hex: '#C0392B',
    colore_bg: '#FDECEA',
    schieramento: 'sinistra-democratica',
    periodo: '1903 – 1921',
    posizione: 'Sinistra moderata — marxismo democratico',
    base_sociale: 'Operai qualificati, intellettuali, minoranze nazionali (Georgia)',
    leader: 'Martov, Plechanov, Dan, Tsereteli, Čheidze',
    posizioni: [
      'Alleanza con le forze democratiche borghesi nella fase transitoria',
      'Partecipazione al Governo Provvisorio',
      'Assemblea Costituente come legittimazione democratica',
      'Partito di massa aperto (contro il "vanguardismo" leninista)',
      'Continuazione difensiva della guerra (ala "difensista")'
    ],
    esito: 'Marginalizzati dopo la Rivoluzione d\'Ottobre. Presenti nell\'Assemblea Costituente (sciolta nel gennaio 1918). Repressi e sciolti nel 1921. La maggioranza emigrò. Il menscevismo fu liquidato dalla forza, non dal dibattito.'
  },
  {
    id: 'f03',
    nome: 'Socialisti Rivoluzionari (SR)',
    sottotitolo: 'Partito Socialista Rivoluzionario',
    colore_hex: '#2E7D32',
    colore_bg: '#E8F5E9',
    schieramento: 'sinistra-agraria',
    periodo: '1901 – 1921',
    posizione: 'Sinistra — socialismo agrario',
    base_sociale: 'Contadini (la grande maggioranza della Russia), intellettuali, impiegati',
    leader: 'Černov, Kerensky; Spiridonova (ala sinistra)',
    posizioni: [
      '"Socializzazione della terra" (gestione comunitaria, non nazionalizzazione)',
      'Assemblea Costituente come organo sovrano',
      'Democrazia socialista pluripartitica',
      'Il contadino come soggetto rivoluzionario accanto all\'operaio',
      'Uso del terrorismo individuale contro funzionari zaristi (ala combattente)'
    ],
    esito: 'Partito più votato nell\'Assemblea Costituente (novembre 1917, circa 40%). L\'Assemblea fu sciolta dai bolscevichi dopo un giorno. Gli SR di Sinistra collaborarono brevemente col governo bolscevico, poi repressi nel 1918. Gli SR di Destra combatterono nella guerra civile col fronte bianco.'
  },
  {
    id: 'f04',
    nome: 'Cadetti (KD)',
    sottotitolo: 'Partito Costituzionale Democratico',
    colore_hex: '#1565C0',
    colore_bg: '#E3F2FD',
    schieramento: 'liberali',
    periodo: '1905 – 1917',
    posizione: 'Centro-liberale — liberalismo costituzionale',
    base_sociale: 'Professionisti, industriali, intellettuali liberali, nobiltà progressista',
    leader: 'Pavel Miljukov, principe L\'vov',
    posizioni: [
      'Monarchia costituzionale poi repubblica parlamentare democratica',
      'Libertà civili e stato di diritto',
      'Continuazione della guerra fino alla vittoria',
      'Conservazione dell\'unità territoriale dell\'Impero',
      'Riforme sociali graduali senza rivoluzione'
    ],
    esito: 'Guidarono il Governo Provvisorio (L\'vov prima, Kerensky poi). Dopo la Rivoluzione d\'Ottobre sostenevano l\'Esercito Bianco. Dichiarati fuorilegge dai bolscevichi nel novembre 1917. La maggior parte emigrò.'
  },
  {
    id: 'f05',
    nome: 'Esercito Bianco',
    sottotitolo: 'Forze controrivoluzionarie (1917–1922)',
    colore_hex: '#546E7A',
    colore_bg: '#ECEFF1',
    schieramento: 'controrivoluzione',
    periodo: '1917 – 1922',
    posizione: 'Conservatori, nazionalisti, liberali, monarchici — coalizione eterogenea',
    base_sociale: 'Ufficiali zaristi, grande borghesia, nobiltà, contadini proprietari, intervento straniero',
    leader: 'Kolčak (Siberia), Denikin (sud), Wrangel (Crimea), Judenič (nord-ovest)',
    posizioni: [
      'Sconfitta dei bolscevichi e ripristino dell\'ordine',
      'Mantenimento della Russia come grande potenza unita',
      'Indecisione sulla forma di governo (monarchia vs. repubblica)',
      'Mancata soluzione della questione agraria (rifiuto di ridistribuire la terra)',
      'Appoggiati da 14 paesi stranieri (UK, Francia, USA, Giappone, Cecoslovacchia…)'
    ],
    esito: 'Sconfitti dall\'Armata Rossa. Le cause principali: divisioni interne, mancanza di un programma agrario attraente per i contadini, brutalità delle truppe bianche, coordinamento militare insufficiente tra i diversi fronti.'
  },
  {
    id: 'f06',
    nome: 'Armata Rossa',
    sottotitolo: 'Forza armata del governo sovietico',
    colore_hex: '#C0271C',
    colore_bg: '#FFEBEE',
    schieramento: 'bolscevichi',
    periodo: '1918 – 1991',
    posizione: 'Forza militare del Partito Comunista',
    base_sociale: 'Operai, contadini coscritti, ex ufficiali zaristi ("specialisti militari")',
    leader: 'Trotsky (Commissario alla Guerra), Tuchačevskij, Frunze, Budënnyj',
    posizioni: [
      'Difesa del potere sovietico contro bianchi e intervento straniero',
      'Trotsky: recluta ex ufficiali zaristi come "specialisti militari"',
      'Commissari politici bolscevichi affiancano ogni comandante militare',
      'Disciplina ferrea (pena di morte per diserzione e codardia)',
      'Struttura professionale contro la milizia volontaria di sinistra'
    ],
    esito: 'Vinse la guerra civile (1918-1922). Raggiunse 5,5 milioni di uomini al picco nel 1920. Divenne il nucleo delle forze armate dell\'URSS. La scelta di Trotsky di arruolare ex ufficiali zaristi fu controversa ma decisiva per la vittoria.'
  },
  {
    id: 'f07',
    nome: 'Anarchici (Machnovščina)',
    sottotitolo: 'Esercito Insurrezionale Rivoluzionario dell\'Ucraina',
    colore_hex: '#4A148C',
    colore_bg: '#EDE7F6',
    schieramento: 'anarchici',
    periodo: '1918 – 1921',
    posizione: 'Anarchismo — né Stato né partito',
    base_sociale: 'Contadini ucraini, operai, comunità ebraiche dell\'Ucraina meridionale',
    leader: 'Nestor Machno, Vsevolod Eichenbaum (Volin)',
    posizioni: [
      'Abolizione immediata di ogni forma di Stato',
      'Autogestione contadina della terra (senza esproprio statale)',
      'Soviet locali liberi da ogni partito',
      'Libertà di stampa, parola e assemblea',
      'Guerra su due fronti: contro Bianchi E contro Rossi'
    ],
    esito: 'Combatterono contro Denikin e Wrangel (alleandosi taticamente coi Rossi) e contro l\'Armata Rossa. Sconfitti dai bolscevichi nel 1921, subito dopo aver contribuito alla vittoria contro Wrangel in Crimea. Machno emigrò in Francia. La Machnovščina rimane il più grande esperimento anarchico della storia.'
  }
];
