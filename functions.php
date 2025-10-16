<?php
define("COMPLETE_THEME_VERSION", "2.98");

require get_template_directory() . '/puc/plugin-update-checker.php';

use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// 🛠 Initialize PUC Update Checker
$themeUpdateChecker = PucFactory::buildUpdateChecker(
    'https://github.com/amarasa/complete-mortgage-theme', // GitHub repository
    get_template_directory(), // Theme path
    'complete-mortgage-theme' // Theme slug
);

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
