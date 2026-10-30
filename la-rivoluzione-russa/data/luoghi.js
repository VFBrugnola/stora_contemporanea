/* data/luoghi.js — La Rivoluzione Russa */
const LUOGHI = [
  {
    id: 'l01',
    nome: 'Pietrogrado',
    sottotitolo: '(oggi San Pietroburgo)',
    lat: 59.934, lng: 30.335,
    cat: 'capitale',
    cat_label: 'Capitale',
    colore: '#C8991A',
    desc: 'Capitale dell\'Impero russo fino al 1918. Ribattezzata Pietrogrado nel 1914 (il nome tedesco "San Pietroburgo" era impopolare in tempo di guerra contro la Germania). Centro della Rivoluzione di Febbraio e di Ottobre, sede del Soviet di Pietrogrado e del Palazzo d\'Inverno. Nel marzo 1918 la capitale fu trasferita a Mosca per ragioni di sicurezza militare. Nel 1924 fu ribattezzata Leningrado in onore del defunto Lenin.'
  },
  {
    id: 'l02',
    nome: 'Mosca',
    sottotitolo: 'Capitale dal 1918',
    lat: 55.751, lng: 37.617,
    cat: 'capitale',
    cat_label: 'Capitale',
    colore: '#C8991A',
    desc: 'Antica capitale dei principi moscoviti, ritornò capitale della Russia nel marzo 1918. Sede del Cremlino e dei principali organi di governo bolscevico: il Sovnarkom, il Comitato Centrale del Partito, la Čeka (polizia politica). Più arretrata e lontana dal fronte rispetto a Pietrogrado, era considerata più sicura in caso di avanzata tedesca.'
  },
  {
    id: 'l03',
    nome: 'Kronstadt',
    sottotitolo: 'Base navale',
    lat: 59.990, lng: 29.764,
    cat: 'rivolta',
    cat_label: 'Rivolta',
    colore: '#7B5EA7',
    desc: 'Base navale sull\'isola di Kotlin nel Golfo di Finlandia. I marinai di Kronstadt parteciparono attivamente alla Rivoluzione d\'Ottobre. Nel marzo 1921 si ribellarono contro il regime bolscevico chiedendo libertà politiche e "Soviet senza partiti". La rivolta fu repressa con grande violenza dall\'Armata Rossa attraverso il ghiaccio del Golfo. Evento traumatico che spaccò il movimento socialista internazionale.'
  },
  {
    id: 'l04',
    nome: 'Ekaterinburg',
    sottotitolo: 'Morte dei Romanov',
    lat: 56.838, lng: 60.597,
    cat: 'violenza',
    cat_label: 'Tragedia storica',
    colore: '#8B1C14',
    desc: 'Città degli Urali dove la famiglia imperiale Romanov fu tenuta prigioniera nella "Casa a destinazione speciale" e fucilata nella cantina nella notte tra il 16 e il 17 luglio 1918 per ordine del Soviet locale, con probabile autorizzazione di Mosca. Nicola II, la zarina Aleksandra, i cinque figli (Olga, Tatiana, Marija, Anastasia e Aleksej) e quattro servitori furono assassinati. I corpi vennero bruciati e sepolti in una foresta.'
  },
  {
    id: 'l05',
    nome: 'Tsarskoe Selo',
    sottotitolo: 'Residenza imperiale',
    lat: 59.716, lng: 30.396,
    cat: 'zarismo',
    cat_label: 'Zarismo',
    colore: '#8B7355',
    desc: 'Residenza estiva imperiale a sud di Pietrogrado, sede del Palazzo di Caterina e del Palazzo Alessandro. La famiglia imperiale vi trascorse gli ultimi mesi di libertà prima dell\'arresto nel marzo 1917, dopo l\'abdicazione di Nicola II. Fu anche il luogo dove Rasputin esercitava la sua influenza sulla zarina.'
  },
  {
    id: 'l06',
    nome: 'Omsk',
    sottotitolo: 'Capitale dei Bianchi',
    lat: 54.989, lng: 73.368,
    cat: 'guerra-civile',
    cat_label: 'Guerra Civile',
    colore: '#607D8B',
    desc: 'Città della Siberia sudoccidentale, capitale del governo dell\'ammiraglio Kolčak durante la guerra civile (1918-1919). Principale base dell\'Esercito Bianco in Siberia, riconosciuta dagli Alleati come sede del "Supremo Reggente". Ripresa dall\'Armata Rossa nel novembre 1919, segnò il crollo del fronte siberiano bianco.'
  },
  {
    id: 'l07',
    nome: 'Odessa',
    sottotitolo: 'Rivolta della Potemkin',
    lat: 46.483, lng: 30.727,
    cat: 'rivolta',
    cat_label: 'Rivolta',
    colore: '#7B5EA7',
    desc: 'Porto sul Mar Nero. Teatro della rivolta della corazzata Potemkin (1905) e dei massacri di quel periodo. Durante la guerra civile fu occupata dagli eserciti interventisti francesi e greci (1918-1919). Importante porto commerciale conteso tra bolscevichi, ucraini e potenze straniere.'
  },
  {
    id: 'l08',
    nome: 'Kiev',
    sottotitolo: 'Capitale contesa',
    lat: 50.450, lng: 30.523,
    cat: 'guerra-civile',
    cat_label: 'Guerra Civile',
    colore: '#607D8B',
    desc: 'Capitale dell\'Ucraina, contesa tra bolscevichi, nazionalisti ucraini (Rada Centrale, poi Hetmanato), Esercito Bianco (Denikin) e forze polacche durante la guerra civile. Si stima che cambiò mano almeno 16 volte tra il 1917 e il 1920. La violenza fu enorme; i pogrom anti-ebraici in questo periodo causarono decine di migliaia di vittime.'
  },
  {
    id: 'l09',
    nome: 'Arcangelo',
    sottotitolo: 'Intervento alleato (nord)',
    lat: 64.543, lng: 40.540,
    cat: 'intervento',
    cat_label: 'Intervento straniero',
    colore: '#1565C0',
    desc: 'Porto nell\'Artico dove sbarcarono le forze alleate britanniche, americane e francesi nell\'agosto 1918, ufficialmente per proteggere i depositi di armi dalla Germania, di fatto per sostenere l\'Esercito Bianco contro i bolscevichi. L\'intervento fu ritirato nel 1919, ma lasciò una profonda diffidenza sovietica verso le potenze occidentali.'
  },
  {
    id: 'l10',
    nome: 'Vladivostok',
    sottotitolo: 'Intervento alleato (est)',
    lat: 43.116, lng: 131.883,
    cat: 'intervento',
    cat_label: 'Intervento straniero',
    colore: '#1565C0',
    desc: 'Porto sul Pacifico dove sbarcarono forze americane (7.000 uomini), giapponesi (72.000), britanniche e cecoslovacche. Il Giappone, con i suoi interessi in Estremo Oriente, occupò la regione fino al 1922. L\'intervento americano alimentò a lungo la narrativa sovietica dell\'"accerchiamento imperialista".'
  },
  {
    id: 'l11',
    nome: 'Brest-Litovsk',
    sottotitolo: 'Pace separata, marzo 1918',
    lat: 52.097, lng: 23.734,
    cat: 'pace',
    cat_label: 'Diplomazia',
    colore: '#2E7D32',
    desc: 'Città (oggi Brest, in Bielorussia) dove fu firmata la pace tra la Russia sovietica e gli Imperi Centrali il 3 marzo 1918. La Russia cedette: Polonia, Finlandia, Estonia, Lettonia, Lituania, Ucraina e Bielorussia — oltre un terzo della sua popolazione europea, un terzo delle sue terre agricole e l\'80% delle sue miniere di carbone. Lenin accettò le condizioni umilianti per poter concentrare le forze sulla guerra civile interna.'
  },
  {
    id: 'l12',
    nome: 'Guljajpole',
    sottotitolo: 'Quartier generale di Machno',
    lat: 47.683, lng: 36.267,
    cat: 'anarchia',
    cat_label: 'Anarchici',
    colore: '#4A148C',
    desc: 'Piccola città nell\'Ucraina meridionale, quartier generale di Nestor Machno e cuore della "Machnovščina". Da qui Machno coordinò il movimento anarchico-contadino che controllò una vasta area dell\'Ucraina meridionale tra il 1918 e il 1921, con tentativi di autogestione collettiva delle terre e libertà politiche.'
  }
];
