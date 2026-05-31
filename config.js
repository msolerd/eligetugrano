/* ============================================================
   ELIGETUGRANO.COM — Configuración global
   Edita este archivo para actualizar textos en toda la web.
   ============================================================ */

const TOOLTIPS = {
  intensidad: 'Es la fuerza del sabor. 1 grano significa que es suave.<br>5 que es fuerte, oscuro y persistente.',
  acidez:     'Es el tipo de sabor. 1 grano significa que es clásico y equilibrado.<br>5 que es exótico fresco y afrutado.',
  cuerpo:     'Es la densidad en boca. 1 significa que es muy ligero.<br>5 granos que es denso y cremoso.',
  dulzura:    'Es la suavidad natural. 1 grano significa que es amargo.<br>5 granos que es suave con notas a caramelo.',
  aroma:      'Es el olor del café. 1/2 granos significa aroma clásico.<br>2/3 granos toque a frutos secos; 4/5 granos toque frutal.',
  cafeina:    'Grano lleno = con cafeína<br>Grano vacío = descafeinado'
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
