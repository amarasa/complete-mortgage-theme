<?php
function complete_theme_add_editor_styles()
{
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');
}
add_action('after_setup_theme', 'complete_theme_add_editor_styles');

// Enqueue front-end styles inside the editor iframe for WYSIWYG block previews
function complete_theme_enqueue_block_assets()
{
    if (!is_admin()) {
        return;
    }

    // Brand styles
    $upload_dir = wp_upload_dir();
    wp_enqueue_style(
        'complete-mortgage-brand-editor',
        $upload_dir['baseurl'] . '/brand.css',
        [],
        COMPLETE_THEME_VERSION
    );

    // Intentionally do not enqueue dist/style.css in admin.
    // The frontend stylesheet can interfere with wp-admin/customizer UI.
}
add_action('enqueue_block_assets', 'complete_theme_enqueue_block_assets');
