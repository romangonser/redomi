'use strict';
(function () {
  var html = document.documentElement;

  // Hide immediately so there's no white flash before styles apply
  html.style.opacity = '0';

  function fadeIn() {
    html.style.transition = 'opacity 0.07s ease';
    html.style.opacity = '1';
  }

  // Fade in after first paint
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      requestAnimationFrame(function () { requestAnimationFrame(fadeIn); });
    });
  } else {
    requestAnimationFrame(function () { requestAnimationFrame(fadeIn); });
  }

  function fadeOut(then) {
    html.style.transition = 'opacity 0.06s ease';
    html.style.opacity = '0';
    setTimeout(then, 70);
  }

  // Intercept <a> link clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href]');
    if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || href.indexOf('mailto:') === 0 || href.indexOf('javascript:') === 0) return;
    try {
      var url = new URL(href, location.href);
      if (url.origin !== location.origin) return;
      if (url.href === location.href) return;
    } catch (e) { return; }
    e.preventDefault();
    var dest = href;
    fadeOut(function () { location.href = dest; });
  }, true);

  // Intercept programmatic location.href = '...' (used by go() in each page)
  try {
    var desc = Object.getOwnPropertyDescriptor(Location.prototype, 'href');
    var origSet = desc.set;
    Object.defineProperty(Location.prototype, 'href', {
      get: desc.get,
      configurable: true,
      set: function (v) {
        var self = this;
        try {
          var url = new URL(v, location.href);
          if (url.origin === location.origin && url.href !== location.href) {
            fadeOut(function () { origSet.call(self, v); });
            return;
          }
        } catch (e) {}
        origSet.call(this, v);
      }
    });
  } catch (e) {}
})();
