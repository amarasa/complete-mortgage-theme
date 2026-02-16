<?php
define("COMPLETE_THEME_VERSION", "3.0");

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

// Include lib and cpt directories
foreach (['/lib', '/cpt'] as $inc_dir) {
    $dir_path = get_template_directory() . $inc_dir;
    if (is_dir($dir_path)) {
        include_all_lib_files($dir_path);
    }
}
add_theme_support('post-thumbnails');
add_theme_support('title-tag');

function complete_mortgage_enqueue_assets()
{
    // Enqueue Brand Styles (from uploads directory)
    $upload_dir = wp_upload_dir();
    wp_enqueue_style(
        'complete-mortgage-brand',
        $upload_dir['baseurl'] . '/brand.css',
        [],
        COMPLETE_THEME_VERSION,
        'all'
    );

    // Enqueue Styles
    wp_enqueue_style(
        'complete-mortgage-style',
        get_stylesheet_directory_uri() . "/dist/style.css",
        ['complete-mortgage-brand'],
        COMPLETE_THEME_VERSION,
        'all'
    );

    // Enqueue Scripts
    wp_enqueue_script(
        'complete-mortgage-core',
        get_template_directory_uri() . '/dist/js/core.js',
        ['jquery'],
        COMPLETE_THEME_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'complete_mortgage_enqueue_assets');
