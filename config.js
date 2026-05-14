/* ============================================================
   ELIGETUGRANO.COM — Configuración global
   Edita este archivo para actualizar textos en toda la web.
   ============================================================ */

const TOOLTIPS = {
  intensidad: 'Potencia general del sabor en boca.<br>A más granos, más contundente.',
  acidez:     'Viveza y frescura en el paladar.<br>No es agresividad, es carácter.',
  cuerpo:     'Textura y peso del café en boca.<br>De ligero y fluido a denso y aterciopelado.',
  dulzura:    'Notas naturales de caramelo,<br>fruta o miel sin añadir azúcar.',
  aroma:      'Intensidad y complejidad de los<br>aromas en taza y en nariz.',
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
