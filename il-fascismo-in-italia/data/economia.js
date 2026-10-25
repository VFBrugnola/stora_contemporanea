const economiaData = [
  {
    id: "quota-90",
    titolo: "Quota 90 e rivalutazione della lira",
    anno: "1926",
    categoria: "politica-monetaria",
    descrizione: "Per ragioni di prestigio e orgoglio nazionale, il regime rivalutò la lira rispetto alla sterlina inglese. L'obiettivo era riportare il rapporto ai livelli ante-guerra: prima della Grande Guerra una sterlina costava ~90 lire; nel dopoguerra ne servivano ~150. Riportare il rapporto a 'quota 90' fu gravoso: se da un lato un maggior valore della lira aumentava il potere d'acquisto sui mercati esteri, dall'altro una lira dal valore eccessivo rallentò significativamente le esportazioni italiane.",
    effetti: "Riduzione dei salari reali, deflazione, difficoltà per le imprese esportatrici, disoccupazione. Le merci italiane diventano più care all'estero e meno competitive."
  },
  {
    id: "battaglia-grano",
    titolo: "Battaglia del grano",
    anno: "1925-1935",
    categoria: "agricoltura",
    descrizione: "Il regime bonificò vaste zone paludose per estendere la superficie coltivabile (nascono Littoria/Latina e Sabaudia), funzionali alla 'battaglia del grano': lo sforzo per rendere l'Italia autosufficiente dal punto di vista frumentario. La componente ideologica era dominante: per fare spazio alle colture cerealicole, molte colture più pregiate e redditizie — vite e ulivo — furono soppiantate, con significativi danni economici. La politica demografica si intreccia: Mussolini vuole 'otto milioni di baionette', ma dimentica due lezioni — l'emigrazione di fine '800 aveva dimostrato che l'economia italiana non assorbe la manodopera interna, e la Grande Guerra aveva mostrato che conta la supremazia tecnologica, non il numero di uomini.",
    effetti: "Aumento della produzione di grano, ma declino delle colture mediterranee tradizionali. La bilancia commerciale non migliora. La politica demografica non raggiunge gli obiettivi."
  },
  {
    id: "bonifica-integrale",
    titolo: "Bonifica integrale e Agro Pontino",
    anno: "1928-1939",
    categoria: "lavori-pubblici",
    descrizione: "La bonifica delle paludi pontine è il principale progetto di lavori pubblici del regime. Le paludi vengono prosciugate, colonizzate con famiglie di coloni veneti, e sorgono nuove città di fondazione: Littoria (oggi Latina), Sabaudia, Pontinia, Aprilia, Pomezia. È la vetrina del 'fascismo che fa'.",
    effetti: "35.000 km² di terreno recuperato, 60.000 famiglie insediate, 5 città di fondazione. Uno dei rari successi reali del regime."
  },
  {
    id: "iri",
    titolo: "IRI – Istituto per la Ricostruzione Industriale",
    anno: "1933",
    categoria: "industria",
    descrizione: "Durante la Grande Crisi (1929-33) lo Stato salva le banche e le grandi industrie in difficoltà attraverso l'IRI (fondato 1933). Lo Stato diventa azionista di maggioranza di banche (Comit, Credito Italiano) e grandi imprese (ILVA, Ansaldo, Fiat). Nasce un capitalismo di Stato che sopravvive alla caduta del fascismo.",
    effetti: "Lo Stato italiano diventa tra i maggiori proprietari di industrie in Europa. L'IRI sopravvive fino al 1999."
  },
  {
    id: "autarchia",
    titolo: "Autarchia",
    anno: "1935-1943",
    categoria: "politica-economica",
    descrizione: "Dopo le sanzioni della Società delle Nazioni per la guerra d'Etiopia (1935), il regime lancia la politica autarchica: l'economia italiana deve diventare autosufficiente. Si ricercano sostituti artificiali per materie prime importate: seta artificiale (rayon), benzina sintetica, pelle artificiale. L'autarchia è economicamente inefficiente ma politicamente efficace come mobilitazione nazionalistica.",
    effetti: "Riduzione della dipendenza da alcune importazioni, ma a costi altissimi. Qualità dei prodotti inferiore. L'autarchia non può sostenere uno sforzo bellico prolungato."
  },
  {
    id: "corporativismo-pratica",
    titolo: "Il corporativismo in pratica",
    anno: "1926-1943",
    categoria: "lavoro",
    descrizione: "Il corporativismo fascista abolisce i sindacati indipendenti (1926) e crea sindacati fascisti che non rappresentano i lavoratori ma li controllano. Le corporazioni — 22 settori — regolano prezzi, salari, condizioni di lavoro. In pratica proteggono gli interessi degli industriali e comprimono i salari.",
    effetti: "Tra il 1927 e il 1934 i salari reali scendono del 25-30%. La conflittualità operaia viene repressa, ma le condizioni di lavoro peggiorano."
  },
  {
    id: "fascismo-mafia",
    titolo: "Il fascismo e la mafia",
    anno: "1925-1929",
    categoria: "politica-interna",
    descrizione: "Il fascismo si distinse per la brutale repressione del fenomeno mafioso in Sicilia, in cui si distinse il prefetto palermitano Cesare Mori, inviato da Mussolini con poteri straordinari. Il vero problema tuttavia non fu affrontato: la mafia faceva parte del tessuto sociale meridionale, e la riforma agraria anti-latifondista non fu mai attuata — anche perché il fascismo trovava buona parte dei suoi sostenitori nel mondo agrario. La mafia non fu sradicata, solo momentaneamente compressa.",
    effetti: "Arresti di massa, processo di Termini Imerese (1927-1929). Ma senza riforma agraria la base sociale della mafia rimase intatta. Con l'occupazione americana del 1943 i mafiosi tornarono rapidamente ai propri ruoli."
  },
  {
    id: "lavori-pubblici",
    titolo: "Lavori pubblici e infrastrutture",
    anno: "1925-1940",
    categoria: "infrastrutture",
    descrizione: "Il regime investe in infrastrutture: la rete autostradale (prima d'Europa), ferrovie, edifici pubblici. I 'treni in orario' diventano il simbolo — spesso mitizzato — dell'efficienza fascista. In realtà i treni arrivano in orario nel nord, molto meno nel sud.",
    effetti: "Costruzione di circa 5.000 km di autostrade, elettrificazione ferroviaria, modernizzazione di alcune infrastrutture. Ma il divario nord-sud rimane invariato."
  }
];
