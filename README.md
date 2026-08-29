# Jacobsen Digitalwerkstatt — Website

Statische Website. Kein Build, kein Framework, keine Abhängigkeiten:

```
index.html          Startseite (One-Pager)
impressum.html
datenschutz.html
styles.css
script.js           Mobile-Menü + Zwei-Klick-Videos (~2 kB)
bilder/             Bildschirmfotos aus Agrarkit und von agrarkit.de (webp)
bilder/logos/       die drei Kundenlogos
bilder/original/    die Originaldateien, so wie du sie hochgeladen hast
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
2. Custom Domain auf `oskarjacobsen.de` setzen. Die Datei `CNAME` liegt inzwischen
   im Repo und enthält genau diese Domain — sie muss zur DNS-Einstellung passen, eine
   falsche Angabe nimmt die Seite sofort offline.
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

Es gibt **keine gestreiften Platzhalterflächen mehr**. Die Seite ist so gebaut, dass
sie ohne ein einziges Foto von dir vollständig aussieht — Schrift, Flächen und die
echten Arbeiten tragen sie allein. Offen ist nur noch das, was im gelben Kasten im
Referenz-Abschnitt steht.

**Fotos** (wenn du welche hast, nicht vorher):
- [ ] Ein Foto von dir draußen. Platz dafür ist im Hero zwischen Text und grüner
      Karte; im HTML steht an der Stelle ein Kommentar. Die grüne Karte kann bleiben,
      sie trägt sich auch neben einem Bild.
- [ ] Ein Portrait. Platz dafür ist bei „Über mich" über der grünen Karte.
- [ ] Fotos vom Kommunalpolitiker: Banner an der Straße und ein Bildschirmfoto
      seiner fertigen Website. Der ganze Fall ist stillgelegt, siehe unten.

Einbauen geht immer gleich:

```html
<figure class="bild">
  <img src="bilder/oskar.jpg" alt="Oskar Jacobsen" width="1600" height="1200">
</figure>
```

Bilder vorher auf ca. 1600 px Breite bringen und als `.webp` speichern, sonst lädt
die Seite auf dem Handy im Funkloch ewig. Die Agrarkit-Bildschirmfotos in `bilder/`
sind genau so entstanden: aus den Originalen in `bilder/original/` beschnitten und
umgerechnet, zusammen keine 300 kB.

**Erledigt:**
- [x] Agrarkit-Bildschirmfotos — Karte, „Umriss bearbeiten" und ENDO-SH-Export
      sind drin. Die beiden kleinen sind auf dasselbe Seitenverhältnis beschnitten,
      damit sie im Zweier-Raster gleich hoch stehen.
- [x] Impressum, Umsatzsteuer — du bist Kleinunternehmer, also steht dort jetzt
      fest die Regelung nach § 19 UStG. Die Alternative und beide gelben Kästen
      sind raus, das Impressum ist fertig.
- [x] Kundenlogos — Gemeinde Gelting, Petersens und Lasse.PTS stehen jetzt als
      echte Logos in der Leiste unter dem Hero. Geholt aus dem Repo
      `oskar-hq/jacobsen-website`, Ordner `kunden-logos/`. Beim Lasse-Logo war
      ein weißer Kasten drumherum, der ist freigestellt.
- [x] agrarkit.de — die Website zur Software ist als eigene Referenz drin, in
      der neuen Gruppe „Websites". Damit zeigt die Seite wieder Website-Arbeit,
      auch solange der Kommunalpolitiker stillgelegt ist.

**Rechtstexte:** Beide Seiten sind fertig. Sie sind nach bestem Wissen an der
aktuellen Rechtslage gebaut (DDG statt des alten TMG, TDDDG, DSGVO) und decken
genau das ab, was diese Seite tatsächlich tut. Sie sind trotzdem von mir und nicht
von einer Anwältin. Wenn du ganz sicher gehen willst: Die IHK Flensburg prüft sowas
für Mitglieder kostenlos.

**Texte:**
- [ ] `texte.md` enthält den kompletten Seitentext zum Überarbeiten. Änderungen
      darin bau ich ein — die Datei ist die Vorlage, `index.html` das Ergebnis.
      Wenn du selbst im HTML änderst, bitte auch `texte.md` nachziehen, sonst
      laufen die beiden auseinander.

**Referenzen:**
- [ ] Petersens und Lasse anrufen, ob ihre Zitate mit Namen gezeigt werden dürfen.
      Ihre Namen stehen auch oben in der Leiste „Gearbeitet für". Solange das nicht
      geklärt ist: entweder kurz durchklingeln oder die beiden
      `<blockquote class="zitat">`-Blöcke rausnehmen. **Das ist der letzte Punkt,
      der vor dem Livegang wirklich erledigt sein sollte.**
- [x] Der gelbe Hinweiskasten ist von der Seite runter. Dieselbe Liste steht jetzt
      als Kommentar im Quelltext und hier. Die Seite kann also jederzeit online,
      ohne dass ein Besucher Baustellenzettel sieht. `.hinweis` ist aus dem CSS raus,
      `.ph-inline` bleibt, solange der Name des Politikers fehlt.

### Stillgelegt: der Kommunalpolitiker

Seine Website ist gerade im Bau, die Bilder kommen in etwa einem Monat. Damit die
Seite trotzdem sofort benutzbar ist, ist der ganze Fall vorübergehend abgeschaltet —
**nicht gelöscht**. Der komplette Block steht weiter in `index.html`, nur eben in
einem `<template>`. Das heißt: der Browser liest ihn, zeigt ihn aber nicht an, und
bei Google taucht der Text nicht als Seiteninhalt auf.

Wenn seine Seite fertig ist, freischalten in vier Schritten (steht genauso als
Kommentar direkt über dem Block):

1. Die Zeile `<template id="fall-kommunalpolitiker">` und das zugehörige
   `</template>` löschen. Sonst nichts — alles dazwischen bleibt, wie es ist.
2. Namen eintragen: das `<span class="ph-inline">…</span>` durch seinen Namen
   ersetzen, das span-Element selbst kommt weg.
3. Bilder einbauen: ein `<figure class="bild">` vor `.fall__text` setzen. Das
   Zweispalten-Raster nimmt es von selbst auf, am CSS ist nichts zu ändern.
4. Vorher anrufen und fragen, ob er einverstanden ist.

Er landet dann in der Gruppe „Websites", direkt über agrarkit.de. Die Überschrift
steht deshalb außerhalb des `<template>`, nicht darin. Wenn du magst, kannst du die
Gruppe danach in „Websites, Banner und Social Media" umbenennen — dann passt sie
auch zu den Bannern.

**Sonstiges:**
- [ ] Der WhatsApp-Button im Kontaktbereich zeigt auf deine Handynummer. Falls du
      WhatsApp geschäftlich nicht nutzen willst, den Link einfach löschen —
      Telefon und E-Mail tragen den Abschnitt auch allein.

## Der Referenz-Abschnitt

Drei Gruppen, in dieser Reihenfolge: **Filme** (die vier YouTube-Videos),
**Websites** (agrarkit.de, und später der Kommunalpolitiker), **Eigene Software**
(Agrarkit selbst).

Die Reihenfolge erzählt absichtlich etwas: erst eine Website, die ich gebaut habe —
und dann, gleich darunter, die Software, für die diese Website wirbt. Wer bis dahin
gelesen hat, versteht ohne einen Satz Erklärung, wie weit das reicht.

Bei agrarkit.de sind drei Bilder drin: die Startseite an Rechner und Handy in einem
Bild, und zweimal derselbe Preis-Kasten, hell und dunkel. Beide Ausschnitte sind
exakt gleich beschnitten — nur deshalb liest man auf einen Blick, dass es dieselbe
Stelle in zwei Fassungen ist.

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

Stand August 2026 einmal überarbeitet: gleiche Einfachheit, moderneres Bild.

- **Drei Farben, mehr nicht.** Warmes Creme als Grundfläche (`--papier`, `#faf8f2`),
  dunkles Grün für die hervorgehobenen Flächen (`--gruen`, `#26311f`), Orange als
  Signal (`--akzent`, `#c4491a`). Alle drei stehen in `styles.css` ganz oben — an
  einer Stelle ändern reicht für die ganze Seite. Das Grün ist dasselbe wie in
  Agrarkit, dadurch passen die Bildschirmfotos ohne Bruch in die Seite.
- **Creme statt Weiß.** Reines Weiß bleibt den Karten vorbehalten. Dadurch heben
  sich Karten von der Fläche ab, ohne dass es dafür schwere Rahmen braucht.
- **Runde Ecken und Pillenknöpfe.** Karten 24 px, die dunklen Flächen 28 px,
  Knöpfe komplett rund. Das ist der größte Teil des „moderner" — Form statt Farbe.
- **Die dunklen Abschnitte sind gerundete Flächen im Papier**, nicht randlose
  Bänder. Nimmt der Seite die Strenge, ohne dass Farbe dazukommt.
- **Space Grotesk jetzt durchgehend**, auch im Fließtext. Vorher nur Überschriften.
  Die Schrift liegt lokal, es wird nichts von Google geladen.
- Space Grotesk ist eine Variable Font (Gewichtsachse 300–700). Deshalb steht im
  `@font-face` ein Bereich (`font-weight: 300 700`) und keine Einzelzahl — sonst
  interpoliert der Browser nicht und „Bold" wäre gar nicht fett.
- **Kontrast ist durchgerechnet.** Keine Textfarbe auf dieser Seite liegt unter
  4,5:1 gegen ihren Untergrund. Deshalb gibt es zwei Orangetöne: das dunklere für
  Creme, das hellere nur auf Grün.
- Kein Kontaktformular. Die Telefonnummer ist der Haupt-Call-to-Action — und steht
  deshalb im Hero in einer eigenen grünen Karte, im Kontaktabschnitt riesig und
  oben in der Navigation als Knopf.

### Warum die Seite ohne Fotos von dir funktioniert

Solange es keine Bilder von dir bei der Arbeit gibt, wären Platzhalter das
Schlechteste: Eine Seite mit gestreiften Kästen sieht unfertig aus, und unfertig
ist das Gegenteil von zuverlässig. Deshalb ist der Bildbedarf einfach aus dem
Entwurf herausgenommen worden:

- **Im Hero** steht rechts die grüne Karte mit der Nummer statt eines Fotos.
- **Direkt darunter** die Leiste „Gearbeitet für" mit den drei Kundenlogos. Jedes
  hat im CSS seine eigene Höhe — ein hohes Wappen und eine flache Wortmarke wirken
  bei gleicher Pixelhöhe völlig unterschiedlich groß.
- **Bei „Über mich"** steht statt des Portraits der Satz, an dem du gemessen
  werden willst, auf grüner Fläche.
- **Beim Kommunalpolitiker** ist der Fall eine reine Textkarte mit Rahmen.
- Bilder gibt es nur da, wo es echte gibt: die Videoflächen, die drei
  Agrarkit-Bildschirmfotos und die drei von agrarkit.de.

Kommen später Fotos dazu, müssen sie nichts reparieren, sondern kommen zu einer
Seite hinzu, die schon steht. An den drei Stellen oben steht jeweils ein Kommentar
im HTML, wo genau.

## Wichtig: der Versionsstempel hinter styles.css

In allen drei HTML-Dateien steht die Gestaltungsdatei so drin:

```html
<link rel="stylesheet" href="styles.css?v=2026-08-29">
```

Das `?v=...` ist Absicht. Browser merken sich `styles.css` tagelang. Ohne den
Stempel bekommt jemand, der schon mal auf der Seite war, das neue HTML mit der
**alten** Gestaltung serviert — die Seite sieht dann kaputt aus, obwohl alles
richtig hochgeladen ist. Genau das ist einmal passiert.

**Regel: Wer `styles.css` oder `script.js` ändert, setzt das Datum hoch — in allen
drei HTML-Dateien.** Irgendein neuer Wert reicht, das Datum ist nur bequem zu lesen.
Am HTML selbst musst du nichts machen, das holt der Browser ohnehin jedes Mal neu.

## Tonalität — falls Texte geändert werden

Zielgruppe sind Betriebe, Gemeinden, Vermieter und Vereine hier aus der Gegend.
Fachlich top, keine Zeit, kein Vorwissen, oft noch nie mit sowas zu tun gehabt.
Danach ist jeder Satz gebaut:

- **Zuverlässigkeit wird gezeigt, nie behauptet.** Unter „Wie das bei mir läuft"
  steht deshalb nicht „ich bin zuverlässig", sondern „sag ich Dienstag, bin ich
  Dienstag da". Ein Satz wie „viele Handwerker sind unzuverlässig" dürfte auf dieser
  Seite nie stehen — er würde genau die Leute beleidigen, die anrufen sollen.

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
- Getestet in Chromium auf 390 px und 1440 px: kein horizontales Scrollen, keine
  Konsolenfehler, null Requests an Dritte vor dem Video-Klick.
- Die Bildschirmfotos haben `width`/`height` im HTML und `loading="lazy"`. Dadurch
  springt beim Laden nichts, und geladen werden sie erst kurz bevor man sie sieht.
- Barrierefreiheit: Skip-Link, sichtbarer Fokus, `aria-expanded` am Menü,
  sprechende `aria-label` an den Video-Knöpfen, `prefers-reduced-motion` beachtet.
- Impressum und Datenschutz stehen auf `noindex` — sie sollen nicht bei Google
  auftauchen, verlinkt sind sie ja im Fuß.
