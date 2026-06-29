/* ═══════════════════════════════════════════════════════════════
   DRIFT IBIZA — main.js
   ═══════════════════════════════════════════════════════════════ */

/* ─── CONFIG ────────────────────────────────────────────────────
   ⚠️  REPLACE WHATSAPP_NUMBER with the real number.
   Format: international, no + sign, no spaces.
   Example Spanish number: '34612345678'
   ─────────────────────────────────────────────────────────────── */
const WHATSAPP_NUMBER = '[NUMERO_WHATSAPP]';

/* ─── PRE-FILLED WHATSAPP MESSAGES (one per language) ─────────── */
const WA_MESSAGES = {
  it: "Ciao Drift Ibiza! Vorrei informazioni per un'esperienza in moto d'acqua 🌊",
  en: "Hi Drift Ibiza! I'd like info about a jet ski experience 🌊",
  es: "¡Hola Drift Ibiza! Quería información sobre una experiencia en moto de agua 🌊",
};

/* ─── TRANSLATIONS ──────────────────────────────────────────────── */
const translations = {
  it: {
    meta_title: "Drift Ibiza — Esperienze private in moto d'acqua a Ibiza",
    meta_desc:  "Esperienze private in moto d'acqua a Ibiza. Sea-Doo RXTx 300, fino a 3 persone. Prenota su WhatsApp.",
    hero_title: "Esperienze private in moto d'acqua a Ibiza",
    hero_sub:   "La tua ora di libertà sul mare",
    cta_wa:     "Scrivici su WhatsApp",
    exp_title:  "L'Esperienza",
    exp1_label: "Libertà",      exp1_desc: "Nessun percorso fisso. Vai dove ti porta il mare.",
    exp2_label: "Velocità",     exp2_desc: "Un Sea-Doo RXTx 300. Potenza pura sull'acqua.",
    exp3_label: "Tramonto",     exp3_desc: "L'ora d'oro di Ibiza, vista dal mare. Indimenticabile.",
    pkg_title:  "Scegli la tua esperienza",
    pkg_sub:    "Prezzo per la moto, fino a 3 persone",
    pkg_badge:  "Il più scelto",
    pkg_cta:    "Prenota su WhatsApp",
    pkg_custom_text: "Cerchi altro? Scrivici per un'esperienza su misura.",
    pkg_custom_cta:  "Scrivici",
    pkg1_name: "Taste",    pkg1_dur: "30 minuti",     pkg1_desc: "Un assaggio veloce di libertà",
    pkg2_name: "Classic",  pkg2_dur: "1 ora",          pkg2_desc: "L'esperienza completa",
    pkg3_name: "Extended", pkg3_dur: "1 ora e 30",     pkg3_desc: "Più tempo, più mare, più tramonto",
    how_title:  "Come funziona",
    how1_label: "Scrivi",   how1_desc: "Mandaci un messaggio su WhatsApp con il giorno che preferisci.",
    how2_label: "Scegli",   how2_desc: "Concordiamo orario, durata e punto d'incontro.",
    how3_label: "Vivi",     how3_desc: "Ti aspettiamo sul mare. Pensa solo a goderti Ibiza.",
    det_title:  "Dettagli pratici",
    det1: "Sea-Doo RXTx 300, fino a 3 persone.",
    det2: "Base a Santa Eulalia — ti raggiungiamo nella zona che preferisci.",
    det3: "Guida tu o lasciati accompagnare: ti spieghiamo tutto.",
    proof_title: "Le nostre esperienze",
    proof_text:  "Le prime storie dei nostri ospiti, presto qui.",
    cta_title:   "Pronto a partire?",
    footer_tagline: "Esperienze private sul mare",
    footer_follow:  "Seguici su",
  },
  en: {
    meta_title: "Drift Ibiza — Private Jet Ski Experiences in Ibiza",
    meta_desc:  "Private jet ski experiences in Ibiza. Sea-Doo RXTx 300, up to 3 people. Book via WhatsApp.",
    hero_title: "Private jet ski experiences in Ibiza",
    hero_sub:   "Your hour of freedom on the sea",
    cta_wa:     "Message us on WhatsApp",
    exp_title:  "The Experience",
    exp1_label: "Freedom",  exp1_desc: "No fixed route. Go where the sea takes you.",
    exp2_label: "Speed",    exp2_desc: "A Sea-Doo RXTx 300. Pure power on the water.",
    exp3_label: "Sunset",   exp3_desc: "Ibiza's golden hour, seen from the sea. Unforgettable.",
    pkg_title:  "Choose your experience",
    pkg_sub:    "Price per jet ski, up to 3 people",
    pkg_badge:  "Most popular",
    pkg_cta:    "Book on WhatsApp",
    pkg_custom_text: "Looking for something else? Message us for a custom experience.",
    pkg_custom_cta:  "Message us",
    pkg1_name: "Taste",    pkg1_dur: "30 minutes",  pkg1_desc: "A quick taste of freedom",
    pkg2_name: "Classic",  pkg2_dur: "1 hour",      pkg2_desc: "The full experience",
    pkg3_name: "Extended", pkg3_dur: "1.5 hours",   pkg3_desc: "More time, more sea, more sunset",
    how_title:  "How it works",
    how1_label: "Message", how1_desc: "Send us a WhatsApp with your preferred day.",
    how2_label: "Choose",  how2_desc: "We agree on time, duration and meeting point.",
    how3_label: "Ride",    how3_desc: "We'll be waiting on the water. Just enjoy Ibiza.",
    det_title:  "Practical details",
    det1: "Sea-Doo RXTx 300, up to 3 people.",
    det2: "Based in Santa Eulalia — we reach the area you prefer.",
    det3: "Drive yourself or be accompanied: we'll show you everything.",
    proof_title: "Our experiences",
    proof_text:  "The first stories from our guests, coming soon.",
    cta_title:   "Ready to ride?",
    footer_tagline: "Private experiences on the sea",
    footer_follow:  "Follow us on",
  },
  es: {
    meta_title: "Drift Ibiza — Experiencias privadas en moto de agua en Ibiza",
    meta_desc:  "Experiencias privadas en moto de agua en Ibiza. Sea-Doo RXTx 300, hasta 3 personas. Reserva por WhatsApp.",
    hero_title: "Experiencias privadas en moto de agua en Ibiza",
    hero_sub:   "Tu hora de libertad en el mar",
    cta_wa:     "Escríbenos por WhatsApp",
    exp_title:  "La Experiencia",
    exp1_label: "Libertad",   exp1_desc: "Sin ruta fija. Ve donde te lleve el mar.",
    exp2_label: "Velocidad",  exp2_desc: "Una Sea-Doo RXTx 300. Potencia pura sobre el agua.",
    exp3_label: "Atardecer",  exp3_desc: "La hora dorada de Ibiza, desde el mar. Inolvidable.",
    pkg_title:  "Elige tu experiencia",
    pkg_sub:    "Precio por moto, hasta 3 personas",
    pkg_badge:  "El más elegido",
    pkg_cta:    "Reservar por WhatsApp",
    pkg_custom_text: "¿Buscas otra cosa? Escríbenos para una experiencia a medida.",
    pkg_custom_cta:  "Escríbenos",
    pkg1_name: "Taste",    pkg1_dur: "30 minutos",    pkg1_desc: "Un toque rápido de libertad",
    pkg2_name: "Classic",  pkg2_dur: "1 hora",         pkg2_desc: "La experiencia completa",
    pkg3_name: "Extended", pkg3_dur: "1 hora y 30",    pkg3_desc: "Más tiempo, más mar, más atardecer",
    how_title:  "Cómo funciona",
    how1_label: "Escribe",   how1_desc: "Mándanos un WhatsApp con el día que prefieras.",
    how2_label: "Elige",     how2_desc: "Acordamos hora, duración y punto de encuentro.",
    how3_label: "Disfruta",  how3_desc: "Te esperamos en el mar. Solo disfruta de Ibiza.",
    det_title:  "Detalles prácticos",
    det1: "Sea-Doo RXTx 300, hasta 3 personas.",
    det2: "Base en Santa Eulalia — llegamos a la zona que prefieras.",
    det3: "Conduce tú o déjate acompañar: te lo explicamos todo.",
    proof_title: "Nuestras experiencias",
    proof_text:  "Las primeras historias de nuestros invitados, muy pronto.",
    cta_title:   "¿Listo para salir?",
    footer_tagline: "Experiencias privadas en el mar",
    footer_follow:  "Síguenos en",
  },
};

/* ─── LANGUAGE DETECTION ──────────────────────────────────────── */
function detectLang() {
  const stored = localStorage.getItem('drift-lang');
  if (stored && translations[stored]) return stored;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return translations[browser] ? browser : 'en';
}

/* ─── APPLY LANGUAGE ──────────────────────────────────────────── */
function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  localStorage.setItem('drift-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.title = t.meta_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.meta_desc;

  const waConfigured = WHATSAPP_NUMBER !== '[NUMERO_WHATSAPP]';
  const waUrl = waConfigured
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[lang])}`
    : '#';

  document.querySelectorAll('[data-whatsapp]').forEach(el => {
    el.href = waUrl;
    if (!waConfigured) {
      el.setAttribute('aria-disabled', 'true');
      el.title = 'WhatsApp number not configured yet';
    } else {
      el.removeAttribute('aria-disabled');
      el.removeAttribute('title');
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-current', active ? 'true' : 'false');
  });
}

/* ─── STICKY WA — hide when hero CTA is visible ──────────────── */
function initStickyWa() {
  const heroCta = document.querySelector('.hero-cta');
  const sticky  = document.getElementById('sticky-wa');
  if (!heroCta || !sticky) return;

  const observer = new IntersectionObserver(
    ([entry]) => sticky.classList.toggle('sticky-wa--visible', !entry.isIntersecting),
    { threshold: 0 }
  );
  observer.observe(heroCta);
}

/* ─── INIT ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectLang());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  initStickyWa();
});
