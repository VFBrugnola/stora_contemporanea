# Storia Contemporanea — Hub didattico

Pagina vetrina per i materiali didattici di storia contemporanea (XIX–XX secolo).
Raccoglie e linka le dashboard interattive per argomento, con indicazione dello stato di ciascuna.

**GitHub Pages:** https://vfbrugnola.github.io/storia_contemporanea/

---

## Struttura del repo

```
stora_contemporanea/
├── index.html          # Pagina hub — navigazione per secolo e argomento
└── shared/
    └── style.css       # Sistema CSS strutturale condiviso tra tutte le dashboard
```

## Dashboard collegate

| Argomento | Repo | Stato |
|---|---|---|
| Prima guerra mondiale | [la-grande-guerra](https://github.com/VFBrugnola/la-grande-guerra) | ✅ Disponibile |
| Il fascismo | *(in costruzione)* | 🔧 In lavorazione |
| Seconda guerra mondiale | [la-seconda-guerra-mondiale](https://github.com/VFBrugnola/la-seconda-guerra-mondiale) | ✅ Disponibile |

## Sistema CSS condiviso

`shared/style.css` definisce la struttura comune a tutte le dashboard: layout, componenti (nav, tabs, slider, card, modal, leaflet overrides, bar chart) e un **token contract** — i nomi delle variabili CSS che ogni dashboard deve sovrascrivere con i propri colori e font.

Per usarlo in una nuova dashboard:

```html
<link rel="stylesheet" href="https://vfbrugnola.github.io/stora_contemporanea/shared/style.css">
```

Poi nella `:root` della dashboard si ridefiniscono solo i token di colore:

```css
:root {
  --bg: #0d0d0f;
  --bg2: #141416;
  --bg3: #1a1a1e;
  --fg: #d4c9b0;
  --fg2: #8a8070;
  --fg3: #5a5040;
  --accent: #c9963a;
  --accent2: #e8b84b;
  --border: #2a2520;
  --font-serif: "Georgia", serif;
  --font-ui: system-ui, sans-serif;
}
```

## Aggiungere un nuovo argomento

1. Creare un nuovo repo GitHub per la dashboard
2. Aggiungere il link nel file `index.html` di questo repo (sostituire il placeholder corrispondente)
3. Importare `shared/style.css` e definire i token colore nella nuova dashboard

---

