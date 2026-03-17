<?php
add_action('wp_dashboard_setup', 'revtrackr_remove_dashboard_widgets');

function revtrackr_remove_dashboard_widgets()
{
    // Remove default WordPress widgets
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');   // At a Glance
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');   // Quick Draft
    remove_meta_box('dashboard_primary', 'dashboard', 'side');       // WordPress Events and News
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');    // Activity

    // Remove third-party plugin widgets
    remove_meta_box('rg_forms_dashboard', 'dashboard', 'normal');    // Gravity Forms
    remove_meta_box('wpseo-dashboard-overview', 'dashboard', 'side'); // Yoast SEO
    remove_meta_box('searchwp_statistics', 'dashboard', 'normal');  // Search WP Statistics

    // Remove Site Health (this one is a bit special)
    remove_meta_box('dashboard_site_health', 'dashboard', 'normal');  // Site Health

    remove_meta_box('ogf-rss-feed', 'dashboard', 'normal');  // Typography News from Fonts Plugin
    remove_meta_box('wpseo-wincher-dashboard-overview', 'dashboard', 'normal');  // Yoast SEO / Wincher: Top Keyphrases
    remove_meta_box('wpe_dify_news_feed', 'dashboard', 'normal');  // WP Engine Widget

}
