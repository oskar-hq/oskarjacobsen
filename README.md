# Jacobsen Digitalwerkstatt — Website

Statische Website. Kein Build, kein Framework, keine Abhängigkeiten:

```
index.html          Startseite (One-Pager)
impressum.html
datenschutz.html
styles.css
script.js           Mobile-Menü + Zwei-Klick-Videos (~2 kB)
fonts/              Space Grotesk, lokal (OFL 1.1, Lizenz liegt bei)
texte.md            Alle Seitentexte zum Bearbeiten
.nojekyll           Sagt GitHub Pages, dass nichts vorverarbeitet werden soll
```

Ansehen: `index.html` im Browser öffnen. Die Seite lädt **keine einzige Datei von
fremden Servern** — bis jemand ein Video anklickt.

## Livegang über GitHub Pages

Die Dateien liegen im Wurzelverzeichnis des Repos, damit funktioniert Pages ohne
Umbau:

1. Im Repo unter **Settings → Pages** als Quelle den Branch wählen, auf dem diese
   Dateien liegen, und als Ordner `/ (root)`.
2. Custom Domain auf `oskarjacobsen.de` setzen. GitHub legt dann selbst eine Datei
   namens `CNAME` an — die ist bewusst noch nicht im Repo, weil sie zur DNS-Einstellung
   passen muss und eine falsche Angabe die Seite sofort offline nimmt.
3. Beim Domain-Anbieter die DNS-Einträge setzen:
   - für `oskarjacobsen.de` vier **A**-Einträge auf `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - für `www.oskarjacobsen.de` einen **CNAME** auf `<dein-github-name>.github.io`
4. Danach in den Pages-Einstellungen **„Enforce HTTPS"** anhaken, sobald die Option
   anklickbar wird (kann eine Stunde dauern, bis das Zertifikat da ist).

Jeder Push auf den eingestellten Branch veröffentlicht die Seite neu, meist innerhalb
einer Minute.

**Was das für den Datenschutz bedeutet:** GitHub sitzt in den USA und protokolliert
Besucher-IPs, ohne dass du an diese Logs herankommst oder sie abschalten kannst. Das
steht so in `datenschutz.html` — ehrlich benannt, mit dem Data Privacy Framework als
Grundlage. Rechtlich ist das eine vertretbare, aber nicht die sauberste Lösung; ein
deutscher Hoster mit klassischem Auftragsverarbeitungsvertrag wäre unangreifbarer.
Für den Anfang ist GitHub Pages völlig in Ordnung, du solltest es nur wissen. Ein
späterer Umzug ist einfach: Dateien kopieren, DNS umstellen, im Datenschutz Abschnitt 2
austauschen.

## Name

**Digitalwerkstatt.** „Werkstatt" ist ein Wort, das die Kundschaft hier selbst benutzt;
es erzeugt eine Werkbank im Kopf, keine Agentur. „Schmiede" klingt nach Marketingsprache,
„Studio" nach Kreativbranche.

Die Wordmark ist zweizeilig: **Jacobsen** (Space Grotesk Bold) über gesperrtem
DIGITALWERKSTATT. Funktioniert genauso auf einer Autotür, wenn es mal so weit ist.

## Was noch fehlt

Alles Fehlende ist auf der Seite sichtbar markiert — gestreifte Flächen für Fotos,
gelbe Kästen für offene Punkte.

**Bilder** (reichst du nach) — alle in einen Ordner `bilder/` neben die HTML-Dateien:
- [ ] Hero-Foto — du draußen, Tageslicht, Region erkennbar. Quer, ca. 1600 × 1200.
- [ ] Portraitfoto — freundlich, draußen, kein Studio.
- [ ] Foto von den aufgestellten Bannern des Kommunalpolitikers.
- [ ] Drei Agrarkit-Screenshots, **ohne Browserleiste** — also den Bereich ab
      Höhe der Agrarkit-Kopfzeile abwärts, Safari-Adressleiste und Lesezeichen
      weg. Am besten mit `cmd+shift+4` direkt den Fensterinhalt aufnehmen.
      Gebraucht werden: die Kartenansicht (die hattest du schon ohne Leiste),
      „Umriss bearbeiten" und der ENDO-SH-Export.

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
- [ ] Danach den gelben Hinweiskasten im Impressum löschen. Im Datenschutz ist
      keiner mehr offen — der Hosting-Abschnitt beschreibt GitHub Pages fertig.

Die Texte sind nach bestem Wissen an der aktuellen Rechtslage gebaut (DDG statt
des alten TMG, TDDDG, DSGVO) und decken genau das ab, was diese Seite tatsächlich
tut. Sie sind trotzdem von mir und nicht von einer Anwältin. Wenn du ganz sicher
gehen willst: Die IHK Flensburg prüft sowas für Mitglieder kostenlos.

**Texte:**
- [ ] `texte.md` enthält den kompletten Seitentext zum Überarbeiten. Änderungen
      darin bau ich ein — die Datei ist die Vorlage, `index.html` das Ergebnis.
      Wenn du selbst im HTML änderst, bitte auch `texte.md` nachziehen, sonst
      laufen die beiden auseinander.

**Referenzen:**
- [ ] Name des Kommunalpolitikers — steht aktuell als gelber Platzhalter drin.
- [ ] Einverständnis einholen: beim Politiker, dass er auf der Seite auftaucht,
      und bei Petersens und Lasse für ihre Zitate mit Namen. Ein kurzer Anruf
      reicht, aber er sollte stattgefunden haben, bevor es online geht.

**Sonstiges:**
- [ ] Der WhatsApp-Button im Kontaktbereich zeigt auf deine Handynummer. Falls du
      WhatsApp geschäftlich nicht nutzen willst, den Link einfach löschen —
      Telefon und E-Mail tragen den Abschnitt auch allein.

## Der Referenz-Abschnitt

Drei Gruppen, in dieser Reihenfolge: **Filme** (die vier YouTube-Videos),
**Website, Banner und Social Media** (Kommunalpolitiker), **Und was Eigenes**
(Agrarkit).

Agrarkit steht bewusst zum Schluss und erklärt nicht, was die Software alles kann.
Auf dieser Seite ist sie kein Produkt, sondern der Beweis dafür, wie weit du gehst,
wenn es etwas nicht fertig zu kaufen gibt — genau das sagt der letzte Satz. Für die
eigene Agrarkit-Website, die du später bauen willst, ist das eine andere Seite mit
einer anderen Zielgruppe (Landwirte, die das Programm suchen). Die beiden nicht
vermischen.

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

- **Zuverlässigkeit wird gezeigt, nie behauptet.** Der Abschnitt „Damit nichts mehr
  untergeht" dreht das Thema bewusst so, dass es niemanden angreift: „Du bist nicht
  unzuverlässig. Du hast nur zu viel im Kopf." Ein Satz wie „viele Handwerker sind
  unzuverlässig" dürfte auf dieser Seite nie stehen — er würde genau die Leute
  beleidigen, die anrufen sollen.

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
