// Vier Dinge: Mobile-Menü, die Zwei-Klick-Lösung für die Videos,
// die Logo-Laufleiste und das Karussell im Arbeiten-Abschnitt.
(function () {
  'use strict';

  // Alles, was ohne JavaScript nicht funktionieren würde, hängt an dieser
  // Klasse. So bleibt die Seite ohne JavaScript vollständig bedienbar:
  // die Laufleiste steht dann still, das Karussell bleibt eine schiebbare Spur.
  document.documentElement.classList.add('js');

  var ruhig = window.matchMedia &&
              window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Mobile-Menü ------------------------------------------------------ */
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');

  if (burger && menu) {
    var schliessen = function () {
      menu.classList.remove('ist-offen');
      burger.setAttribute('aria-expanded', 'false');
    };

    burger.addEventListener('click', function () {
      var offen = menu.classList.toggle('ist-offen');
      burger.setAttribute('aria-expanded', offen ? 'true' : 'false');
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') schliessen();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') schliessen();
    });
  }

  /* --- Videos ------------------------------------------------------------
     Vor dem Klick geht kein einziger Request an YouTube. Erst wenn jemand
     draufdrückt, wird der Player nachgeladen — das ist die Zustimmung, von
     der die Datenschutzerklärung spricht. Wer hier was ändert, muss auch
     datenschutz.html anpassen.
     ---------------------------------------------------------------------- */
  var flaechen = document.querySelectorAll('.video__flaeche');

  Array.prototype.forEach.call(flaechen, function (flaeche) {
    var titel = flaeche.getAttribute('data-titel') || 'Video';
    flaeche.setAttribute(
      'aria-label',
      titel + ' abspielen. Startet erst nach dem Klick und lädt dabei YouTube.'
    );

    flaeche.addEventListener('click', function () {
      var id = flaeche.getAttribute('data-video');
      if (!id) return;

      var rahmen = document.createElement('iframe');
      rahmen.src =
        'https://www.youtube-nocookie.com/embed/' +
        encodeURIComponent(id) +
        '?autoplay=1&rel=0';
      rahmen.title = titel;
      rahmen.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      rahmen.setAttribute('allowfullscreen', '');
      rahmen.setAttribute('loading', 'lazy');

      flaeche.replaceWith(rahmen);
      rahmen.focus();
    });
  });

  /* --- Logo-Laufleiste ---------------------------------------------------
     Im Quelltext steht jedes Logo genau einmal. Hier wird die Spur so oft
     verdoppelt, bis sie breiter ist als der Bildschirm, und dann noch einmal
     komplett — dadurch sieht translateX(-50%) aus wie eine Endlosschleife.
     ---------------------------------------------------------------------- */
  (function laufband() {
    var kasten = document.querySelector('.laufband');
    var spur = document.querySelector('[data-laufband]');
    if (!kasten || !spur || ruhig || !spur.children.length) return;

    // Erst auf eine Zeile umstellen, dann messen — sonst zählt die
    // umgebrochene Breite und die Rechnung stimmt nicht.
    spur.classList.add('ist-bewegt');

    var einmal = spur.innerHTML;
    var schutz = 0;
    while (spur.scrollWidth < kasten.clientWidth && schutz < 30) {
      spur.innerHTML += einmal;
      schutz++;
    }

    var haelfte = spur.scrollWidth;
    spur.innerHTML += spur.innerHTML;

    // Ruhige, gleichbleibende Geschwindigkeit, egal wie viele Logos es sind.
    spur.style.animationDuration = Math.max(30, Math.round(haelfte / 30)) + 's';
  })();

  /* --- Karussell ---------------------------------------------------------
     Kein eigenes Scrollen nachgebaut: die Spur ist ab 820 px ein normaler
     seitlicher Scroll-Bereich mit Einrastpunkten. Die Pfeile schieben nur um
     eine Folie weiter, die Punkte zeigen, wo man ist. Dadurch funktionieren
     Trackpad, Tastatur und Scrollrad ohne eine Zeile extra.

     Darunter stehen die Folien schlicht untereinander. Das entscheidet allein
     das CSS — hier wird nur geprüft, ob die Spur überhaupt scrollt, und wenn
     nicht, hält sich das Skript komplett raus.
     ---------------------------------------------------------------------- */
  Array.prototype.forEach.call(
    document.querySelectorAll('[data-karussell]'),
    function (karussell) {
      var spur = karussell.querySelector('[data-spur]');
      var zurueck = karussell.querySelector('[data-zurueck]');
      var vor = karussell.querySelector('[data-vor]');
      var punkteliste = karussell.querySelector('[data-punkte]');
      var zaehler = karussell.querySelector('[data-zaehler]');
      if (!spur) return;

      // Feste Liste: die echten Folien. Die gleich angehängten Kopien stehen
      // absichtlich nicht drin.
      var folien = spur.querySelectorAll('.folie');
      if (folien.length < 2) return;
      var letzteNr = folien.length - 1;

      /* --- Endlos ----------------------------------------------------------
         Hinter der letzten Folie steht noch einmal die erste, vor der ersten
         noch einmal die letzte. Man fährt also ganz normal weiter und sieht
         dabei schon, was kommt. Sobald die Spur steht, wird sie ohne
         Animation an die echte Stelle gesetzt — fürs Auge passiert dabei
         nichts, es ist ja dasselbe Bild.

         Die einfache Lösung wäre, bei 5 einfach auf 1 zu springen. Dann rast
         die Spur aber sichtbar durch alle Folien zurück, und genau das soll
         es nicht sein.

         Die Kopien entstehen hier und nicht im Quelltext: dort soll jede
         Arbeit genau einmal stehen. Sie sind `inert` — kein Tabstopp, kein
         Klick, keine Ansage. Sonst gäbe es die Videos und die Links doppelt.
         -------------------------------------------------------------------- */
      var kopfKopie = folien[letzteNr].cloneNode(true);
      var fussKopie = folien[0].cloneNode(true);
      [kopfKopie, fussKopie].forEach(function (kopie) {
        kopie.classList.add('folie--kopie');
        kopie.setAttribute('aria-hidden', 'true');
        kopie.setAttribute('inert', '');
      });
      spur.insertBefore(kopfKopie, folien[0]);
      spur.appendChild(fussKopie);

      // Punkte anlegen — so viele, wie es echte Folien gibt. Dazu ein Läufer,
      // der darüber liegt und die aktuelle Stelle zeigt.
      var punkte = [];
      var laeufer = null;
      if (punkteliste) {
        Array.prototype.forEach.call(folien, function (folie, i) {
          var li = document.createElement('li');
          var knopf = document.createElement('button');
          knopf.type = 'button';
          knopf.className = 'karussell__punkt';
          knopf.setAttribute('aria-label', 'Zu Arbeit ' + (i + 1) + ' springen');
          knopf.addEventListener('click', function () { zeige(i); });
          li.appendChild(knopf);
          punkteliste.appendChild(li);
          punkte.push(knopf);
        });
        laeufer = document.createElement('span');
        laeufer.className = 'karussell__laeufer';
        punkteliste.appendChild(laeufer);
      }

      // Abstand von Punktmitte zu Punktmitte. Wird aus dem fertigen Layout
      // gemessen, nicht aus dem CSS abgeschrieben — dann stimmt es auch, wenn
      // jemand später die Größe oder den Abstand ändert.
      function schritt() {
        if (punkte.length < 2) return 0;
        return punkte[1].getBoundingClientRect().left -
               punkte[0].getBoundingClientRect().left;
      }

      // Auf schmalen Bildschirmen stehen die Folien untereinander, die Spur
      // scrollt also gar nicht. Dann gibt es nichts zu bedienen und nichts
      // anzufassen — auch keinen Tabstopp ins Leere.
      function istSpur() {
        return spur.scrollWidth - spur.clientWidth > 4;
      }

      // Stelle, an der Folie i einrastet. -1 meint die Kopie vorne,
      // letzteNr + 1 die Kopie hinten.
      function ziel(i) {
        var el = i < 0 ? kopfKopie : (i > letzteNr ? fussKopie : folien[i]);
        return el.offsetLeft - spur.offsetLeft;
      }

      // Stelle, an der die Spur gerade am ehesten steht — die Kopien zählen
      // dabei mit.
      function naechste() {
        var beste = 0;
        var abstand = Infinity;
        for (var i = -1; i <= letzteNr + 1; i++) {
          var d = Math.abs(ziel(i) - spur.scrollLeft);
          if (d < abstand) { abstand = d; beste = i; }
        }
        return beste;
      }

      // Dieselbe Stelle, auf eine echte Folie umgerechnet: auf der Kopie
      // vorne steht in Wahrheit die letzte, auf der hinten die erste.
      function aktuell() {
        var i = naechste();
        if (i < 0) return letzteNr;
        if (i > letzteNr) return 0;
        return i;
      }

      // Umsetzen, ohne dass der Browser dabei animiert.
      function ohneAnimation(tun) {
        var vorher = spur.style.scrollBehavior;
        spur.style.scrollBehavior = 'auto';
        tun();
        void spur.offsetWidth;
        spur.style.scrollBehavior = vorher;
      }

      // Der stille Sprung. Läuft erst, wenn die Spur zur Ruhe gekommen ist —
      // mitten in der Fahrt würde er die Bewegung abwürgen.
      function nachhaken() {
        if (!istSpur()) return;
        var i = naechste();
        if (i >= 0 && i <= letzteNr) return;
        var hin = i < 0 ? ziel(letzteNr) : ziel(0);
        ohneAnimation(function () { spur.scrollLeft = hin; });
      }

      function zeige(i) {
        if (!istSpur()) return;
        spur.scrollTo({
          left: ziel(i),
          behavior: ruhig ? 'auto' : 'smooth'
        });
        // Ohne Animation ist die Fahrt sofort vorbei, also gleich nachhaken.
        if (ruhig) nachhaken();
      }

      // Die Position kommt direkt aus dem Scrollstand, als Kommazahl. Bei
      // halber Strecke steht der Läufer zwischen zwei Punkten. Nichts wartet,
      // nichts rastet nach. Gerechnet wird zwischen erster und letzter echter
      // Folie; auf den Kopien bleibt der Läufer am Rand stehen und springt
      // gleich darauf auf die andere Seite.
      function laeuferSetzen() {
        if (!laeufer) return;
        var von = ziel(0);
        var weite = ziel(letzteNr) - von;
        var anteil = weite > 0 ? (spur.scrollLeft - von) / weite : 0;
        anteil = Math.max(0, Math.min(1, anteil));
        laeufer.style.transform =
          'translate(' + (anteil * letzteNr * schritt()) + 'px, -50%)';
      }

      // Text nur anfassen, wenn sich die Folie wirklich ändert — sonst
      // flackert der Zähler bei jedem Scrollschritt. Die Pfeile werden nicht
      // mehr abgeschaltet, es geht ja in beide Richtungen endlos weiter.
      var letzte = -1;
      function auffrischen() {
        if (!istSpur()) {
          spur.removeAttribute('tabindex');
          return;
        }
        spur.setAttribute('tabindex', '0');
        laeuferSetzen();

        var i = aktuell();
        if (i === letzte) return;
        letzte = i;

        punkte.forEach(function (knopf, n) {
          knopf.setAttribute('aria-current', n === i ? 'true' : 'false');
        });
        if (zaehler) zaehler.textContent = (i + 1) + ' von ' + folien.length;
      }

      if (zurueck) zurueck.addEventListener('click', function () { zeige(aktuell() - 1); });
      if (vor) vor.addEventListener('click', function () { zeige(aktuell() + 1); });

      // Bei jedem Scrollereignis nachziehen, aber gebündelt auf das nächste
      // Bild des Browsers. Dadurch läuft der Läufer mit 60 Bildern je Sekunde
      // mit und trotzdem wird pro Bild nur einmal gerechnet. Der Timer daneben
      // meldet, wann es aufgehört hat zu scrollen — das ist der Moment für den
      // stillen Sprung.
      var geplant = false;
      var haltUhr;
      spur.addEventListener('scroll', function () {
        window.clearTimeout(haltUhr);
        haltUhr = window.setTimeout(nachhaken, 140);
        if (geplant) return;
        geplant = true;
        window.requestAnimationFrame(function () {
          geplant = false;
          auffrischen();
        });
      }, { passive: true });

      window.addEventListener('resize', function () {
        var merk = letzte < 0 ? 0 : letzte;
        letzte = -1;
        if (istSpur()) {
          ohneAnimation(function () { spur.scrollLeft = ziel(merk); });
        }
        auffrischen();
      });

      // Startpunkt ist die erste echte Folie, nicht die Kopie davor.
      if (istSpur()) {
        ohneAnimation(function () { spur.scrollLeft = ziel(0); });
      }
      auffrischen();
    }
  );
})();
