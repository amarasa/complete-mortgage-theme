<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?></title>

    <!-- DNS Prefetch & Preconnect for Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preconnect" href="//fonts.googleapis.com">
    <link rel="preconnect" href="//fonts.gstatic.com" crossorigin>

    <!-- Preload critical Google Fonts CSS -->
    <link rel="preload"
        href="//fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <noscript>
        <link rel="stylesheet"
            href="//fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap">
    </noscript>

    <!-- Delayed Google Tag Manager (fires on LCP) -->
    <script>
        (function() {
            var gtmId = '<?php echo get_field("tag_manager_id", "option"); ?>';

            function loadGTM() {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = document.getElementsByTagName('script')[0],
                    j = document.createElement('script');
                j.async = true;
                j.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtmId;
                f.parentNode.insertBefore(j, f);
            }
            if ('PerformanceObserver' in window) {
                new PerformanceObserver(function(list, obs) {
                    if (list.getEntries().length) {
                        loadGTM();
                        obs.disconnect();
                    }
                }).observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } else {
                window.addEventListener('load', loadGTM);
            }
        })();
    </script>

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

    <!-- GTM noscript fallback -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo get_field("tag_manager_id", "option"); ?>"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>