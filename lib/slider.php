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
          1200: { perPage: 4, gap: '1rem' },
          992: { perPage: 3, gap: '0.75rem' },
          576:  { perPage: 2, gap: '0.5rem' }
        }
      }).mount();
    });
  });
  JS;
  wp_add_inline_script('splide-js', $init);
});
