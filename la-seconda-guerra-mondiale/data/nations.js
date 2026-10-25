var NATIONS = [
  {
    "id": "germany",
    "name": "Germania",
    "schieramento": "asse",
    "desc": {
      "1939": "La Germania nazista sotto Hitler ha già annesso Austria e Cecoslovacchia. Il 1° settembre 1939 invade la Polonia, scatenando la Seconda Guerra Mondiale. La Wehrmacht è l'esercito più moderno d'Europa.",
      "1940": "La Blitzkrieg travolge Europa occidentale. In 6 settimane cade la Francia. La Germania controlla direttamente o indirettamente tutta l'Europa continentale tranne URSS, Spagna e Svizzera.",
      "1941": "L'operazione Barbarossa (22 giugno) lancia 3 milioni di soldati tedeschi contro l'URSS. Avanzate enormi, ma Mosca non cade. Il Reich ha dichiarato guerra agli USA dopo Pearl Harbor.",
      "1942": "La Wehrmacht raggiunge il Caucaso e il Volga. Stalingrado diventa il simbolo della resistenza sovietica. In Nord Africa Rommel avanza verso l'Egitto.",
      "1943": "La catastrofe di Stalingrado (febbraio). 300.000 soldati tedeschi perduti. La Wehrmacht passa sulla difensiva all'est. Sconfitta in Tunisia. Sbarco alleato in Sicilia.",
      "1944": "Crollo del Fronte Est dopo l'operazione Bagration. D-Day in Normandia. La Germania combatte su tutti i fronti. I bombardamenti alleati devastano le città.",
      "1945": "La Germania è invasa da est e da ovest. Hitler si suicida il 30 aprile. La resa incondizionata è firmata l'8 maggio 1945."
    },
    "perdite": {
      "militari": 5300000,
      "civili": 3800000
    }
  },
  {
    "id": "italy",
    "name": "Italia",
    "schieramento": "asse",
    "desc": {
      "1939": "L'Italia fascista è in 'non belligeranza'. Mussolini ha firmato il Patto d'Acciaio con Hitler ma non è pronta per la guerra. Attende di vedere come evolve il conflitto.",
      "1940": "Il 10 giugno Mussolini dichiara guerra a Francia e UK, convinto di un'imminente vittoria tedesca. L'esercito italiano è mal equipaggiato e subisce disastri in Grecia e Nord Africa.",
      "1941": "Sconfitta italiana in Nord Africa: Rommel arriva con l'Afrika Korps per salvare la situazione. In Grecia i tedeschi devono intervenire. L'Italia entra in guerra contro l'URSS.",
      "1942": "Rommel avanza verso l'Egitto. L'ARMIR (Armata Italiana in Russia) soffre enormemente sul Don. Crescente difficoltà della guerra.",
      "1943": "Sbarco alleato in Sicilia (10 luglio). Il 25 luglio il Gran Consiglio vota la sfiducia a Mussolini, che viene arrestato. L'8 settembre armistizio con gli alleati. L'Italia viene divisa: nord occupata dai tedeschi, sud con gli alleati.",
      "1944": "Il nord Italia è la Repubblica Sociale Italiana (RSI), Stato fantoccio di Hitler con Mussolini liberato. La Resistenza partigiana è attiva. Gli alleati avanzano lentamente lungo la Penisola.",
      "1945": "Il 25 aprile insurrezione partigiana. Il 28 aprile Mussolini è catturato e fucilato. L'Italia è liberata."
    },
    "perdite": {
      "militari": 319000,
      "civili": 153000
    }
  },
  {
    "id": "ussr",
    "name": "URSS",
    "schieramento": "neutrale",
    "desc": {
      "1939": "L'URSS firma il Patto Molotov-Ribbentrop con la Germania (agosto 1939). Il 17 settembre invade la Polonia orientale. Poi attacca la Finlandia (Guerra d'Inverno). Stalin si sente al sicuro.",
      "1940": "L'URSS annette gli Stati baltici (Estonia, Lettonia, Lituania) e la Bessarabia romena. Stalin non crede agli avvertimenti di un'imminente invasione tedesca.",
      "1941": "Il 22 giugno la Germania sferra Barbarossa. L'Armata Rossa è colta di sorpresa: enormi perdite. In estate i tedeschi avanzano centinaia di km. Leningrado assediata. Mosca minacciata. Ma la resistenza tiene.",
      "1942": "I tedeschi avanzano verso il Caucaso e Stalingrado. La città diventa un simbolo. Combattimenti casa per casa. Stalin ordina: 'Né un passo indietro'.",
      "1943": "Controffensiva a Stalingrado (operazione Urano, nov. 1942). La 6ª Armata tedesca è distrutta. L'URSS prende l'iniziativa. Battaglia di Kursk (luglio): la più grande battaglia di carri armati della storia.",
      "1944": "Operazione Bagration (estate): la Wehrmacht è travolta sul Fronte Est. L'Armata Rossa libera Bielorussia, Ucraina e avanza nei Balcani. Varsavia si ribella (agosto) ma l'URSS aspetta.",
      "1945": "L'Armata Rossa attraversa la Vistola, entra in Germania. Conquista di Berlino (aprile-maggio). L'URSS ha perso 26-27 milioni di persone: la perdita umana più grande della guerra."
    },
    "perdite": {
      "militari": 8700000,
      "civili": 17000000
    }
  },
  {
    "id": "uk",
    "name": "Gran Bretagna",
    "schieramento": "alleati",
    "desc": {
      "1939": "Il 3 settembre UK e Francia dichiarano guerra alla Germania dopo l'invasione della Polonia. Il primo ministro Chamberlain lascia il posto a Churchill (maggio 1940).",
      "1940": "Dopo Dunkerque il UK è solo contro la Germania. Churchill rifiuta qualsiasi negoziato. La Battaglia d'Inghilterra salva il paese dall'invasione. Blitz: Londra è bombardata ogni notte.",
      "1941": "UK combatte in Nord Africa, Grecia, Mediterraneo. L'entrata in guerra di URSS e USA cambia le prospettive. Churchill stringe alleanze con Stalin e Roosevelt.",
      "1942": "El-Alamein (ottobre-novembre): prima grande vittoria britannica contro Rommel. Montgomery diventa un eroe nazionale. Nel Pacifico cadono Singapore e Hong Kong.",
      "1943": "Vittoria in Tunisia. Sbarco in Sicilia e poi in Italia. Conferenza di Teheran con Roosevelt e Stalin per pianificare il D-Day.",
      "1944": "D-Day (6 giugno): le forze alleate sbarcano in Normandia. Liberazione di Parigi. Le bombe V1 e V2 tedesche colpiscono Londra.",
      "1945": "Vittoria in Europa (8 maggio). Nel Pacifico il UK contribuisce alla guerra contro il Giappone. Fine della guerra (2 settembre 1945)."
    },
    "perdite": {
      "militari": 383800,
      "civili": 67100
    }
  },
  {
    "id": "france",
    "name": "Francia",
    "schieramento": "alleati",
    "desc": {
      "1939": "La Francia dichiara guerra alla Germania il 3 settembre. L'esercito si attesta sulla Linea Maginot. Drôle de Guerre: mesi di inattività sul fronte occidentale.",
      "1940": "Maggio-giugno: la Germania aggira la Maginot attraverso le Ardenne. Il fronte crolla. Evacuazione di Dunkerque. L'armistizio del 22 giugno divide la Francia: il nord è occupato, il sud è la Francia di Vichy.",
      "1941": "La Francia di Vichy collabora con la Germania. La Francia Libera di de Gaulle combatte al fianco degli alleati dall'esilio. L'impero coloniale è diviso tra Vichy e la Francia Libera.",
      "1942": "Sbarco alleato nel Nordafrica francese (novembre). La Germania occupa anche la zona di Vichy. La Resistenza cresce.",
      "1943": "La Resistenza è attiva in tutta la Francia. De Gaulle consolida il controllo sulla Francia Libera ad Algeri.",
      "1944": "D-Day (6 giugno): gli alleati sbarcano in Normandia. Il 25 agosto Parigi è liberata. De Gaulle entra trionfalmente nella capitale.",
      "1945": "La Francia partecipa alla vittoria finale. Ottiene un seggio permanente nel Consiglio di Sicurezza ONU e zona di occupazione in Germania."
    },
    "perdite": {
      "militari": 217600,
      "civili": 350000
    }
  },
  {
    "id": "usa",
    "name": "Stati Uniti",
    "schieramento": "neutrale",
    "desc": {
      "1939": "Gli USA sono neutrali ma Roosevelt è favorevole agli alleati. Il Congresso approva la vendita di armi a pagamento (Cash and Carry).",
      "1940": "Roosevelt fa rieletto per un terzo mandato. Lend-Lease: gli USA forniscono armi a UK e poi URSS praticamente gratis. Ancora ufficialmente neutrali.",
      "1941": "7 dicembre: attacco giapponese a Pearl Harbor. L'8 dicembre gli USA dichiarano guerra al Giappone. Hitler dichiara guerra agli USA il 11 dicembre. L'America entra nel conflitto.",
      "1942": "Mobilitazione industriale senza precedenti: 'Arsenale della democrazia'. Battaglie navali nel Pacifico (Midway, giugno: svolta). Sbarco in Nord Africa (novembre).",
      "1943": "Vittoria in Tunisia. Sbarco in Sicilia e Italia. Conferenza di Casablanca: resa incondizionata dell'Asse come obiettivo.",
      "1944": "D-Day (6 giugno): il più grande sbarco anfibio della storia. Liberazione dell'Europa occidentale. MacArthur riconquista le Filippine.",
      "1945": "Iwo Jima e Okinawa: combattimenti ferocissimi. Agosto: bombe atomiche su Hiroshima (6) e Nagasaki (9). Resa del Giappone (2 settembre). Fine della guerra."
    },
    "perdite": {
      "militari": 405399,
      "civili": 12000
    }
  },
  {
    "id": "japan",
    "name": "Giappone",
    "schieramento": "asse",
    "desc": {
      "1939": "L'Impero del Giappone è in guerra con la Cina dal 1937. Firma il Patto Tripartito con Germania e Italia (settembre 1940). Espande il dominio in Asia orientale.",
      "1940": "Il Giappone occupa l'Indocina francese. Negoziati tesi con gli USA che impongono embargo sul petrolio.",
      "1941": "7 dicembre: attacco a Pearl Harbor. Il Giappone conquista rapidamente Filippine, Malesia, Singapore, Birmania, Indonesia. Un impero enorme in pochi mesi.",
      "1942": "Giugno: Battaglia di Midway — la marina giapponese perde 4 portaerei. Svolta nel Pacifico. Guadalcanal: prima controffensiva americana.",
      "1943": "Gli USA iniziano l'island hopping: conquistano isola per isola avanzando verso il Giappone. Le linee di rifornimento giapponesi sono tagliate.",
      "1944": "Le Marianne cadono (luglio). Il Giappone è alla portata dei bombardieri americani B-29. Tokyo è bombardata. Le perdite civili crescono.",
      "1945": "Iwo Jima (febbraio) e Okinawa (aprile-giugno): resistenza fanatica. 6 agosto: Hiroshima. 9 agosto: Nagasaki. 2 settembre: resa formale sulla corazzata Missouri."
    },
    "perdite": {
      "militari": 2100000,
      "civili": 800000
    }
  },
  {
    "id": "poland",
    "name": "Polonia",
    "schieramento": "alleati",
    "desc": {
      "1939": "1 settembre: la Germania invade da ovest con 1,5 milioni di soldati. 17 settembre: l'URSS invade da est. La Polonia è divisa tra i due aggressori. Il governo fugge a Londra.",
      "1940": "La Polonia è sotto doppia occupazione. I tedeschi istituiscono il Governatorato Generale. Massacro di Katyn: 22.000 ufficiali polacchi uccisi dall'NKVD sovietico.",
      "1941": "L'occupazione tedesca diventa genocidio. Il ghetto di Varsavia è istituito. Inizia l'operazione Reinhard: sterminio sistematico degli ebrei polacchi.",
      "1942": "Treblinka, Sobibor, Belzec sono in piena attività. La Polonia è il teatro principale della Shoah: qui si trovano i principali campi di sterminio.",
      "1943": "Aprile: insurrezione del ghetto di Varsavia. I combattenti ebrei resistono per quasi un mese. La Wehrmacht reprime nel sangue.",
      "1944": "Agosto: insurrezione di Varsavia delle forze polacche (Armia Krajowa). Dura 63 giorni. L'URSS non interviene. La città è rasa al suolo.",
      "1945": "L'Armata Rossa libera la Polonia da ovest a est. La Polonia perde i territori orientali all'URSS, guadagna quelli tedeschi a ovest."
    },
    "perdite": {
      "militari": 240000,
      "civili": 5700000
    }
  }
];
