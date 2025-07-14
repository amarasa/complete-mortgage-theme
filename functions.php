<?php
define("COMPLETE_THEME_VERSION", "1.1.4");

require get_template_directory() . '/puc/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// 🛠 Initialize PUC Update Checker
$themeUpdateChecker = PucFactory::buildUpdateChecker(
    'http://206.189.194.86/api/license/verify', // API Endpoint
    get_template_directory(), // Theme path
    'complete-mortgage-theme' // Theme slug
);

// :arrows_counterclockwise: Add query args like license key & domain
$themeUpdateChecker->addQueryArgFilter(function (array $queryArgs) {
    $license_key = get_option('complete_mortgage_theme_license_key', '');
    if (!empty($license_key)) {
        $queryArgs['license_key'] = $license_key;
    }
    $queryArgs['plugin_slug'] = 'complete-mortgage-theme'; // Ensure it's correct
    $queryArgs['domain'] = home_url();
    return $queryArgs;
});

// :arrows_counterclockwise: Clear update transients & force an update check (Remove this after verifying)
delete_site_transient('update_themes');
$themeUpdateChecker->checkForUpdates();

//-----------

function include_all_lib_files($dir)
{
    $iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir));
    foreach ($iterator as $file) {
        if ($file->isFile() && pathinfo($file, PATHINFO_EXTENSION) === 'php') {
            require_once $file->getPathname();
        }
    }
}

// Define the path to the `lib` directory
$lib_dir = get_template_directory() . '/lib';

// Ensure directory exists before including files
if (is_dir($lib_dir)) {
    include_all_lib_files($lib_dir);
}
add_theme_support('post-thumbnails');


// Prevent caching issues
add_filter('site_transient_update_themes', function ($transient) use ($themeUpdateChecker) {
    if (!empty($transient) && is_object($transient)) {
        delete_site_transient('update_themes');
    }
    return $transient;
});

function complete_mortgage_enqueue_assets()
{
    // Enqueue Styles
    wp_enqueue_style(
        'complete-mortgage-style',
        get_stylesheet_directory_uri() . "/style.css",
        [],
        COMPLETE_THEME_VERSION,
        'all'
    );

    // Enqueue Scripts
    wp_enqueue_script(
        'complete-mortgage-core',
        get_template_directory_uri() . '/js/core.js',
        ['jquery'],
        COMPLETE_THEME_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'complete_mortgage_enqueue_assets');
