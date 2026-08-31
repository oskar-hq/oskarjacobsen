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
- [x] Agrarkit-Bildschirmfotos und die von agrarkit.de sind drin, in Geräte-Rahmen.
- [x] Impressum, Umsatzsteuer — du bist Kleinunternehmer, also steht dort die
      Regelung nach § 19 UStG. Das Impressum ist fertig.
- [x] Kundenlogos — Gemeinde Gelting, Petersens, Lasse.PTS und Agrarkit laufen in
      der Leiste unter dem Hero durch. Gelting und Petersens kommen aus dem Repo
      `oskar-hq/jacobsen-website`, Ordner `kunden-logos/`.
- [x] Lasse.PTS als Vektor. Du hast `Lassepts.svg` hochgeladen, die war weiß auf
      1920×1080 Leinwand — also für dunklen Hintergrund gebaut. Daraus ist
      `bilder/logos/lasse-pts.svg` geworden: enger Rahmen um die Wortmarke und
      dieselbe Tinte wie beim Petersens-Logo (`#191d14`), damit sie auf dem
      cremefarbenen Grund überhaupt zu sehen ist. Deine Originaldatei liegt
      unverändert in `bilder/original/Lassepts.svg`. Das alte freigestellte
      `lasse-pts.png` ist raus.

**Noch nicht angekommen:**
- [ ] Das zweite Logo in besserer Auflösung. Angekommen ist bisher nur Lasse.PTS.
      Das Agrarkit-Logo kam nur als Bildschirmfoto — deshalb ist es als SVG
      nachgebaut (im Quelltext von `index.html`, damit es die Schrift der Seite
      nimmt). Wenn die Originaldatei kommt, tausche ich sie aus.

**Gelöscht, weil es sich wiederholt hat:**
- Der ganze Abschnitt „Wie das bei mir läuft". Preis, Antwortzeit und
  Erreichbarkeit standen sinngemäß schon in der grünen Karte im Hero.
- Die grüne Karte „Woran du mich messen kannst" neben „Über mich". Der Satz
  darin ist nicht verloren — er steht jetzt als normaler Absatz im Fließtext,
  wo er ursprünglich herkam.
- Die drei Zeilen „Ich komm zu dir raus / Unterwegs / Erreichbar" unter „Über
  mich". Das erste stand wortgleich auch in der Hero-Karte.

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
**Eigene Software** (Agrarkit selbst), **Websites** (agrarkit.de, und später der
Kommunalpolitiker).

Die Reihenfolge erzählt absichtlich etwas: erst das Programm, das ich gebaut habe —
und gleich darunter die Website, die dafür wirbt. Wer bis dahin gelesen hat,
versteht ohne einen Satz Erklärung, wie weit das reicht.

### Untereinander auf dem Handy, Karussell am Rechner

Es ist **eine Liste im Quelltext**, nur zweimal anders angeordnet:

- **Bis 820 px** stehen die Arbeiten schlicht untereinander. Keine Knöpfe, keine
  Punkte, nichts zu bedienen — auf einem kleinen Bildschirm ist Scrollen die
  Bedienung, die jeder kennt.
- **Ab 820 px** wird daraus eine Spur, die seitlich scrollt, mit einem Pfeil
  links und einem rechts daneben. Darunter Punkte und ein Zähler.

Dahinter steckt kein nachgebautes Scrollen, sondern ein ganz normaler seitlicher
Scroll-Bereich mit Einrastpunkten (`scroll-snap`). Die Pfeile schieben nur um eine
Folie weiter. Dadurch funktionieren Trackpad, Scrollrad und Tastatur ohne eine
Zeile extra.

Das Skript prüft nur, **ob die Spur überhaupt scrollt**. Tut sie es nicht (Handy),
hält es sich komplett raus und nimmt der Spur sogar den Tabstopp weg, damit man
nicht ins Leere tabbt. Umschalten muss man nichts, das macht allein das CSS.

Ohne JavaScript bleibt die Spur am Rechner mit dem Trackpad schiebbar; Pfeile und
Punkte sind dann ausgeblendet, weil sie nichts täten.

**Neue Arbeit einbauen:** ein `<article class="folie">` in die Spur hängen. Die
Punkte zählt `script.js` selbst, da ist nichts nachzutragen.

### Endlos — und warum das zwei Kopien braucht

Die Spur hört nicht auf: von 5 geht es weiter auf 1, von 1 zurück auf 5.

Der naheliegende Weg wäre, am Ende einfach den Scrollstand auf Folie 1 zu setzen.
Das sieht aber schlecht aus — die Spur rast sichtbar durch alle Folien zurück, und
genau dieses Zurückrasen soll ja weg.

Deshalb hängt `script.js` beim Start **zwei Kopien** an die Enden:

    [Kopie von 5] [1] [2] [3] [4] [5] [Kopie von 1]
                   ^ hier steht die Spur beim Laden

Klickt man auf Folie 5 weiter, fährt die Spur ganz normal eine Folie nach rechts —
und dort steht schon die Kopie von Folie 1. Sobald die Fahrt steht, wird der
Scrollstand **ohne Animation** auf die echte Folie 1 gesetzt. Fürs Auge passiert
dabei nichts: es ist ja dasselbe Bild an derselben Stelle. Nach links funktioniert
es spiegelverkehrt.

Drei Dinge, die daran hängen:

- **Die Kopien stehen nicht im Quelltext.** Dort soll jede Arbeit genau einmal
  stehen — dieselbe Regel wie bei der Logo-Laufleiste. `cloneNode` macht den Rest.
- **Sie sind `inert` und `aria-hidden`.** Kein Tabstopp, kein Klick, keine Ansage
  für Vorlesesoftware. Sonst gäbe es die Videos und die Links doppelt — und die
  Kopien haben ohnehin keine Klick-Behandlung, weil `cloneNode` keine
  Ereignisbehandlung mitkopiert. Dazu im CSS `pointer-events: none` für die Maus.
- **Auf dem Handy sind sie ausgeblendet** (`.folie--kopie { display: none }`), sonst
  stünden in der Liste untereinander zwei Arbeiten doppelt drin. Erst ab 820 px,
  wenn wirklich eine Spur daraus wird, tauchen sie auf.

Wann die Fahrt zu Ende ist, meldet ein Timer: 140 ms nach dem letzten
Scrollereignis gilt die Spur als stehend. Das deckt auch den Fall ab, dass jemand
mit dem Trackpad von Hand über das Ende hinausschiebt — dann wird genauso still
umgesetzt. `scrollend` gibt es noch nicht überall, deshalb der Timer.

Die Pfeile werden dadurch **nie mehr abgeschaltet**. Es geht in beide Richtungen
immer weiter.

### Die Punkte und der Läufer

Die Punkte selbst ändern sich nie. Welche Folie dran ist, zeigt ein einzelner
**Läufer**, der darüber liegt und **direkt an der Scrollposition hängt**: seine
Position ist der Anteil der Strecke **zwischen erster und letzter echter Folie**,
als Kommazahl. Bei halber Strecke steht er zwischen zwei Punkten.

Nicht über die ganze Spur gerechnet — die ist wegen der beiden Kopien sieben Folien
breit, und dann stünde der Läufer überall daneben. Auf den Kopien bleibt er am Rand
stehen und ist nach dem stillen Sprung auf der anderen Seite. Beim Umlauf 5 → 1
rutscht er also nicht rückwärts durch alle Punkte, sondern wartet kurz und ist dann
vorn.

Genau deshalb hat er **bewusst keine eigene Animation**. Ein Übergang würde erst
starten, wenn der Wert sich ändert, und dann hinter der Bewegung herlaufen — das
war das Hängen vorher. So kommt die Bewegung vom Scrollen selbst und kann gar
nicht nachlaufen.

Gerechnet wird bei jedem Scrollereignis, aber gebündelt auf das nächste Bild des
Browsers (`requestAnimationFrame`): 60 Bilder je Sekunde, trotzdem nur eine
Rechnung pro Bild. Zähler und `aria-current` werden nur angefasst, wenn sich die
Folie wirklich ändert — sonst würde die Zahl bei jedem Pixel flackern.

Der Abstand von Punktmitte zu Punktmitte wird **aus dem fertigen Layout gemessen**,
nicht aus dem CSS abgeschrieben. Dadurch stimmt es auch, wenn später jemand Größe
oder Abstand der Punkte ändert.

### Die Reihenfolge der Folien

Nicht erst alle Filme und dann der Rest, sondern nach Wirkung sortiert und im
Wechsel der Machart:

1. **Agrarkit** — die Ackerschlagkartei. Das Beeindruckendste zuerst: eigene
   Software, Karte und Handy in einem Bild.
2. **Gemeinde Gelting** — Imagefilm. Bekannter Name aus der Gegend, sofort
   verständlich.
3. **agrarkit.de** — die Website dazu. Wieder ein anderes Gewerk.
4. **Petersens Ferienwohnungen** — Imagefilm mit Kundenzitat.
5. **Lasse.PTS** — Hochkant-Videos mit Kundenzitat.

Nie steht zweimal dasselbe direkt hintereinander, und die beiden Kundenzitate
stehen am Schluss — da wirken sie am meisten.

Am Rechner sind alle Folien so hoch wie die höchste — deshalb ist das Paar
Hochkant-Videos im CSS auf 430 px Breite begrenzt. Ohne die Grenze macht diese
eine Folie das ganze Karussell unnötig hoch.

### Geräte-Rahmen

Bildschirmfotos stehen nicht nackt in der Seite. Beide Software-Folien zeigen
**ein Browserfenster mit einem Handy davor** — der Rechner groß, das Handy
überlappend unten rechts. Auf schmalen Bildschirmen stehen beide untereinander.

Beide Rahmen sind komplett in CSS gebaut: kein fremdes Mockup-Bild, keine
zusätzliche Datei, und sie nehmen die Farben der Seite an. Die Adresszeile im
Browserfenster ist echter Text, den man einfach überschreibt.

So sieht ein Block aus (in `index.html` zweimal vorhanden, zum Kopieren):

```html
<div class="geraete">
  <div class="geraete__buehne">
    <div class="fenster">
      <div class="fenster__leiste" aria-hidden="true">
        <span class="fenster__punkte"></span>
        <span class="fenster__adresse">deine-domain.de</span>
      </div>
      <img class="fenster__bild" src="bilder/…" alt="…" width="…" height="…" loading="lazy">
    </div>
    <div class="handy geraete__handy">
      <img class="handy__bild" src="bilder/…" alt="…" width="620" height="1342" loading="lazy">
    </div>
  </div>
</div>
```

Für eine neue Referenz brauchst du also genau zwei Bildschirmfotos: eins am
Rechner (quer) und eins vom Handy (hochkant, etwa 620 px breit reicht).

### Die Logo-Laufleiste

Die Kundenlogos laufen langsam durch. Im Quelltext steht jedes Logo **genau
einmal**; `script.js` verdoppelt die Spur so oft, bis sie breiter als der
Bildschirm ist, und dann noch einmal komplett — dadurch sieht die Bewegung aus
wie eine Endlosschleife. Beim Darüberfahren hält sie an.

Ohne JavaScript und bei „Bewegung reduzieren" stehen die Logos einfach umgebrochen
nebeneinander. Die Leiste funktioniert also auch dann.

Die Logos sind entsättigt und leicht zurückgenommen, damit die Leiste ruhig bleibt
und das bunte Gelting-Wappen nicht alles an sich zieht; beim Darüberfahren kommt
die echte Farbe.

**Neues Logo:** ein `<li>` mit `<img class="logo logo--name">` ergänzen und im CSS
eine Höhe für `.logo--name` setzen. **Nicht alle gleich hoch machen** — ein hohes
Wappen und eine flache Wortmarke wirken bei gleicher Pixelhöhe völlig
unterschiedlich groß. Die Werte sind nach Augenmaß gesetzt.

Das Agrarkit-Logo steht als **SVG direkt im HTML**, nicht als Datei: so nimmt die
Wortmarke die Schrift der Seite an und bleibt bei jeder Größe scharf.

## Die Videos

Vier Arbeitsproben, eingebunden als **Zwei-Klick-Lösung**: vor dem Klick geht kein
einziges Byte an Google. Erst der Klick lädt den Player, und zwar über
`youtube-nocookie.com`.

Das ist der Grund, warum die Seite **ohne Cookie-Banner** auskommt. Wer hier auf ein
normales YouTube-Embed umstellt, braucht ein Banner und muss `datenschutz.html`
anpassen — das hängt zusammen.

### Die Standbilder

Jedes Video zeigt vorab ein Standbild. Das ist der eine Punkt, an dem man es leicht
falsch macht: YouTube bietet unter `i.ytimg.com` fertige Vorschaubilder an — die
holen würde bedeuten, dass beim bloßen Aufrufen der Seite doch wieder ein Request an
Google geht, und dann ist die Zwei-Klick-Lösung wertlos. Deshalb **liegen die Bilder
hier im Ordner**:

    bilder/video-gelting.webp     1200 x 675   Imagefilm Gemeinde Gelting
    bilder/video-petersens.webp   1200 x 675   Imagefilm Petersens
    bilder/video-lasse-1.webp      473 x 841   Social-Media-Video Lasse.PTS
    bilder/video-lasse-2.webp      537 x 955   Social-Media-Video Lasse.PTS

Zusammen 132 kB. Sie sind schon auf 16:9 beziehungsweise 9:16 beschnitten, damit
keine Pixel mitgeschickt werden, die der Browser ohnehin wegschneidet. Die
unbeschnittenen Fassungen liegen in `bilder/original/`.

Das `<img>` steht **im Knopf**, nicht dahinter. `script.js` ersetzt beim Klick den
ganzen Knopf durch den Player — dadurch verschwindet das Standbild mit, ohne dass
dafür eine Zeile Extra-Code nötig wäre.

### Der Play-Knopf ist Milchglas

Erst war die Scheibe deckend orange und musste deshalb aus der Mitte weichen: beim
Gelting-Film ist der Satz „Heimat ist kein Ort - Heimat ist ein Gefühl." mittig ins
Bild eingebrannt, die Scheibe hat die halbe Zeile verdeckt, und bei den Hochkant-
Videos lag sie auf den Gesichtern.

Jetzt ist sie **durchscheinend** — dieselbe Machart wie die Kopfleiste beim Scrollen,
getönte Fläche plus Weichzeichner:

    background: rgba(250, 248, 242, .65);
    backdrop-filter: saturate(140%) blur(8px);

Damit darf sie zurück in die Mitte, wo man einen Play-Knopf sucht, ohne dass sie
etwas zudeckt: man liest den eingebrannten Satz durch sie hindurch und sieht das
Gesicht dahinter. Sie ist außerdem kleiner geworden, 46 px statt 58 (Hochformat
38 px).

Die 65 % sind eine Untergrenze, keine Geschmacksfrage. Weiter runter und das dunkle
Dreieck verliert über einem dunklen Standbild den Kontrast; so sind es im
schlechtesten Fall 5,6:1, bei hellen Bildern rund 10:1.

Zwei Dinge halten das über **jedem** Foto zusammen, auch über einem, das erst später
dazukommt:

- **Ring um die Scheibe** (`box-shadow`, 1,5 px). Eine helle Scheibe auf hellem
  Himmel wäre sonst kaum zu sehen. Mit Ring sind es an beiden Extremen mindestens
  4:1.
- **Beschriftung auf eigener deckender Fläche** (`.video__marke`). Direkt aufs Foto
  gesetzter Text hätte je nach Aufnahme 2:1. So sind es im schlechtesten Fall
  11,3:1 für „Video starten" und 7,0:1 für den Hinweis.

Beim Hochformat ist der Hinweis ein schmaler Streifen über die ganze Breite statt
eines Kästchens in der Ecke — bei 167 px Breite auf dem Handy bricht „LÄDT YOUTUBE"
sonst um und deckt den halben Ausschnitt zu.

### Ein Video tauschen oder ergänzen

1. `data-video`-ID im Button ändern (der Teil der YouTube-Adresse nach `/shorts/`
   oder `youtu.be/`) und `data-titel` dazu.
2. Querformat bekommt `video--quer`, Hochformat `video--hoch`.
3. **Standbild nicht vergessen** — sonst steht dort wieder die leere grüne Fläche.
   Einen Screenshot aus dem Video ziehen, auf 16:9 bzw. 9:16 beschneiden, als WebP
   nach `bilder/` und als `<img class="video__bild">` in den Button, vor die
   `.video__play`-Zeile. Nicht von YouTube laden, siehe oben.

## Die Links auf die echten Seiten

Zwei Folien führen weiter zu dem, was dort zu sehen ist:

    app.agrarkit.de   auf der Folie „Eine Ackerschlagkartei für Schleswig-Holstein"
    agrarkit.de       auf der Folie „Die Website für Agrarkit"

Die Adresse ist die Beschriftung — dann weiß man vorher, wo man landet. Beide gehen
über `target="_blank"` in einen neuen Tab, damit man den Faden auf dieser Seite nicht
verliert, und tragen `rel="noopener"`: ohne das kann die geöffnete Seite über
`window.opener` auf diese hier zugreifen. Kein `noreferrer` — so sieht Agrarkit in
der eigenen Statistik, dass der Besuch von hier kam.

Im Knopf steckt ein `<span class="nur-vorlesen">`, das den neuen Tab ansagt. **Hier
ist eine Falle drin, die einmal zugeschnappt ist:** die Klasse arbeitet mit
`position: absolute` und sucht sich den nächsten positionierten Vorfahren. Ohne
`position: relative` am Link war das die Karussell-Bühne — also ein Kasten
*außerhalb* der scrollenden Spur. Damit entkam das unsichtbare Span der
Beschneidung und zog die ganze Seite auf 2922 px Breite. Wer die Klasse woanders
einbaut: der Elternteil braucht `position: relative`.

Die nachgebaute Adresszeile im Browser-Rahmen zeigt jetzt auch die echte Adresse
(`app.agrarkit.de` statt der vorher erfundenen `agrarkit.de/schlaege`).

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
- **Direkt darunter** die Logo-Laufleiste mit den vier Logos.
- **Bei „Über mich"** trägt der Text allein — auch die grüne Karte daneben ist
  raus, weil die Zuverlässigkeit schon oben im Hero steht.
- Bilder gibt es nur da, wo es echte gibt: die vier Video-Standbilder und die
  vier Bildschirmfotos in den Geräte-Rahmen.

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
