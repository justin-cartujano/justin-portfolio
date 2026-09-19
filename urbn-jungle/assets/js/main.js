(function(){
  "use strict";

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- header + sticky CTA react to scroll ---- */
  var bar = document.getElementById('topbar');
  var sticky = document.getElementById('stickybar');
  var claim = document.getElementById('claim');
  var ticking = false;

  function onScroll(){
    var y = window.scrollY || window.pageYOffset;
    bar.classList.toggle('is-stuck', y > 24);
    if (sticky && claim) {
      var past = claim.getBoundingClientRect().bottom < 0;
      sticky.classList.toggle('is-up', past);
    }
    ticking = false;
  }
  window.addEventListener('scroll', function(){
    if (!ticking) { ticking = true; window.requestAnimationFrame(onScroll); }
  }, {passive:true});
  onScroll();

  /* ---- testimonial slider ---- */
  var slider = document.getElementById('slider');
  if (slider) {
    var slides = Array.prototype.slice.call(slider.querySelectorAll('.slide'));
    var dotWrap = document.getElementById('dots');
    var i = 0, timer = null;
    var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    slides.forEach(function(_, n){
      var b = document.createElement('button');
      b.className = 'dot';
      b.type = 'button';
      b.setAttribute('role','tab');
      b.setAttribute('aria-label','Review ' + (n + 1));
      b.addEventListener('click', function(){ go(n, true); });
      dotWrap.appendChild(b);
    });
    var dots = Array.prototype.slice.call(dotWrap.children);

    function go(n, manual){
      i = (n + slides.length) % slides.length;
      slides.forEach(function(s, k){ s.classList.toggle('is-on', k === i); });
      dots.forEach(function(d, k){ d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      if (manual) stop();
    }
    function start(){ if (!still && !timer) timer = setInterval(function(){ go(i + 1); }, 7500); }
    function stop(){ if (timer) { clearInterval(timer); timer = null; } }

    slider.querySelectorAll('.arrow').forEach(function(btn){
      btn.addEventListener('click', function(){ go(i + parseInt(btn.dataset.dir, 10), true); });
    });
    slider.addEventListener('mouseenter', stop);
    slider.addEventListener('focusin', stop);
    slider.addEventListener('keydown', function(e){
      if (e.key === 'ArrowLeft')  go(i - 1, true);
      if (e.key === 'ArrowRight') go(i + 1, true);
    });

    go(0);
    start();
  }

  /* ---- lead form ---- */
  var form = document.getElementById('leadForm');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var bad = null;

      form.querySelectorAll('[required]').forEach(function(el){
        var ok = el.type === 'checkbox' ? el.checked : el.value.trim() !== '';
        if (el.type === 'email' && ok) ok = /\S+@\S+\.\S+/.test(el.value);

        var target = el.closest('.phone') || el;
        if (el.type !== 'checkbox') target.classList.toggle('err', !ok);
        if (!ok && !bad) bad = el;
      });

      if (bad) { bad.focus(); return; }

      /* Swap this for your real endpoint, e.g.
         fetch('https://your-crm/webhook', { method:'POST', body:new FormData(form) }) */
      form.classList.add('is-done');
      form.closest('.card').querySelector('.card__head').style.display = 'none';
      form.parentNode.querySelector('.formdone').scrollIntoView({block:'center', behavior:'smooth'});
    });

    form.querySelectorAll('input').forEach(function(el){
      el.addEventListener('input', function(){
        (el.closest('.phone') || el).classList.remove('err');
      });
    });
  }
})();
