var EVENTS = [
  {
    "id": "e1",
    "anno": "1939-09-01",
    "titolo": "Invasione della Polonia",
    "tipo": "bellico",
    "teatro": "europa_est",
    "lat": 52.2,
    "lng": 21.0,
    "desc": "La Wehrmacht invade la Polonia con 1,5 milioni di soldati. Bombardamenti su Varsavia. La Blitzkrieg travolge l'esercito polacco in poche settimane.",
    "morti": {
      "germania": 16000,
      "polonia": 70000
    }
  },
  {
    "id": "e2",
    "anno": "1939-09-17",
    "titolo": "URSS invade la Polonia orientale",
    "tipo": "bellico",
    "teatro": "europa_est",
    "lat": 51.5,
    "lng": 24.0,
    "desc": "In base al protocollo segreto Molotov-Ribbentrop l'URSS attacca la Polonia da est. La Polonia è divisa tra le due potenze.",
    "morti": {
      "urss": 3000,
      "polonia": 6000
    }
  },
  {
    "id": "e3",
    "anno": "1939-11-30",
    "titolo": "Guerra d'Inverno — URSS attacca la Finlandia",
    "tipo": "bellico",
    "teatro": "europa_nord",
    "lat": 60.3,
    "lng": 25.0,
    "desc": "Stalin invade la Finlandia. I finlandesi resistono strenuamente sulla Linea Mannerheim. L'URSS soffre enormi perdite prima di prevalere nel marzo 1940.",
    "morti": {
      "urss": 126000,
      "finlandia": 25000
    }
  },
  {
    "id": "e4",
    "anno": "1940-04-09",
    "titolo": "Invasione di Danimarca e Norvegia",
    "tipo": "bellico",
    "teatro": "europa_nord",
    "lat": 59.9,
    "lng": 10.7,
    "desc": "Operazione Weserübung: la Germania occupa Danimarca (in un giorno) e Norvegia (dopo 2 mesi di combattimenti). Primo impiego su larga scala di operazioni combinate.",
    "morti": {
      "germania": 5636,
      "alleati": 6600
    }
  },
  {
    "id": "e5",
    "anno": "1940-05-10",
    "titolo": "Invasione di Belgio, Olanda, Francia",
    "tipo": "bellico",
    "teatro": "europa_occ",
    "lat": 50.5,
    "lng": 4.5,
    "desc": "Operazione Gelb: i Panzer attraversano le Ardenne, considerato terreno impraticabile. Il fronte francese crolla. 338.000 soldati alleati evacuati a Dunkerque.",
    "morti": {
      "germania": 45000,
      "alleati": 360000
    }
  },
  {
    "id": "e6",
    "anno": "1940-06-10",
    "titolo": "L'Italia entra in guerra",
    "tipo": "diplomatico",
    "teatro": "mediterraneo",
    "lat": 41.9,
    "lng": 12.5,
    "desc": "Mussolini dichiara guerra a Francia e UK convinto di raccogliere i frutti della vittoria tedesca. 'Ho bisogno di qualche migliaio di morti per sedermi al tavolo della pace.'",
    "morti": {
      "italia": 0,
      "france": 0
    }
  },
  {
    "id": "e7",
    "anno": "1940-07-10",
    "titolo": "Battaglia d'Inghilterra",
    "tipo": "bellico",
    "teatro": "europa_occ",
    "lat": 51.5,
    "lng": -0.1,
    "desc": "La Luftwaffe tenta di conquistare la supremazia aerea sul Canale. La RAF resiste. Hitler rinuncia all'operazione Leone Marino. Churchill: 'Never was so much owed by so many to so few.'",
    "morti": {
      "germania": 1977,
      "uk": 1542
    }
  },
  {
    "id": "e8",
    "anno": "1941-02-14",
    "titolo": "Rommel in Nord Africa — Afrika Korps",
    "tipo": "bellico",
    "teatro": "nord_africa",
    "lat": 32.9,
    "lng": 13.2,
    "desc": "Hitler invia Rommel con l'Afrika Korps per salvare gli italiani in Libia. La 'Volpe del Deserto' contrattacca e ricaccia gli inglesi verso l'Egitto in poche settimane.",
    "morti": {
      "asse": 0,
      "uk": 0
    }
  },
  {
    "id": "e9",
    "anno": "1941-04-06",
    "titolo": "Invasione di Yugoslavia e Grecia",
    "tipo": "bellico",
    "teatro": "balcani",
    "lat": 44.8,
    "lng": 20.5,
    "desc": "La Wehrmacht sferra l'operazione Marita. Yugoslavia capitola in 11 giorni, Grecia in 3 settimane. La resistenza partigiana jugoslava (Tito) durerà tutta la guerra.",
    "morti": {
      "germania": 2559,
      "alleati": 20000
    }
  },
  {
    "id": "e10",
    "anno": "1941-06-22",
    "titolo": "Operazione Barbarossa",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 52.0,
    "lng": 30.0,
    "desc": "La più grande operazione militare della storia: 3 milioni di soldati tedeschi attaccano l'URSS su un fronte di 2900 km. Nei primi mesi cadono 3 milioni di prigionieri sovietici.",
    "morti": {
      "germania": 750000,
      "urss": 3000000
    }
  },
  {
    "id": "e11",
    "anno": "1941-09-08",
    "titolo": "Assedio di Leningrado",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 59.9,
    "lng": 30.3,
    "desc": "La Wehrmacht assedia Leningrado. L'assedio durerà 872 giorni (fino al gennaio 1944). Circa 800.000 civili moriranno di fame, freddo e bombardamenti.",
    "morti": {
      "urss": 800000,
      "germania": 200000
    }
  },
  {
    "id": "e12",
    "anno": "1941-12-07",
    "titolo": "Pearl Harbor — USA entrano in guerra",
    "tipo": "bellico",
    "teatro": "pacifico",
    "lat": 21.3,
    "lng": -157.9,
    "desc": "Attacco a sorpresa della marina giapponese alla base navale USA nelle Hawaii. 2403 americani uccisi, 4 corazzate affondate. L'indomani gli USA dichiarano guerra al Giappone.",
    "morti": {
      "giappone": 64,
      "usa": 2403
    }
  },
  {
    "id": "e13",
    "anno": "1942-01-20",
    "titolo": "Conferenza di Wannsee — Soluzione Finale",
    "tipo": "atrocita",
    "teatro": "europa",
    "lat": 52.4,
    "lng": 13.2,
    "desc": "15 alti funzionari nazisti si riuniscono in una villa a Wannsee, Berlino. In 90 minuti pianificano lo sterminio sistematico degli ebrei europei: la 'Soluzione Finale della questione ebraica'.",
    "morti": {
      "vittime": 6000000
    }
  },
  {
    "id": "e14",
    "anno": "1942-06-04",
    "titolo": "Battaglia di Midway",
    "tipo": "bellico",
    "teatro": "pacifico",
    "lat": 28.2,
    "lng": -177.4,
    "desc": "La marina americana, dopo aver decifrato i codici giapponesi, tende un'imboscata alla flotta di Yamamoto. Il Giappone perde 4 portaerei, 248 aerei e 3500 uomini. Svolta nel Pacifico.",
    "morti": {
      "usa": 307,
      "giappone": 3057
    }
  },
  {
    "id": "e15",
    "anno": "1942-08-23",
    "titolo": "Battaglia di Stalingrado",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 48.7,
    "lng": 44.5,
    "desc": "La 6ª Armata tedesca attacca Stalingrado. Combattimenti casa per casa, stanza per stanza. Il 19 novembre l'Armata Rossa scatta con l'operazione Urano: accerchia 300.000 tedeschi.",
    "morti": {
      "germania": 300000,
      "urss": 480000
    }
  },
  {
    "id": "e16",
    "anno": "1942-10-23",
    "titolo": "Seconda Battaglia di El-Alamein",
    "tipo": "bellico",
    "teatro": "nord_africa",
    "lat": 30.8,
    "lng": 28.9,
    "desc": "Montgomery sfonda le linee dell'Afrika Korps. Prima grande vittoria terrestre britannica. Churchill ordina di suonare le campane nelle chiese. Rommel si ritira verso la Tunisia.",
    "morti": {
      "uk": 13500,
      "asse": 20000
    }
  },
  {
    "id": "e17",
    "anno": "1943-02-02",
    "titolo": "Resa tedesca a Stalingrado",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 48.7,
    "lng": 44.5,
    "desc": "Il feldmaresciallo Paulus si arrende con 91.000 sopravvissuti della 6ª Armata (su 330.000). È il punto di svolta della guerra. La Wehrmacht non prenderà mai più l'iniziativa strategica a est.",
    "morti": {
      "germania": 230000,
      "urss": 1100000
    }
  },
  {
    "id": "e18",
    "anno": "1943-07-05",
    "titolo": "Battaglia di Kursk",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 51.7,
    "lng": 36.2,
    "desc": "La più grande battaglia di carri armati della storia. La Wehrmacht attacca con 2700 carri, l'URSS ne ha 3300. L'offensiva tedesca fallisce. Da qui l'Armata Rossa avanza senza fermarsi.",
    "morti": {
      "germania": 200000,
      "urss": 250000
    }
  },
  {
    "id": "e19",
    "anno": "1943-07-10",
    "titolo": "Sbarco in Sicilia — Operazione Husky",
    "tipo": "bellico",
    "teatro": "mediterraneo",
    "lat": 37.3,
    "lng": 14.0,
    "desc": "La più grande operazione anfibia della storia fino al D-Day: 160.000 uomini, 3000 navi. La Sicilia è conquistata in 38 giorni. Il 25 luglio Mussolini viene arrestato.",
    "morti": {
      "alleati": 22811,
      "asse": 29000
    }
  },
  {
    "id": "e20",
    "anno": "1943-09-08",
    "titolo": "Armistizio italiano",
    "tipo": "diplomatico",
    "teatro": "mediterraneo",
    "lat": 41.9,
    "lng": 12.5,
    "desc": "L'Italia firma l'armistizio con gli alleati. La Wehrmacht occupa immediatamente il nord e centro Italia. Mussolini, liberato dai paracadutisti tedeschi, fonda la Repubblica Sociale Italiana.",
    "morti": {}
  },
  {
    "id": "e21",
    "anno": "1944-06-06",
    "titolo": "D-Day — Sbarco in Normandia",
    "tipo": "bellico",
    "teatro": "europa_occ",
    "lat": 49.3,
    "lng": -0.6,
    "desc": "La più grande operazione militare della storia: 156.000 soldati alleati sbarcano sulle spiagge normanne (Utah, Omaha, Gold, Juno, Sword). Omaha Beach diventa il simbolo del sacrificio americano.",
    "morti": {
      "alleati": 10000,
      "germania": 4000
    }
  },
  {
    "id": "e22",
    "anno": "1944-06-22",
    "titolo": "Operazione Bagration — Sfondamento sovietico",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 54.0,
    "lng": 28.0,
    "desc": "L'URSS lancia la sua grande offensiva estiva. In 2 mesi distrugge il Gruppo Armate Centro tedesco: 350.000 prigionieri, 500km di avanzata. La più grande sconfitta della Wehrmacht.",
    "morti": {
      "germania": 350000,
      "urss": 178507
    }
  },
  {
    "id": "e23",
    "anno": "1944-08-01",
    "titolo": "Insurrezione di Varsavia",
    "tipo": "bellico",
    "teatro": "europa_est",
    "lat": 52.2,
    "lng": 21.0,
    "desc": "L'Armia Krajowa polacca insorge contro i tedeschi mentre l'Armata Rossa attende sulla Vistola. Dopo 63 giorni i tedeschi reprimono la rivolta. Varsavia è rasa al suolo. 200.000 civili uccisi.",
    "morti": {
      "polonia": 200000,
      "germania": 17000
    }
  },
  {
    "id": "e24",
    "anno": "1944-08-25",
    "titolo": "Liberazione di Parigi",
    "tipo": "bellico",
    "teatro": "europa_occ",
    "lat": 48.9,
    "lng": 2.3,
    "desc": "La 2ª Divisione Corazzata francese di Leclerc entra a Parigi. La guarnigione tedesca si arrende. De Gaulle sfila trionfalmente sugli Champs-Élysées. La Francia è di nuovo libera.",
    "morti": {
      "alleati": 600,
      "germania": 3200
    }
  },
  {
    "id": "e25",
    "anno": "1945-02-04",
    "titolo": "Conferenza di Yalta",
    "tipo": "diplomatico",
    "teatro": "europa",
    "lat": 44.5,
    "lng": 34.2,
    "desc": "Roosevelt, Churchill e Stalin si riuniscono in Crimea. Si decide il futuro dell'Europa del dopoguerra: la Germania sarà divisa in zone di occupazione, l'URSS entrerà in guerra contro il Giappone.",
    "morti": {}
  },
  {
    "id": "e26",
    "anno": "1945-04-16",
    "titolo": "Battaglia di Berlino",
    "tipo": "bellico",
    "teatro": "fronte_est",
    "lat": 52.5,
    "lng": 13.4,
    "desc": "2,5 milioni di soldati sovietici assaltano Berlino. Combattimenti ferocissimi. Il 30 aprile Hitler si suicida nel bunker. Il 2 maggio la città si arrende. 8 maggio: resa incondizionata della Germania.",
    "morti": {
      "urss": 81116,
      "germania": 458080
    }
  },
  {
    "id": "e27",
    "anno": "1945-08-06",
    "titolo": "Bomba atomica su Hiroshima",
    "tipo": "bellico",
    "teatro": "pacifico",
    "lat": 34.4,
    "lng": 132.5,
    "desc": "Il B-29 Enola Gay sgancia Little Boy su Hiroshima. 70.000 morti nell'esplosione, altrettanti nei mesi successivi. Il 9 agosto bomba su Nagasaki. Il 15 agosto il Giappone annuncia la resa.",
    "morti": {
      "civili_giappone": 200000
    }
  }
];
