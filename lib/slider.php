<?php
add_action('wp_enqueue_scripts', function () {
    // Splide assets
    wp_enqueue_style(
        'splide-css',
        'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css',
        [],
        '4.1.4'
    );
    wp_enqueue_script(
        'splide-js',
        'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js',
        [],
        '4.1.4',
        true
    );

    // Minimal CSS to style arrows like rounded buttons and keep cards tidy
    $css = <<<CSS
  .logo-slider .splide__slide { display: flex; align-items: stretch; }
  .logo-slider .logo-card { width: 100%; } /* card fills the slide */
  .logo-slider .splide__arrows { position: absolute; inset: 0; pointer-events: none; }
  .logo-slider .splide__arrow {
    pointer-events: auto;
    background: #fff; border: 1px solid rgba(0,0,0,.08);
    box-shadow: 0 2px 10px rgba(0,0,0,.08);
    border-radius: 5px; width: 36px; height: 36px;
    display: grid; place-items: center;
  }
  .logo-slider .splide__arrow--prev { left: -40px; }
  .logo-slider .splide__arrow--next { right: -40px; }

  @media(max-width: 575px) {   
    .logo-slider .splide__arrow--prev { left: -20px; }
  .logo-slider .splide__arrow--next { right: -20px; } }
  .logo-slider { position: relative; } /* ensure arrows position correctly */
  CSS;
    wp_add_inline_style('splide-css', $css);

    // Init: equal-width slides using perPage; arrows visible; autoplay continues
    $init = <<<JS
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.logo-slider').forEach(function(el){
      new Splide(el, {
        type: 'loop',
        autoplay: true,
        interval: 2500,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        pagination: false,
        perPage: 4,       // equal-width slides
        perMove: 1,
        gap: '1.25rem',
        // Make heights nice & even even if logo heights differ slightly
        autoHeight: false,
        breakpoints: {
          1280: { perPage: 4, gap: '1rem' },
          1024: { perPage: 3, gap: '0.75rem' },
          640:  { perPage: 2, gap: '0.5rem' }
        }
      }).mount();
    });
  });
  JS;
    wp_add_inline_script('splide-js', $init);
});
