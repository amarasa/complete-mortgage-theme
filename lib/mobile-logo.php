<?php
function complete_mortgage_customize_register($wp_customize)
{
    // Mobile Logo setting
    $wp_customize->add_setting('mobile_logo', array(
        'default'           => '',
        'sanitize_callback' => 'absint', // stores attachment ID
    ));

    // Mobile Logo control
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'mobile_logo', array(
        'label'       => __('Mobile Logo', 'complete-mortgage'),
        'section'     => 'title_tagline',
        'mime_type'   => 'image',
        'description' => __('Upload a smaller or simplified logo for mobile devices.', 'complete-mortgage'),
    )));
}
add_action('customize_register', 'complete_mortgage_customize_register');
