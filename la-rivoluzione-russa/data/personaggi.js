/* data/personaggi.js — La Rivoluzione Russa */
const PERSONAGGI = [
  {
    id: 'p01',
    nome: 'Nicola II',
    cognome: 'Romanov',
    anni: '1868 – 1918',
    ruolo: 'Ultimo zar di Russia',
    schieramento: 'zarismo',
    label: 'Zarismo',
    colore: '#8B7355',
    iniziali: 'NII',
    bio: 'Nikolaj Aleksandrovič Romanov fu zar di Russia dal 1894 al 1917. Personalità introversa e fortemente religiosa, si rivelò inadatto alle sfide del XX secolo. La sconfitta nella guerra russo-giapponese (1905), la rivoluzione del 1905, il disastro della Prima Guerra Mondiale e l\'influenza di Rasputin sulla zarina minarono progressivamente la sua autorità. Il 2 marzo 1917 abdicò in favore del fratello Michele, che rifiutò la corona. Fu tenuto prigioniero con la famiglia, trasferito a Ekaterinburg e fucilato nella notte tra il 16 e il 17 luglio 1918 insieme alla moglie, ai cinque figli e ai servitori.',
    dati_chiave: [
      { label: 'Periodo', val: '1894–1917 (regno)' },
      { label: 'Abdicazione', val: '2 marzo 1917' },
      { label: 'Fine', val: 'Fucilato a Ekaterinburg, 17 luglio 1918' }
    ]
  },
  {
    id: 'p02',
    nome: 'Vladimir Il\'ič',
    cognome: 'Lenin',
    anni: '1870 – 1924',
    ruolo: 'Capo del Partito Bolscevico, primo presidente del Sovnarkom',
    schieramento: 'bolscevichi',
    label: 'Bolscevichi',
    colore: '#A01C12',
    iniziali: 'VIL',
    bio: 'Figlio di un funzionario zarista, Lenin (pseudonimo di Vladimir Ul\'janov) si avvicinò al marxismo dopo l\'esecuzione del fratello Aleksandr per attentato allo zar. Nel Che fare? (1902) teorizzò il partito rivoluzionario di "professionisti della rivoluzione" come avanguardia del proletariato. Nel 1903 guidò la scissione tra bolscevichi e menscevichi. Le Tesi di Aprile (1917) segnarono la svolta verso il rovesciamento del Governo Provvisorio. Guidò la Rivoluzione d\'Ottobre e divenne il primo capo del governo sovietico. La NEP (1921) fu la sua ultima grande mossa prima degli ictus che lo incapacitarono. Morì nel gennaio 1924. Il suo corpo imbalsamato è ancora esposto nel Mausoleo di Mosca.',
    dati_chiave: [
      { label: 'Opera chiave', val: 'Che fare? (1902), Stato e rivoluzione (1917)' },
      { label: 'Tesi di Aprile', val: 'Aprile 1917' },
      { label: 'Fine', val: 'Morte per ictus, 21 gennaio 1924' }
    ]
  },
  {
    id: 'p03',
    nome: 'Lev Davidovič',
    cognome: 'Trotsky',
    anni: '1879 – 1940',
    ruolo: 'Presidente del Soviet (1905), Commissario alla Guerra (1918–1925)',
    schieramento: 'bolscevichi',
    label: 'Bolscevichi',
    colore: '#A01C12',
    iniziali: 'LDT',
    bio: 'Brillante oratore e teorico, Trotsky fu inizialmente menscevico e poi indipendente, prima di unirsi ai bolscevichi nell\'estate del 1917. Già nel 1905 aveva guidato il Soviet di Pietroburgo come presidente. Come capo del Comitato Militare Rivoluzionario, organizzò concretamente il colpo di stato di ottobre. Come Commissario alla Guerra (1918–25), costruì dal nulla l\'Armata Rossa, reclutando ex ufficiali zaristi e affiancandoli a commissari politici bolscevichi. Teorico della "rivoluzione permanente", fu sconfitto da Stalin nella lotta per la successione, espulso dal partito nel 1927, esiliato e infine assassinato in Messico nel 1940 da un agente stalinista (Ramón Mercader, con un piccone da ghiaccio).',
    dati_chiave: [
      { label: 'Teoria chiave', val: 'Rivoluzione permanente' },
      { label: 'Ruolo nel 1917', val: 'Organizzatore della Rivoluzione d\'Ottobre' },
      { label: 'Fine', val: 'Assassinato in Messico, 21 agosto 1940' }
    ]
  },
  {
    id: 'p04',
    nome: 'Aleksandr Fëdorovič',
    cognome: 'Kerenskij',
    anni: '1881 – 1970',
    ruolo: 'Ministro della Guerra, poi Presidente del Governo Provvisorio',
    schieramento: 'governo-provvisorio',
    label: 'Governo Provvisorio',
    colore: '#5D7A45',
    iniziali: 'AFK',
    bio: 'Avvocato e politico socialista moderato (SR), Kerensky fu la figura centrale del Governo Provvisorio dopo la rivoluzione di febbraio. Come Ministro della Guerra, insistette nel continuare la partecipazione alla guerra mondiale, scelta politicamente suicida. L\'Offensiva Kerensky (giugno 1917) si risolse in un disastro militare. L\'affare Kornilov (agosto) lo costrinse ad armarsi con i bolscevichi, accelerandone la caduta. La notte del 24-25 ottobre, mentre le Guardie Rosse occupavano Pietrogrado, abbandonò il Palazzo d\'Inverno in cerca di rinforzi che non arrivarono mai. Visse fino al 1970 negli Stati Uniti, dove insegnò storia alla Stanford University.',
    dati_chiave: [
      { label: 'Partito', val: 'Socialisti Rivoluzionari (SR)' },
      { label: 'Offensiva', val: 'Giugno–luglio 1917 (fallita)' },
      { label: 'Fine', val: 'Esiliato, morì a New York nel 1970' }
    ]
  },
  {
    id: 'p05',
    nome: 'Iosif Vissarionovič',
    cognome: 'Stalin',
    anni: '1878 – 1953',
    ruolo: 'Commissario alle Nazionalità, poi Segretario Generale del Partito',
    schieramento: 'bolscevichi',
    label: 'Bolscevichi',
    colore: '#A01C12',
    iniziali: 'IVS',
    bio: 'Iosif Džugašvili, georgiano di umilissime origini, fu rivoluzionario di professione fin dall\'adolescenza, specializzato in "espropriazioni" per finanziare il partito. Nel 1917 ricoprì un ruolo di secondo piano rispetto a Lenin e Trotsky. Come Commissario alle Nazionalità elaborò la politica dello Stato multietnico. Nominato Segretario Generale del partito nel 1922 per le sue capacità organizzative, Stalin usò questo ruolo burocratico per costruire la propria rete di fedeli. Lenin, negli ultimi mesi, scrisse un "Testamento" che consigliava di rimuoverlo. Il documento fu soppresso. Dopo la morte di Lenin (1924) Stalin sconfisse Trotsky, Zinoviev e poi Bucharin per diventare l\'unico padrone dell\'URSS.',
    dati_chiave: [
      { label: 'Ruolo nel 1922', val: 'Segretario Generale del Partito' },
      { label: 'Testamento di Lenin', val: 'Consigliava di rimuoverlo (1922–23)' },
      { label: 'Successione', val: 'Potere assoluto entro il 1929' }
    ]
  },
  {
    id: 'p06',
    nome: 'Georgij Valentinovič',
    cognome: 'Plechanov',
    anni: '1856 – 1918',
    ruolo: 'Padre del marxismo russo, poi menscevico',
    schieramento: 'menscevichi',
    label: 'Menscevichi',
    colore: '#C0392B',
    iniziali: 'GVP',
    bio: 'Primo teorico marxista russo di rilievo internazionale, Plechanov fondò nel 1883 il Gruppo per la Liberazione del Lavoro, primo nucleo socialdemocratico russo. Tradusse in russo le opere di Marx ed Engels, formando una generazione di rivoluzionari — tra cui Lenin. Nel 1903, al II Congresso, si schierò con i menscevichi contro Lenin sulla questione dell\'organizzazione del partito. Con la Prima Guerra Mondiale abbracciò posizioni "difensiste" (sostenere la Russia in guerra), allontanandosi dai rivoluzionari. Ritornato in Russia nel 1917, si oppose sia al Governo Provvisorio debole, sia alla Rivoluzione d\'Ottobre. Morì di tuberculosi nel 1918.',
    dati_chiave: [
      { label: 'Contributo chiave', val: 'Introduzione del marxismo in Russia' },
      { label: 'Posizione WWI', val: 'Difensista (pro-guerra)' },
      { label: 'Fine', val: 'Morì di TBC in Finlandia, maggio 1918' }
    ]
  },
  {
    id: 'p07',
    nome: 'Viktor Michajlovič',
    cognome: 'Černov',
    anni: '1873 – 1952',
    ruolo: 'Fondatore e capo del Partito Socialista Rivoluzionario (SR)',
    schieramento: 'sr',
    label: 'Socialisti Rivoluzionari',
    colore: '#2E7D32',
    iniziali: 'VMČ',
    bio: 'Fondatore e principale teorico del Partito Socialista Rivoluzionario (SR), il più grande partito russo nel 1917 per base di massa contadina. Černov fu Ministro dell\'Agricoltura nel Governo Provvisorio, dove tentò senza successo di avviare la riforma agraria. Fu eletto presidente dell\'Assemblea Costituente nel gennaio 1918, ma la prima (e unica) seduta fu sciolta dalle Guardie Rosse il giorno dopo. I SR si divisero: l\'ala sinistra (SR di Sinistra) collaborò inizialmente coi bolscevichi; l\'ala destra si unì all\'opposizione. Černov emigrò e morì a New York nel 1952.',
    dati_chiave: [
      { label: 'Partito', val: 'SR (Socialisti Rivoluzionari)' },
      { label: 'Assemblea Costituente', val: 'Presidente eletto, 5 gennaio 1918' },
      { label: 'Fine', val: 'Esiliato, morì a New York nel 1952' }
    ]
  },
  {
    id: 'p08',
    nome: 'Aleksandr Vasil\'evič',
    cognome: 'Kolčak',
    anni: '1874 – 1920',
    ruolo: '"Supremo Reggente" dell\'Esercito Bianco in Siberia',
    schieramento: 'bianchi',
    label: 'Esercito Bianco',
    colore: '#78909C',
    iniziali: 'AVK',
    bio: 'Ammiraglio dell\'Impero russo, eroe della guerra russo-giapponese e della Prima Guerra Mondiale. Dopo la Rivoluzione d\'Ottobre divenne il principale capo militare dell\'Esercito Bianco in Siberia, riconosciuto come "Supremo Reggente" dagli Alleati occidentali. Nel 1919 le sue forze avanzarono verso ovest fino a Ufa, minacciando seriamente il regime bolscevico. Ma la brutalità delle sue truppe, il rifiuto di promettere la terra ai contadini e la mancanza di coordinamento con gli altri fronti Bianchi ne decretarono la sconfitta. Nel gennaio 1920, abbandonato dagli Alleati e tradito dai cecoslovacchi, fu consegnato al Soviet di Irkutsk e fucilato sul ghiaccio del fiume Angara.',
    dati_chiave: [
      { label: 'Fronte', val: 'Siberia' },
      { label: 'Appoggio esterno', val: 'UK, Francia, USA, Giappone' },
      { label: 'Fine', val: 'Fucilato a Irkutsk, febbraio 1920' }
    ]
  },
  {
    id: 'p09',
    nome: 'Nestor Ivanovič',
    cognome: 'Machno',
    anni: '1888 – 1934',
    ruolo: 'Capo del movimento anarchico-contadino ucraino',
    schieramento: 'anarchici',
    label: 'Anarchici',
    colore: '#4A148C',
    iniziali: 'NIM',
    bio: 'Contadino ucraino di origini poverissime, Machno divenne il capo di un vasto movimento contadino anarchico nell\'Ucraina meridionale. La sua "Esercito Insurrezionale Rivoluzionario dell\'Ucraina" (i "Makhnovisti") combatté alternativamente e simultaneamente contro i Bianchi e i Rossi, controllando ampie aree con 40.000 uomini al picco e creando strutture di autogestione contadina. I bolscevichi lo usarono contro i Bianchi (soprattutto contro Wrangel in Crimea, 1920), poi lo attaccarono non appena Wrangel fu sconfitto. Machno emigrò in Francia nel 1921, dove visse in povertà fino alla morte nel 1934.',
    dati_chiave: [
      { label: 'Territorio', val: 'Ucraina meridionale (Guljajpole)' },
      { label: 'Forza massima', val: 'c. 40.000 uomini (1919)' },
      { label: 'Fine', val: 'Esiliato a Parigi, morì nel 1934' }
    ]
  }
];
