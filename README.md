# Storia Contemporanea — Hub didattico

Pagina vetrina per i materiali didattici di storia contemporanea (XIX–XX secolo).
Raccoglie e linka le dashboard interattive per argomento, con indicazione dello stato di ciascuna.

**GitHub Pages:** https://vfbrugnola.github.io/storia_contemporanea/

## Le dashboard

### Come sono costruite?
I contenuti derivano dalle lezioni dell'autore. Le dashboard sono sviluppate in *vibecoding* con Claude AI. Tutti i contenuti sono riletti e supervisionati.

### Scopo delle dashboard
Le dashboard hanno uno scopo didattico, rivolte agli studenti del liceo.

---

## Dashboard disponibili

| Argomento | Link | Stato |
|---|---|---|
| Prima guerra mondiale | [la-grande-guerra](https://vfbrugnola.github.io/storia_contemporanea/la-grande-guerra/) | ✅ Disponibile |
| Il fascismo in Italia | [il-fascismo-in-italia](https://vfbrugnola.github.io/storia_contemporanea/il-fascismo-in-italia/) | ✅ Disponibile |
| Il nazismo in Germania | [il-nazismo](https://vfbrugnola.github.io/storia_contemporanea/il-nazismo/) | ✅ Disponibile |
| Seconda guerra mondiale | [la-seconda-guerra-mondiale](https://vfbrugnola.github.io/storia_contemporanea/la-seconda-guerra-mondiale/) | ✅ Disponibile |

---

## Struttura del repo

```
storia_contemporanea/
├── index.html                        # Pagina hub — navigazione per secolo e argomento
├── la-grande-guerra/
│   └── index.html
├── il-fascismo-in-italia/
│   └── index.html
├── il-nazismo/
│   ├── index.html
│   └── assets/img/                   # Immagini locali della dashboard
└── la-seconda-guerra-mondiale/
    └── index.html
```

Ogni dashboard è un file HTML **self-contained**: nessuna dipendenza da file JS o CSS esterni al repo. I dati sono inlineati direttamente nello script.

---

## Aggiungere una nuova dashboard

1. Creare una cartella con il nome dell'argomento (es. `rivoluzione-russa/`)
2. Inserire un `index.html` self-contained con dati inline
3. Aggiungere la card nell'`index.html` dell'hub (sostituire il placeholder corrispondente)
4. Fare il push — GitHub Pages deploya automaticamente
