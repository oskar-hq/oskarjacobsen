// Zwei Dinge: Mobile-Menü und die Zwei-Klick-Lösung für die Videos.
(function () {
  'use strict';

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
})();
