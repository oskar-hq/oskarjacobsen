# Jacobsen Digitalwerkstatt — Website

Statische Website. Kein Build, kein Framework, keine Abhängigkeiten:

```
index.html          Startseite (One-Pager)
impressum.html
datenschutz.html
styles.css
script.js           Mobile-Menü + Zwei-Klick-Videos (~2 kB)
fonts/              Space Grotesk, lokal (OFL 1.1, Lizenz liegt bei)
```

Ansehen: `index.html` im Browser öffnen. Hochladen: alle Dateien samt `fonts/`-Ordner
auf den Webspace kopieren, fertig. Die Seite lädt **keine einzige Datei von fremden
Servern** — bis jemand ein Video anklickt.

## Name

**Digitalwerkstatt.** „Werkstatt" ist ein Wort, das die Kundschaft hier selbst benutzt;
es erzeugt eine Werkbank im Kopf, keine Agentur. „Schmiede" klingt nach Marketingsprache,
„Studio" nach Kreativbranche.

Die Wordmark ist zweizeilig: **Jacobsen** (Space Grotesk Bold) über gesperrtem
DIGITALWERKSTATT. Funktioniert genauso auf einer Autotür, wenn es mal so weit ist.

## Was noch fehlt

Alles Fehlende ist auf der Seite sichtbar markiert — gestreifte Flächen für Fotos,
gelbe Kästen für offene Punkte.

**Fotos** (reichst du nach):
- [ ] Hero-Foto — du draußen, Tageslicht, Region erkennbar. Quer, ca. 1600 × 1200.
- [ ] Portraitfoto — freundlich, draußen, kein Studio.

Ersetzen: den `<div class="platzhalter">`-Block durch ein `<img>` tauschen, z. B.

```html
<img src="bilder/oskar.jpg" alt="Oskar Jacobsen" width="1600" height="1200">
```

Wenn beide Fotos drin sind, können `.platzhalter`, `.ph-inline` und `.hinweis`
aus dem CSS raus.

**Rechtstexte** — beide Seiten sind fertig geschrieben, aber zwei Felder kann
dir niemand außer dir ausfüllen:
- [ ] **Impressum:** Umsatzsteuer-Zeile. Aktuell steht dort die Kleinunternehmer-
      regelung nach § 19 UStG. Falls du regelbesteuert bist, stattdessen die
      USt-IdNr. eintragen. Steuerberatung oder Finanzamt klärt das in zwei Minuten.
- [ ] **Datenschutz:** Name und Anschrift deines Hosting-Anbieters, plus die
      Speicherdauer der Server-Logs. Und du brauchst mit dem Hoster einen
      Auftragsverarbeitungsvertrag (AVV) — bei allen deutschen Anbietern im
      Kundenkonto anklickbar, dauert fünf Minuten, ist aber Pflicht.
- [ ] Danach die gelben Hinweiskästen auf beiden Seiten löschen.

Die Texte sind nach bestem Wissen an der aktuellen Rechtslage gebaut (DDG statt
des alten TMG, TDDDG, DSGVO) und decken genau das ab, was diese Seite tatsächlich
tut. Sie sind trotzdem von mir und nicht von einer Anwältin. Wenn du ganz sicher
gehen willst: Die IHK Flensburg prüft sowas für Mitglieder kostenlos.

**Referenzen:**
- [ ] Ein, zwei Sätze von den Kunden selbst wären das Stärkste, was die Seite
      haben kann — stärker als jedes Video. Ruf bei Gelting, Petersens und Lasse an
      und frag, ob sie einen Satz sagen wollen. Und ob du ihren Namen nennen darfst.

**Sonstiges:**
- [ ] Der WhatsApp-Button im Kontaktbereich zeigt auf deine Handynummer. Falls du
      WhatsApp geschäftlich nicht nutzen willst, den Link einfach löschen —
      Telefon und E-Mail tragen den Abschnitt auch allein.

## Die Videos

Vier Arbeitsproben, eingebunden als **Zwei-Klick-Lösung**: vor dem Klick geht kein
einziges Byte an Google, es wird nicht mal ein Vorschaubild geladen. Die schwarze
Fläche mit dem Play-Knopf erzeugt der Browser selbst. Erst der Klick lädt den Player,
und zwar über `youtube-nocookie.com`.

Das ist der Grund, warum die Seite **ohne Cookie-Banner** auskommt. Wer hier auf ein
normales YouTube-Embed umstellt, braucht ein Banner und muss `datenschutz.html`
anpassen — das hängt zusammen.

Video tauschen oder ergänzen: nur die `data-video`-ID im Button ändern (der Teil der
YouTube-Adresse nach `/shorts/` oder `youtu.be/`) und `data-titel` dazu. Querformat
bekommt `video--quer`, Hochformat `video--hoch`.

## Design

- Weiß/Schwarz plus **ein** Akzent: `#e2571f`. Steht in `styles.css` ganz oben als
  `--akzent` — an einer Stelle ändern reicht für die ganze Seite.
- Space Grotesk nur für Wordmark und Überschriften, Fließtext in der System-Schrift
  des Geräts: lädt sofort, wirkt auf jedem Handy vertraut.
- Space Grotesk ist eine Variable Font (Gewichtsachse 300–700). Deshalb steht im
  `@font-face` ein Bereich (`font-weight: 300 700`) und keine Einzelzahl — sonst
  interpoliert der Browser nicht und „Bold" wäre gar nicht fett.
- Kein Kontaktformular. Die Telefonnummer ist der Haupt-Call-to-Action.

## Tonalität — falls Texte geändert werden

Zielgruppe sind Betriebe, Gemeinden, Vermieter und Vereine hier aus der Gegend.
Fachlich top, keine Zeit, kein Vorwissen, oft noch nie mit sowas zu tun gehabt.
Danach ist jeder Satz gebaut:

- **Zeitmangel ist der Schmerzpunkt, nicht schlechte Qualität.** Die Botschaft
  lautet „darum musst du dich nicht mehr kümmern", nie „deine Seite ist schlecht".
  Kein Satz auf der Seite kritisiert den Ist-Zustand von irgendwem.
- **Keine Fachbegriffe.** Kein „Digitalisierung", keine Tool-Namen, keine Prozesse.
- **Kein Vergleich mit Agenturen.** Wer nie mit einer gearbeitet hat, versteht die
  Abgrenzung nicht — sie schafft nur Distanz.
- **Du, kurz, direkt.** Ungefähr SMS-Länge.
- **Persönlichkeit zeigen, nicht behaupten.** Deshalb steht unter „Wie das bei mir
  läuft" nicht „sympathisch, gelassen, schnell", sondern „Du musst nichts
  vorbereiten", „Du kannst mich alles fragen", „Du wartest nicht lang auf Antwort".

## Technisches

- Mobile-first, Layout über CSS Grid.
- Getestet in Chromium auf 390 px und 1280 px: kein horizontales Scrollen, keine
  Konsolenfehler, null Requests an Dritte vor dem Video-Klick.
- Barrierefreiheit: Skip-Link, sichtbarer Fokus, `aria-expanded` am Menü,
  sprechende `aria-label` an den Video-Knöpfen, `prefers-reduced-motion` beachtet.
- Impressum und Datenschutz stehen auf `noindex` — sie sollen nicht bei Google
  auftauchen, verlinkt sind sie ja im Fuß.
