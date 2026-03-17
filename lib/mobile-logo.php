<?php
function complete_mortgage_customize_register($wp_customize)
{
    // Logo Width setting
    $wp_customize->add_setting('logo_width', array(
        'default'           => 200,
        'sanitize_callback' => 'absint',
        'transport'         => 'postMessage',
    ));

    // Logo Width slider control
    $wp_customize->add_control('logo_width', array(
        'label'       => __('Logo Width (px)', 'complete-mortgage'),
        'section'     => 'title_tagline',
        'type'        => 'range',
        'input_attrs' => array(
            'min'  => 100,
            'max'  => 300,
            'step' => 5,
        ),
        'description' => __('Adjust the desktop logo width between 100px and 300px.', 'complete-mortgage'),
    ));
}
add_action('customize_register', 'complete_mortgage_customize_register');

// Output logo width as inline CSS
function complete_mortgage_logo_width_css()
{
    $width = get_theme_mod('logo_width', 200);
    echo '<style>.header-logo img{max-width:' . absint($width) . 'px;height:auto}</style>';
}
add_action('wp_head', 'complete_mortgage_logo_width_css');

// Live preview JS for the Customizer
function complete_mortgage_customize_preview_js()
{
    wp_add_inline_script('customize-preview', '
        wp.customize("logo_width", function(value) {
            value.bind(function(newval) {
                document.querySelectorAll(".header-logo img").forEach(function(img) {
                    img.style.maxWidth = newval + "px";
                });
            });
        });
    ');
}
add_action('customize_preview_init', 'complete_mortgage_customize_preview_js');
