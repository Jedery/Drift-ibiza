# Prompt da dare a Claude Code

> Copia questo testo e incollalo in Claude Code (desktop, tab Code) dopo aver messo
> nella cartella del progetto i file: BRIEF-LANDING-PAGE.md, COPY-TRILINGUA.md,
> e tutti gli SVG del brand + drift-ibiza-brand-identity.md.

---

Ciao. Costruiamo la landing page del progetto **Drift Ibiza** (esperienze private in moto d'acqua a Ibiza).

Nella cartella trovi tutto ciò che serve:
- `BRIEF-LANDING-PAGE.md` → le specifiche complete. **Leggilo per primo e seguilo alla lettera.**
- `COPY-TRILINGUA.md` → tutti i testi già pronti in italiano, inglese e spagnolo. Usa questi, non inventare copy.
- `drift-ibiza-brand-identity.md` → il sistema brand (colori, font, regole).
- I file `.svg` → logo e icone da usare.

Requisiti prioritari, in ordine:
1. **Mobile-first**: il 90% del traffico è da telefono. Deve essere perfetta a 375px prima che su desktop.
2. **Multilingua IT/EN/ES** con auto-detect della lingua del browser + selettore manuale sempre visibile in alto. Fallback inglese.
3. **Unica azione = bottone WhatsApp** (teal #1D9E75). Presente in hero, CTA finale, e sticky in basso su mobile. Il numero è un placeholder `[NUMERO_WHATSAPP]` da rendere facile da sostituire in un solo punto.
4. **Brand rigoroso**: solo i colori e i font del brief. Lime Strike #C2F227 solo come accento.
5. Immagini hero/sezioni: usa **placeholder stock** di qualità (mare/Ibiza/moto d'acqua), strutturati per essere sostituiti facilmente dopo lo shooting.

Prima di scrivere codice:
- Conferma di aver letto il brief.
- Proponimi una breve struttura dei file e l'approccio tecnico (statico vs framework leggero) — tieni tutto semplice, niente backend, deploy su Vercel.
- Poi costruisci la pagina completa.

Quando hai finito, dimmi esattamente dove devo inserire: il numero WhatsApp, gli handle social reali, e dove sostituire le immagini placeholder.
