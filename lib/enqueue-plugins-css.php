<?php

function enqueue_custom_plugin_styles()
{
    // Get the absolute path and URL to the custom plugins directory.
    $plugin_css_dir = get_template_directory() . '/dist/dist-custom-plugins/';
    $plugin_css_url = get_template_directory_uri() . '/dist/dist-custom-plugins/';

    // Map CSS files to the plugins that require them. Only load if the plugin is active.
    $plugin_css_map = [
        'kal_testimonials_for_loan_officers.css' => 'kal-testimonials-for-loan-officers/kal-testimonials-for-loan-officers.php',
        'kaleidico-custom-calculators.css'       => 'kaleidico-custom-calculators/kaleidico-custom-calculators.php',
        'querycraft.css'                         => 'querycraft/querycraft.php',
        'social-share.css'                       => 'social-share/social-share.php',
    ];

    foreach ($plugin_css_map as $css_filename => $plugin_path) {
        $css_file = $plugin_css_dir . $css_filename;

        if (!file_exists($css_file)) {
            continue;
        }

        // Only enqueue if the corresponding plugin is active
        if (!is_plugin_active($plugin_path)) {
            continue;
        }

        $handle = 'custom-plugin-' . basename($css_filename, '.css');

        wp_enqueue_style(
            $handle,
            $plugin_css_url . $css_filename,
            array(),
            filemtime($css_file)
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_custom_plugin_styles');
