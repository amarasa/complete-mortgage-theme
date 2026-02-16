<?php

function enqueue_custom_plugin_styles()
{
    // Get the absolute path and URL to the custom plugins directory.
    $plugin_css_dir = get_template_directory() . '/dist/dist-custom-plugins/';
    $plugin_css_url = get_template_directory_uri() . '/dist/dist-custom-plugins/';

    // Loop through all .css files in the directory.
    foreach (glob($plugin_css_dir . '*.css') as $css_file) {
        // Generate a unique handle based on the filename.
        $handle = 'custom-plugin-' . basename($css_file, '.css');

        // Enqueue the stylesheet.
        wp_enqueue_style(
            $handle,
            $plugin_css_url . basename($css_file),
            array(),
            filemtime($css_file) // Use file modification time as version for cache busting.
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_plugin_styles');
