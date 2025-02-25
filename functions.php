<?php
require get_template_directory() . '/puc/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// Build the update checker with your licensing system API endpoint.
$themeUpdateChecker = PucFactory::buildUpdateChecker(
    'http://206.189.194.86/api/license/verify', // Licensing API endpoint
    get_template_directory(), // Path to the theme
    'complete-mortgage-theme' // Theme directory name
);

// Add the query args to include the license key and other parameters.
$themeUpdateChecker->addQueryArgFilter(function (array $queryArgs) {
    // Retrieve the license key (adjust the option name if needed).
    //$license_key = get_option('complete_mortgage_theme_license_key', '');
    $license_key = '1298e3da-a40e-498d-bc7e-feb6c867ae65';
    $queryArgs['license_key'] = $license_key;
    $queryArgs['theme_slug']   = 'complete-mortgage-theme';
    $queryArgs['domain']       = home_url();
    return $queryArgs;
});

// Enable branch tracking (optional, defaults to `main` if omitted)
//$themeUpdateChecker->setBranch('main');

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
        '1.0.5',
        'all'
    );

    // Enqueue Scripts
    wp_enqueue_script(
        'complete-mortgage-core',
        get_template_directory_uri() . '/js/core.js',
        ['jquery'],
        '1.0.5',
        true
    );
}
add_action('wp_enqueue_scripts', 'complete_mortgage_enqueue_assets');

// Enable Theme Features
function complete_mortgage_theme_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('menus');
    register_nav_menus([
        'primary' => __('Primary Menu', 'complete-mortgage-theme')
    ]);
}
add_action('after_setup_theme', 'complete_mortgage_theme_setup');


