// Mobile-Menü. Mehr JS braucht die Seite nicht.
(function () {
  var burger = document.querySelector('.burger');
  var menu = document.getElementById('menu');
  if (!burger || !menu) return;

  function schliessen() {
    menu.classList.remove('ist-offen');
    burger.setAttribute('aria-expanded', 'false');
  }

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
})();
