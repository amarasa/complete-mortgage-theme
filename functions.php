<?php
require get_template_directory() . '/puc/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$themeUpdateChecker = PucFactory::buildUpdateChecker(
    'https://github.com/amarasa/complete-mortgage-theme', // GitHub repository URL
    get_template_directory(), // Path to the theme
    'complete-mortgage-theme' // Theme directory name
);

// Enable branch tracking (optional, defaults to `main` if omitted)
$themeUpdateChecker->setBranch('main');

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
        '1.0.1',
        'all'
    );

    // Enqueue Scripts
    wp_enqueue_script(
        'complete-mortgage-core',
        get_template_directory_uri() . '/js/core.js',
        ['jquery'],
        '1.0',
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
