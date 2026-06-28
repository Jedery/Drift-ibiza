# Drift Ibiza — Brief Tecnico Landing Page (v1)

> Documento da mettere nella cartella del progetto. Claude Code deve leggerlo prima di costruire.
> Tutto ciò che è tra parentesi quadre `[...]` è un segnaposto da completare quando il dato è disponibile.

---

## 1. Obiettivo della pagina

Una **landing page one-page, mobile-first**, il cui unico scopo è far scrivere il visitatore su **WhatsApp** per prenotare un'esperienza in moto d'acqua a Ibiza.

- Il 90% del traffico arriva da social (Instagram/TikTok) → ottimizzare per telefono prima che per desktop.
- Una sola azione possibile: il bottone WhatsApp. Niente form, niente carrello, niente login.
- Tono: premium ma accessibile. Non "noleggio commerciale" — esperienza privata esclusiva.

---

## 2. Stack & hosting

- Repository GitHub esistente, deploy su **Vercel** (già in uso dal team).
- Tecnologia consigliata: pagina statica moderna (HTML/CSS/JS o un framework leggero tipo Astro/Next se il team preferisce). Decisione dell'ingegnere — la pagina è semplice, evitare over-engineering.
- Nessun database, nessun backend per la v1.

---

## 3. Multilingua (requisito chiave)

- **Tre lingue: Italiano, Inglese, Spagnolo.**
- Comportamento: **auto-detect della lingua del browser** all'apertura → mostra subito la lingua giusta.
- **Selettore lingua sempre visibile in alto** (es. IT / EN / ES) così l'utente può cambiare manualmente.
- Default fallback: **Inglese** (se la lingua del browser non è una delle tre).
- Tutto il copy nelle tre lingue è fornito nel file `COPY-TRILINGUA.md`.

---

## 4. Brand & asset (già forniti)

Usare ESCLUSIVAMENTE il sistema brand del file `drift-ibiza-brand-identity.md`. Non inventare colori o font.

### Palette
| Nome | Hex | Uso |
|------|-----|-----|
| Midnight | `#0F0A1E` | Sfondo principale, header, testi su chiaro |
| Navy | `#1A0A33` | Sfondo sezioni scure secondarie |
| Ibiza Teal | `#1D9E75` | CTA principale, link, accenti primari |
| Acqua | `#5DCAA5` | Hover, accenti secondari, gradienti testo |
| Lime Strike | `#C2F227` | Accento forte / highlight (USARE CON PARSIMONIA, mai dominante) |
| Sand | `#F5F2ED` | Sfondi sezioni chiare |
| White | `#FFFFFF` | Testo su scuro |

### Tipografia (Google Fonts)
- **Playfair Display** (500) → headline, logo, titoli hero
- **Inter** (400/500) → body, bottoni, UI, navigazione

### File logo da usare
- Hero / header → `drift-ibiza-logo-principale.svg` (su sfondo Midnight)
- Footer / sezioni chiare → `drift-ibiza-logo-chiaro.svg`
- Favicon / avatar → `drift-ibiza-icona-scura.svg`

### Regole brand da rispettare
- Logo mai deformato, ruotato o ricolorato fuori dalle varianti.
- Lime Strike solo come accento.
- Nessuna ombra/gradiente/effetto sul logo.

---

## 5. Struttura sezioni (in ordine)

```
┌─────────────────────────────────────┐
│ HEADER: logo + selettore lingua      │
├─────────────────────────────────────┤
│ 1. HERO                              │
│    - sfondo: foto/video mare Ibiza   │
│      (PLACEHOLDER stock per ora)     │
│    - headline + sottotitolo          │
│    - bottone WhatsApp (primario)     │
├─────────────────────────────────────┤
│ 2. L'ESPERIENZA (3 blocchi emotivi)  │
│    libertà · velocità · tramonto     │
├─────────────────────────────────────┤
│ 3. PACCHETTI (3 card prezzo)         │
│    30min · 1h (evidenziato) · 1h30   │
│    + "esperienza su misura"          │
├─────────────────────────────────────┤
│ 4. COME FUNZIONA (3 step)            │
│    scrivi → scegli → vivi            │
├─────────────────────────────────────┤
│ 5. DETTAGLI PRATICI                  │
│    moto, posti, zona, guida          │
├─────────────────────────────────────┤
│ 6. SOCIAL PROOF (placeholder)        │
│    recensioni/foto — da riempire     │
├─────────────────────────────────────┤
│ 7. CTA FINALE (bottone WhatsApp)     │
├─────────────────────────────────────┤
│ 8. FOOTER: logo, social, note legali │
└─────────────────────────────────────┘
```

---

## 6. Specifiche del bottone WhatsApp

- Link: `https://wa.me/[NUMERO_WHATSAPP]?text=[messaggio precompilato nella lingua attiva]`
- `[NUMERO_WHATSAPP]` = **PLACEHOLDER**, da fornire (formato internazionale senza +, es. `34600000000`).
- Messaggio precompilato per lingua (vedi `COPY-TRILINGUA.md`).
- Colore bottone: **Ibiza Teal `#1D9E75`**, testo bianco. Hover: Acqua `#5DCAA5`.
- Deve essere presente: nell'hero, nella sezione CTA finale, e idealmente come **bottone fisso/sticky** in basso su mobile.
- Icona WhatsApp accanto al testo.

---

## 7. Pacchetti & prezzi

| Pacchetto | Durata | Prezzo | Note |
|-----------|--------|--------|------|
| Taste | 30 min | 100€ | — |
| Classic | 1 ora | 180€ | **Evidenziato come "più scelto"** |
| Extended | 1h 30min | 250€ | *prezzo stimato, da confermare col proprietario* |
| Su misura | — | Su richiesta | "Scrivici per esperienze personalizzate" |

- Prezzo = per la **moto intera**, fino a **3 persone** (non per persona). Specificarlo chiaramente.

---

## 8. Dettagli pratici (sezione 5)

- Sea-Doo RXTx 300, fino a 3 persone.
- Base: **Santa Eulalia**, ma la moto raggiunge la zona concordata col cliente.
- Guida: **"Guida tu o lasciati accompagnare — ti spieghiamo tutto."**
  - ⚠️ NON scrivere mai esplicitamente "senza patente/licenza". I requisiti legali si gestiscono in privato via WhatsApp. Mantenere formula neutra.

---

## 9. Qualità minima (non negoziabile)

- Responsive perfetto fino a mobile (test 375px width).
- Focus tastiera visibile su tutti gli elementi interattivi.
- `prefers-reduced-motion` rispettato.
- Tempo di caricamento veloce: comprimere immagini, font con `display: swap`.
- SEO base: title, meta description (nelle 3 lingue/o EN), Open Graph image (per anteprima quando condiviso su WhatsApp/social → usare logo o foto hero).
- Favicon dal file icona.

---

## 10. Cosa NON fare nella v1

- Niente form di contatto (solo WhatsApp).
- Niente sistema di prenotazione/pagamento online (il pagamento è cash, gestito in privato).
- Niente Google Business / mappa con indirizzo preciso (per ora, scelta strategica).
- Non aspettare le foto reali: usare placeholder stock di qualità, sostituibili dopo lo shooting.

---

## 11. Segnaposto da completare

- `[NUMERO_WHATSAPP]` — in arrivo dal proprietario
- Prezzo 1h30 (250€ stimato) — da confermare
- Immagini/video reali — dopo shooting drone
- Recensioni reali — dopo i primi clienti
- Handle Instagram/TikTok reali nel footer
