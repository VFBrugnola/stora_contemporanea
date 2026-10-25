// ============================================================
//  SHOAH — Luoghi della memoria
//  Fonte: "I principali Lager nazisti" — Prof. V.F. Brugnola
//  tipo: sterminio | lavoro | transito
//  vittime: solo vittime ebree (dove disponibile)
// ============================================================
var SHOAH = [

  // ── CAMPI DI STERMINIO ───────────────────────────────────
  {
    id: "auschwitz",
    tipo: "sterminio",
    nome: "Auschwitz-Birkenau",
    lat: 50.0343982,
    lng: 19.2097782,
    vittime: 1100000,
    apertura: "1940",
    chiusura: "1945",
    desc: "Il più grande campo di sterminio nazista, situato in Polonia occupata. Comprendeva tre campi principali: Auschwitz I (campo madre), Auschwitz II-Birkenau (sterminio di massa con camere a gas), Auschwitz III-Monowitz (lavoro forzato per IG Farben). Liberato dall'Armata Rossa il 27 gennaio 1945, data oggi commemorata come Giorno della Memoria."
  },
  {
    id: "treblinka",
    tipo: "sterminio",
    nome: "Treblinka",
    lat: 52.6585853,
    lng: 22.0178984,
    vittime: 800000,
    apertura: "1942",
    chiusura: "1943",
    desc: "Secondo campo di sterminio per numero di vittime. Operativo nell'ambito dell'Operazione Reinhard, riceveva deportati quasi esclusivamente dal ghetto di Varsavia e da altri ghetti polacchi. Fu smantellato nel 1943 dopo la rivolta dei prigionieri nell'agosto dello stesso anno."
  },
  {
    id: "belzec",
    tipo: "sterminio",
    nome: "Bełżec",
    lat: 50.384945,
    lng: 23.4381109,
    vittime: 517000,
    apertura: "1942",
    chiusura: "1943",
    desc: "Primo campo dell'Operazione Reinhard a entrare in funzione. Le vittime provenivano principalmente dalla Galizia e dal distretto di Lublino. Quasi nessun sopravvissuto: si stimano non più di sette o otto persone scampate su oltre 430.000 deportati."
  },
  {
    id: "sobibor",
    tipo: "sterminio",
    nome: "Sobibór",
    lat: 51.4771754,
    lng: 23.6374703,
    vittime: 250000,
    apertura: "1942",
    chiusura: "1943",
    desc: "Campo dell'Operazione Reinhard nel distretto di Lublino. Il 14 ottobre 1943 i prigionieri organizzarono una rivolta: uccisero undici ufficiali delle SS e circa 300 deportati riuscirono a fuggire. Il campo fu immediatamente smantellato dai nazisti."
  },
  {
    id: "chelmno",
    tipo: "sterminio",
    nome: "Chełmno",
    lat: 52.1540096,
    lng: 18.7229999,
    vittime: 267000,
    apertura: "1941",
    chiusura: "1945",
    desc: "Primo campo di sterminio nazista a entrare in funzione (dicembre 1941). Le vittime venivano uccise in camion a gas mobili, non in camere a gas fisse. Riceveva deportati principalmente dal Warthegau e dal ghetto di Łódź."
  },
  {
    id: "stutthof",
    tipo: "sterminio",
    nome: "Stutthof",
    lat: 54.328223,
    lng: 19.153981,
    vittime: 65000,
    apertura: "1939",
    chiusura: "1945",
    desc: "Primo campo costruito sul territorio polacco (settembre 1939), inizialmente campo di transito e lavoro, poi dotato di camera a gas. Le vittime includevano ebrei, polacchi e prigionieri di guerra sovietici. Liberato dall'Armata Rossa nel maggio 1945."
  },
  {
    id: "sajmiste",
    tipo: "sterminio",
    nome: "Sajmište",
    lat: 44.8132485,
    lng: 20.443622,
    vittime: 23000,
    apertura: "1941",
    chiusura: "1944",
    desc: "Campo nei pressi di Belgrado, sulla sponda bosniaca della Sava. Inizialmente campo di concentramento per ebrei e partigiani serbi, fu poi utilizzato per lo sterminio con camion a gas. Unico campo di sterminio nell'Europa sudorientale al di fuori della Polonia."
  },
  {
    id: "mauthausen",
    tipo: "sterminio",
    nome: "Mauthausen",
    lat: 48.2571254,
    lng: 14.5001374,
    vittime: 95000,
    apertura: "1938",
    chiusura: "1945",
    desc: "Campo principale in Austria, classificato di grado III (il più duro) dal sistema concentrazionario nazista. Celebre per la cava di granito dove i prigionieri erano costretti a lavorare in condizioni letali. Includeva un'ampia rete di sottocampi in Austria e Germania."
  },
  {
    id: "varsavia",
    tipo: "sterminio",
    nome: "Ghetto di Varsavia",
    lat: 52.2296756,
    lng: 21.0122287,
    vittime: 200000,
    apertura: "1942",
    chiusura: "1944",
    desc: "Il ghetto di Varsavia fu il più grande d'Europa: vi furono rinchiusi oltre 400.000 ebrei. Tra il 1942 e il 1943 la maggior parte fu deportata a Treblinka. Nell'aprile 1943 scoppiò la celebre rivolta del ghetto, repressa nel sangue dalle SS. Le vittime ebree nel ghetto stesso furono circa 200.000."
  },

  // ── CAMPI DI LAVORO / CONCENTRAMENTO ────────────────────
  {
    id: "buchenwald",
    tipo: "lavoro",
    nome: "Buchenwald",
    lat: 51.0215077,
    lng: 11.2492388,
    vittime: 47000,
    apertura: "1937",
    chiusura: "1945",
    desc: "Uno dei principali campi di concentramento tedeschi, situato vicino a Weimar. Non aveva camere a gas permanenti, ma i prigionieri morivano per lavoro forzato, fame e esperimenti medici. Tra i sopravvissuti illustri: Elie Wiesel e Jorge Semprún. Liberato dalle truppe americane l'11 aprile 1945."
  },
  {
    id: "dachau",
    tipo: "lavoro",
    nome: "Dachau",
    lat: 48.270124,
    lng: 11.4682724,
    vittime: 31951,
    apertura: "1933",
    chiusura: "1945",
    desc: "Primo campo di concentramento nazista, aperto nel marzo 1933, poche settimane dopo l'ascesa di Hitler al potere. Servì come modello per tutti i campi successivi. Liberato dalle truppe americane il 29 aprile 1945, fu il primo campo visto dai giornalisti occidentali."
  },
  {
    id: "flossenburg",
    tipo: "lavoro",
    nome: "Flossenbürg",
    lat: 49.732903,
    lng: 12.3484433,
    vittime: 52000,
    apertura: "1938",
    chiusura: "1945",
    desc: "Campo di concentramento in Baviera, costruito per sfruttare la cava di granito locale. Tra le vittime, il teologo Dietrich Bonhoeffer, impiccato qui nell'aprile 1945 per aver partecipato alla resistenza contro Hitler. Includeva oltre 90 sottocampi."
  },
  {
    id: "neuengamme",
    tipo: "lavoro",
    nome: "Neuengamme",
    lat: 53.4351259,
    lng: 10.2207582,
    vittime: 55000,
    apertura: "1938",
    chiusura: "1945",
    desc: "Campo di concentramento vicino ad Amburgo, costruito per produrre mattoni per i grandi progetti architettonici di Speer. I prigionieri lavoravano nelle cave di argilla e nelle fabbriche d'armamenti. Includeva oltre 85 sottocampi in tutta la Germania settentrionale."
  },
  {
    id: "sachsenhausen",
    tipo: "lavoro",
    nome: "Sachsenhausen",
    lat: 52.5172234,
    lng: 13.377556,
    vittime: 100000,
    apertura: "1936",
    chiusura: "1945",
    desc: "Campo di concentramento vicino a Berlino, progettato come modello ideale del sistema concentrazionario. Sede del comando dell'Ispettorato dei campi. Vi furono internati prigionieri politici, ebrei, omosessuali e prigionieri di guerra sovietici."
  },
  {
    id: "ravensbruck",
    tipo: "lavoro",
    nome: "Ravensbrück",
    lat: 53.1911789,
    lng: 13.1640483,
    vittime: 90000,
    apertura: "1939",
    chiusura: "1945",
    desc: "Principale campo di concentramento femminile del Reich, a circa 90 km a nord di Berlino. Vi furono internate oltre 130.000 donne di 40 nazionalità diverse. Tristemente noto per gli esperimenti medici condotti dal Dr. Karl Gebhardt su prigioniere polacche."
  },

  // ── CAMPI DI TRANSITO ────────────────────────────────────
  {
    id: "bergen-belsen",
    tipo: "transito",
    nome: "Bergen-Belsen",
    lat: 52.760154,
    lng: 9.9085115,
    vittime: 63000,
    apertura: "1940",
    chiusura: "1945",
    desc: "Nato come campo di prigionia per soldati alleati, divenne campo di concentramento e poi di transito per ebrei. Nell'inverno 1944-45 fu sopraffatto dall'arrivo di marce della morte: Anne Frank vi morì nel febbraio 1945. Liberato dai britannici il 15 aprile 1945, era in condizioni apocalittiche."
  },
  {
    id: "drancy",
    tipo: "transito",
    nome: "Drancy",
    lat: 48.924298,
    lng: 2.445676,
    vittime: 0,
    apertura: "1941",
    chiusura: "1944",
    desc: "Principale campo di transito francese, situato in un sobborgo di Parigi. Gestito inizialmente dalla polizia francese, poi dalle SS dal 1943. Da qui partirono 67 convogli verso Auschwitz: circa 75.000 ebrei deportati, meno del 3% sopravvisse."
  },
  {
    id: "fossoli",
    tipo: "transito",
    nome: "Fossoli",
    lat: 44.8221033,
    lng: 10.8912659,
    vittime: 67,
    apertura: "1944",
    chiusura: "1944",
    desc: "Campo di transito in provincia di Modena, principale punto di smistamento degli ebrei italiani verso i lager. Da qui partì il convoglio del 22 febbraio 1944 su cui viaggiava Primo Levi, diretto ad Auschwitz. Levi ne scrisse in apertura di Se questo è un uomo."
  },
  {
    id: "bolzano",
    tipo: "transito",
    nome: "Bolzano",
    lat: 46.4982953,
    lng: 11.3547582,
    vittime: 60,
    apertura: "1944",
    chiusura: "1945",
    desc: "Campo di transito e lavoro nel capoluogo altoatesino, gestito dalle SS nella Zona d'operazione delle Prealpi. Secondo campo di transito italiano per ebrei e partigiani, dopo Fossoli. Vi transitarono circa 11.000 persone, dirette prevalentemente a Mauthausen."
  },
  {
    id: "risiera",
    tipo: "transito",
    nome: "Risiera di San Sabba",
    lat: 45.6209031,
    lng: 13.7891963,
    vittime: 5000,
    apertura: "1943",
    chiusura: "1945",
    desc: "Unico campo con forno crematorio sul territorio italiano, ricavato in una ex riseria a Trieste. Gestito dalle SS nella Zona d'operazione del Litorale Adriatico. Vi furono trucidati partigiani, ostaggi ed ebrei. Monumento nazionale dal 1965."
  },
  {
    id: "afragola",
    tipo: "transito",
    nome: "Afragola",
    lat: 40.9230386,
    lng: 14.309304,
    vittime: 0,
    apertura: "1943",
    chiusura: "1943",
    desc: "Campo di smistamento nei pressi di Napoli, attivo nell'ottobre 1943 durante l'occupazione tedesca della Campania. Utilizzato per la concentrazione di ebrei e perseguitati politici in attesa di deportazione verso i lager del nord."
  },
  {
    id: "sparanise",
    tipo: "transito",
    nome: "Sparanise",
    lat: 41.1933964,
    lng: 14.099336,
    vittime: 0,
    apertura: "1942",
    chiusura: "1945",
    desc: "Campo di prigionia e smistamento in provincia di Caserta, nella Campania occupata. Utilizzato durante l'occupazione tedesca come punto di raccolta per prigionieri di guerra alleati e civili deportati verso il nord."
  }
];
