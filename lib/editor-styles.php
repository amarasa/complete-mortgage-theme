<?php
function complete_theme_add_editor_styles()
{
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');
}
add_action('after_setup_theme', 'complete_theme_add_editor_styles');

// Enqueue front-end styles in the block editor for WYSIWYG
function complete_theme_enqueue_block_editor_assets()
{
    // Brand styles
    $upload_dir = wp_upload_dir();
    wp_enqueue_style(
        'complete-mortgage-brand-editor',
        $upload_dir['baseurl'] . '/brand.css',
        [],
        COMPLETE_THEME_VERSION
    );

    // Compiled front-end styles
    wp_enqueue_style(
        'complete-mortgage-frontend-editor',
        get_stylesheet_directory_uri() . '/dist/style.css',
        ['complete-mortgage-brand-editor'],
        COMPLETE_THEME_VERSION
    );
}
add_action('enqueue_block_editor_assets', 'complete_theme_enqueue_block_editor_assets');
