# Jacobsen Digitalwerkstatt — One-Pager

Statische Website. Drei Dateien, kein Build, kein Framework:

```
index.html
styles.css
script.js   (nur das Mobile-Menü)
```

Lokal ansehen: `index.html` im Browser öffnen. Hochladen: die drei Dateien auf
irgendeinen Webspace kopieren, fertig.

## Namenswahl

Von den drei Vorschlägen ist **„Digitalwerkstatt"** gewählt. Begründung:
„Werkstatt" ist ein Wort, das die Zielgruppe selbst täglich benutzt und das eine
Werkbank im Kopf erzeugt, keine Agentur. „Schmiede" klingt nach Marketing-Sprache,
„Studio" nach Kreativbranche — beides schafft Distanz zu Handwerksbetrieben.

Die Wordmark ist konsequent zweizeilig aufgebaut: **Jacobsen** (Space Grotesk Bold)
über **DIGITALWERKSTATT** (gesperrt, klein) — das ist die Name-plus-Tätigkeit-Verknüpfung
wie bei „Thomas Beton", und sie funktioniert genauso auf der Vantür.

## Design-Entscheidungen

- Weiß/Schwarz als Basis, **ein** Akzent: `#e2571f` (Signalorange, Baustellenlogik).
  Er steckt in `styles.css` ganz oben in `--akzent` — an einer Stelle ändern reicht.
- Space Grotesk nur für Wordmark und Überschriften. Fließtext in der System-Schrift
  des jeweiligen Geräts: lädt sofort, sieht auf jedem Handy vertraut aus.
- Viel Weißraum, kurze Absätze, pro Bildschirm wenig Text.
- Kein Kontaktformular. Telefonnummer ist der Haupt-Call-to-Action, weil die Zielgruppe
  anruft statt tippt.

## Was noch fehlt (Platzhalter)

Alles Fehlende ist auf der Seite sichtbar markiert — gestreifte Flächen für Fotos,
gelb hinterlegte Stellen für Texte. Vor dem Livegang zu ersetzen:

- [ ] **Telefonnummer** — steht an vier Stellen: Navigation, Hero-Button, Kontaktbereich,
      Fußzeile. Jeweils auch im `href="tel:+49..."`.
- [ ] **E-Mail und WhatsApp-Nummer** (`href="https://wa.me/49..."` im Kontaktbereich).
- [ ] **Vorname** in „Moin, ich bin … Jacobsen".
- [ ] **Hero-Foto** — Person vor dem weißen Van, draußen, Tageslicht, Region erkennbar.
      Quer, ca. 1600 × 1200.
- [ ] **Portraitfoto** — freundlich, draußen, kein Studio.
- [ ] **Mindestens eine echte Referenz** mit Betriebsname, Ort, Foto und Zitat.
      Das ist für diese Zielgruppe das wichtigste Element der Seite. Lieber eine
      echte als drei ausgedachte.
- [ ] **Impressum und Datenschutzerklärung** — in Deutschland Pflicht, aktuell nur
      leere Links in der Fußzeile.

Fotos ersetzen: den `<div class="platzhalter">`-Block durch ein `<img>` tauschen, z. B.

```html
<img src="bilder/van.jpg" alt="Jacobsen vor seinem Van in Kappeln" width="1600" height="1200">
```

Die gelben Inline-Platzhalter sind `<span class="ph-inline">…</span>` — Span mitsamt
Inhalt durch den echten Text ersetzen. Wenn irgendwann keiner mehr übrig ist, können
die Regeln `.ph-inline`, `.platzhalter` und `.hinweis` aus dem CSS raus.

## Tonalität — falls Texte geändert werden

Der Kunde ist ein Handwerksbetrieb mit rund zehn Leuten: fachlich top, keine Zeit,
kein Vorwissen, noch nie mit einer Agentur zu tun gehabt. Danach ist jeder Satz gebaut:

- **Zeitmangel ist der Schmerzpunkt, nicht schlechte Qualität.** Die Botschaft lautet
  „darum musst du dich nicht mehr kümmern", nie „deine Seite ist schlecht".
- **Keine Fachbegriffe.** Kein „Digitalisierung", keine Tool-Namen, keine Prozesse.
- **Kein Vergleich mit Agenturen.** Wer nie mit einer gearbeitet hat, versteht die
  Abgrenzung nicht.
- **Du, kurz, direkt.** Ungefähr so lang wie eine SMS.
- **Persönlichkeit zeigen, nicht behaupten.** Deshalb heißt es im Abschnitt „Wie das
  bei mir läuft" nicht „sympathisch, gelassen, schnell", sondern „Du musst nichts
  vorbereiten", „Du kannst mich alles fragen", „Du wartest nicht lang auf Antwort".

## Technisches

- Mobile-first, ein Layout-Breakpoint-Set über CSS Grid.
- Kein Framework, kein Build-Schritt, ~1 kB JavaScript.
- Einziger externer Request: Space Grotesk von Google Fonts. Wer das aus
  Datenschutzgründen vermeiden will (spart auch den Request), lädt die
  Schrift-Dateien herunter, legt sie neben die Seite und ersetzt den `<link>`
  im `<head>` durch eine lokale `@font-face`-Regel.
- Barrierefreiheit: Skip-Link, sichtbarer Fokus, `aria-expanded` am Menü,
  `prefers-reduced-motion` berücksichtigt.
