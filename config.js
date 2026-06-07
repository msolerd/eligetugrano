/* ============================================================
   ELIGETUGRANO.COM — Configuración global
   Edita este archivo para actualizar textos en toda la web.
   ============================================================ */

const TOOLTIPS = {
  intensidad: 'De suave a potente. Cuánto café sientes en cada sorbo.',
  caracter:   'De clásico y tostado a exótico y frutal. El alma del café.',
  cuerpo:     'De ligero y fluido a denso y cremoso. Cómo se queda la boca después de beberlo.',
  dulzura:    'De amargo y seco a suave y dulce. Las notas naturales del grano.',
  aroma:      'De discreto a muy aromático. La intensidad del olor en taza.',
  cafeina:    'Grano lleno = con cafeína. Grano vacío = descafeinado.'
};

/* Inyecta tooltips en cualquier elemento con data-tooltip="nombre" */
function inyectarTooltips() {
  document.querySelectorAll('[data-tooltip]').forEach(el => {
    const key = el.dataset.tooltip;
    const tip = el.querySelector('.atributo-tooltip-text, .filtro-tooltip-text');
    if (tip && TOOLTIPS[key]) tip.innerHTML = TOOLTIPS[key];
  });
}

/* Posicionamiento JS para tooltips — evita overflow en sidebars */
function iniciarTooltips() {
  document.querySelectorAll('.atributo-tooltip, .filtro-tooltip').forEach(el => {
    const tip = el.querySelector('.atributo-tooltip-text, .filtro-tooltip-text');
    if (!tip) return;
    el.addEventListener('mouseenter', () => {
      tip.style.display = 'block';
      const rect = el.getBoundingClientRect();
      tip.style.top  = (rect.top - tip.offsetHeight - 8) + 'px';
      tip.style.left = (rect.left + rect.width / 2 - tip.offsetWidth / 2) + 'px';
    });
    el.addEventListener('mouseleave', () => { tip.style.display = 'none'; });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  inyectarTooltips();
  iniciarTooltips();
});
