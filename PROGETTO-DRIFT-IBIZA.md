# Drift Ibiza — Landing Page: Documentazione Progetto

> Esperienza privata in moto d'acqua a Ibiza · Sea-Doo RXTx 300 · Santa Eulalia

---

## Panoramica

Landing page single-page per **Drift Ibiza**, pensata per convertire visitatori in clienti via WhatsApp. Nessun framework, nessun backend — file HTML autocontenuto deployabile su Vercel in un click.

**Stack:** HTML5 · CSS3 inline · JavaScript vanilla · Nessuna dipendenza esterna

**Deploy target:** Vercel (drag & drop della cartella)

---

## Struttura del progetto

```
Drift-ibiza/
├── index.html                  ← Landing page (tutto inline: CSS + JS)
├── main.js                     ← Copia standalone dello script (riferimento)
├── style.css                   ← Copia standalone degli stili (riferimento)
├── images/
│   ├── cala-segreta.jpg        ← POV Sea-Doo verso cala rocciosa turchese
│   ├── seadoo-porto-a.jpg      ← Sea-Doo RXTx 300 al porto (vista laterale)
│   └── seadoo-porto-b.jpg      ← Sea-Doo RXTx 300 al porto (vista ampia)
├── videos/
│   └── hero.mp4                ← Video POV sul mare aperto (hero background)
├── drift-ibiza-logo-principale.svg
├── drift-ibiza-logo-chiaro.svg
├── drift-ibiza-icona-scura.svg
├── drift-ibiza-icona-teal.svg
├── drift-ibiza-palette.svg
└── .claude/launch.json         ← Dev server locale (npx serve -l 3000 .)
```

---

## Funzionalità implementate

### Multilingua automatica (IT / EN / ES)
- Rilevamento automatico dalla lingua del browser
- Salvataggio preferenza in `localStorage`
- Switch manuale con pulsanti IT · EN · ES in header
- Fade in/out animato al cambio lingua (0.18s)
- Copy completo in 3 lingue per tutti i testi
- Messaggi WhatsApp pre-compilati per ogni lingua

### Sezioni della pagina

| # | Sezione | Contenuto |
|---|---------|-----------|
| — | Header | Logo + language switcher fisso |
| 1 | Hero | Video background in loop · Titolo · Subtitle italic · CTA WhatsApp |
| — | Trust strip | Sea-Doo RXTx 300 · Santa Eulalia · privato · fino a 3 persone |
| 2 | L'Esperienza | 3 card con foto reali: Libertà / Velocità / Tramonto |
| 3 | Pacchetti | Taste 100€ · Classic 180€ · Extended 250€* |
| 4 | Come funziona | 3 step: Scrivi → Scegli → Vivi |
| 5 | Dettagli pratici | Sea-Doo RXTx 300 · base Santa Eulalia · guida libera o accompagnata |
| 6 | Le nostre esperienze | Galleria 3 foto reali |
| 7 | CTA finale | Headline grande + pulsante WhatsApp |
| 8 | Footer | Logo · tagline · Instagram · TikTok |
| — | Sticky WA | Pulsante WhatsApp fisso in basso (appare dopo l'hero) |

### WhatsApp integration
- Unico `WHATSAPP_NUMBER` da configurare in cima allo script
- URL formato `wa.me/{numero}?text={messaggio pre-compilato}`
- Tutti i pulsanti aggiornati dinamicamente al cambio lingua
- Gestione graceful se il numero non è ancora configurato

---

## Brand system applicato

| Token | Valore | Uso |
|-------|--------|-----|
| `--midnight` | `#0F0A1E` | Background principale |
| `--navy` | `#1A0A33` | Background sezioni alternate |
| `--teal` | `#1D9E75` | CTA, accenti, icone |
| `--acqua` | `#5DCAA5` | Subtitle, dettagli secondari |
| `--lime` | `#C2F227` | Badge "Il più scelto" |
| `--sand` | `#F5F2ED` | (disponibile, non usato nell'attuale dark theme) |
| `--font-h` | Playfair Display | Titoli, label esperienza, numeri |
| `--font-b` | Inter | Body, pulsanti, UI |

---

## Animazioni e UX

### Scroll reveal
Tutti gli elementi entrano con fade + slide-up (28px → 0) alla visibilità.
Delay progressivo per gruppi di card (0.08s · 0.16s · 0.24s).
Rispetta `prefers-reduced-motion`.

### Hero parallax + blobs
- Video in loop `autoplay muted playsinline` con overlay gradiente scuro
- 3 blob animati con gradiente teal (oscillazione 14–22s)
- Parallax leggero sullo scroll (disabilitato se `prefers-reduced-motion`)

### Card hover
- Exp cards: zoom immagine 1.04x al hover
- Package cards: lift -6px + glow teal + shadow
- Proof gallery: zoom 1.05x al hover

### Sticky WhatsApp
- Nascosto finché il CTA hero è visibile (IntersectionObserver)
- Appare dal basso con animazione slide-up
- Pulse teal ogni 4s per attirare attenzione
- Su desktop: floating button in basso a destra

### Language fade
Tutti gli elementi `[data-i18n]` fanno fade-out → swap testo → fade-in al cambio lingua.

---

## Ottimizzazioni tecniche

- **Mobile-first** (breakpoint principale 640px e 768px)
- **Self-contained HTML**: CSS e JS inline → funziona con `file://` e su ogni CDN
- `loading="lazy"` su tutte le immagini sotto la fold
- `prefers-reduced-motion` rispettato globalmente
- `focus-visible` accessibilità keyboard con outline lime
- `aria-label`, `aria-hidden`, `aria-current` su tutti gli elementi interattivi
- SVG symbols riusabili (WhatsApp, Instagram, TikTok, icone UI)
- Easing premium `cubic-bezier(0.16,1,0.3,1)` su tutte le transizioni

---

## Cosa configurare prima del go-live

```javascript
// In index.html, riga ~695 dello script:
const WHATSAPP_NUMBER = '[NUMERO_WHATSAPP]'; // ← sostituire con es. '34612345678'
```

```html
<!-- Footer: sostituire gli handle social -->
<a href="https://instagram.com/[INSTAGRAM_HANDLE]" ...>
<a href="https://tiktok.com/@[TIKTOK_HANDLE]" ...>
```

```html
<!-- Head: aggiornare URL Open Graph -->
<meta property="og:url" content="https://driftibiza.com">
<meta property="og:image" content="https://driftibiza.com/og-image.jpg">
```

**Prezzi da confermare:**
- Extended: 250€ è stimato (segnato con `*` nella pagina)

---

## Asset fotografici attuali

| File | Contenuto | Usato in |
|------|-----------|----------|
| `videos/hero.mp4` | POV sul mare aperto con isole | Hero background (loop) |
| `images/cala-segreta.jpg` | POV Sea-Doo verso cala rocciosa turchese | Card Libertà · Galleria |
| `images/seadoo-porto-a.jpg` | Sea-Doo RXTx 300 al porto (laterale) | Card Velocità · Galleria |
| `images/seadoo-porto-b.jpg` | Sea-Doo RXTx 300 al porto (ampia) | Card Tramonto · Galleria |

**Asset futuri consigliati:**
- Foto tramonto reale (golden hour da mare) → card Tramonto
- Foto in azione (moto d'acqua in corsa, spray) → hero poster / card Speed
- Foto con ospiti (con consenso) → sezione Social Proof
- OG image 1200×630px → condivisioni social

---

## Dev server locale

```bash
# Avvia il server di sviluppo
npx serve -l 3000 .

# Apri nel browser
http://localhost:3000
```

---

## Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. "Add New Project" → drag & drop della cartella `Drift-ibiza/`
3. Nessuna configurazione necessaria — Vercel rileva automaticamente HTML statico
4. Il dominio `driftibiza.com` va collegato nelle impostazioni del progetto

---

*Progetto sviluppato con Claude Code · Giugno 2026*
