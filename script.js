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
     Kein eigenes Scrollen nachgebaut: die Spur ist ein normaler seitlicher
     Scroll-Bereich mit Einrastpunkten. Die Pfeile schieben nur um eine Folie
     weiter, die Punkte zeigen, wo man ist. Dadurch funktioniert Wischen auf
     dem Handy, Trackpad, Tastatur und Scrollrad ohne eine Zeile extra.
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

      var folien = spur.querySelectorAll('.folie');
      if (folien.length < 2) return;

      // Punkte anlegen — so viele, wie es Folien gibt.
      var punkte = [];
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
      }

      function aktuell() {
        // Die Folie, deren linke Kante der linken Kante der Spur am nächsten ist.
        var links = spur.scrollLeft;
        var beste = 0;
        var abstand = Infinity;
        Array.prototype.forEach.call(folien, function (folie, i) {
          var d = Math.abs(folie.offsetLeft - spur.offsetLeft - links);
          if (d < abstand) { abstand = d; beste = i; }
        });
        return beste;
      }

      function zeige(i) {
        var folie = folien[Math.max(0, Math.min(folien.length - 1, i))];
        spur.scrollTo({
          left: folie.offsetLeft - spur.offsetLeft,
          behavior: ruhig ? 'auto' : 'smooth'
        });
      }

      function auffrischen() {
        var i = aktuell();
        punkte.forEach(function (knopf, n) {
          knopf.setAttribute('aria-current', n === i ? 'true' : 'false');
        });
        if (zaehler) zaehler.textContent = (i + 1) + ' von ' + folien.length;
        // Am Anfang und am Ende ist der jeweilige Pfeil ohne Funktion.
        if (zurueck) zurueck.disabled = i === 0;
        if (vor) vor.disabled = i === folien.length - 1;
      }

      if (zurueck) zurueck.addEventListener('click', function () { zeige(aktuell() - 1); });
      if (vor) vor.addEventListener('click', function () { zeige(aktuell() + 1); });

      // Beim Scrollen nur nachziehen, wenn es zur Ruhe gekommen ist.
      var wartet;
      spur.addEventListener('scroll', function () {
        window.clearTimeout(wartet);
        wartet = window.setTimeout(auffrischen, 90);
      }, { passive: true });

      window.addEventListener('resize', auffrischen);
      auffrischen();
    }
  );
})();
