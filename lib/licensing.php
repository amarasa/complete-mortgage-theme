<?php

/**
 * Register the theme license setting.
 */
function complete_mortgage_theme_register_settings()
{
    // Do not specify a sanitize callback here so that our custom filter is used.
    register_setting('complete_mortgage_theme_license', 'complete_mortgage_theme_license_key');
}
add_action('admin_init', 'complete_mortgage_theme_register_settings');

/**
 * Sanitize and validate the license key before saving.
 *
 * @param string $license_key The new license key.
 * @param string $option      The option name.
 * @return string             The valid license key or the previously saved value.
 */
function complete_mortgage_theme_sanitize_license($license_key, $option)
{
    // Sanitize the incoming value.
    $license_key = sanitize_text_field($license_key);
    // Get the current (old) value.
    $old_value = get_option($option, '');

    // Allow removal: if empty, return empty.
    if (empty($license_key)) {
        return '';
    }

    // Build the API URL with the required query parameters.
    $api_url = 'http://206.189.194.86/api/license/verify';
    $query_args = array(
        'license_key' => $license_key,
        'theme_slug'  => 'complete-mortgage-theme',
        'domain'      => home_url(),
    );
    $url = add_query_arg($query_args, $api_url);

    // Call the API.
    $response = wp_remote_get($url, array('timeout' => 15));

    // If the request fails, do not update.
    if (is_wp_error($response)) {
        add_settings_error(
            $option,
            'license_error',
            __('Unable to verify license key. Please try again later.', 'complete-mortgage-theme'),
            'error'
        );
        return $old_value;
    }

    $response_code = wp_remote_retrieve_response_code($response);

    if ($response_code == 200) {
        // Valid license key.
        return $license_key;
    } elseif ($response_code == 400) {
        add_settings_error(
            $option,
            'license_invalid',
            __('License key is invalid. Please enter a valid license key.', 'complete-mortgage-theme'),
            'error'
        );
        return $old_value;
    } elseif ($response_code == 403) {
        add_settings_error(
            $option,
            'license_inactive',
            __('License key is inactive or the activation limit has been reached.', 'complete-mortgage-theme'),
            'error'
        );
        return $old_value;
    } else {
        add_settings_error(
            $option,
            'license_unexpected',
            __('Unexpected response from license server. Please try again later.', 'complete-mortgage-theme'),
            'error'
        );
        return $old_value;
    }
}
add_filter('sanitize_option_complete_mortgage_theme_license_key', 'complete_mortgage_theme_sanitize_license', 10, 2);

/**
 * Add a Theme License page under Appearance.
 */
function complete_mortgage_theme_license_menu()
{
    add_theme_page(
        __('Theme License', 'complete-mortgage-theme'),
        __('Theme License', 'complete-mortgage-theme'),
        'manage_options',
        'complete-mortgage-theme-license',
        'complete_mortgage_theme_license_page'
    );
}
add_action('admin_menu', 'complete_mortgage_theme_license_menu');

/**
 * Render the Theme License settings page.
 */
function complete_mortgage_theme_license_page()
{
?>
    <div class="wrap">
        <h1><?php esc_html_e('Theme License', 'complete-mortgage-theme'); ?></h1>
        <?php settings_errors('complete_mortgage_theme_license_key'); ?>
        <form method="post" action="options.php">
            <?php
            settings_fields('complete_mortgage_theme_license');
            $license_key = get_option('complete_mortgage_theme_license_key', '');
            ?>
            <table class="form-table">
                <tr valign="top">
                    <th scope="row">
                        <label for="complete_mortgage_theme_license_key"><?php esc_html_e('License Key', 'complete-mortgage-theme'); ?></label>
                    </th>
                    <td>
                        <input
                            type="text"
                            id="complete_mortgage_theme_license_key"
                            name="complete_mortgage_theme_license_key"
                            value="<?php echo esc_attr($license_key); ?>"
                            class="regular-text" />
                        <p class="description"><?php esc_html_e('Enter your theme license key to enable automatic updates.', 'complete-mortgage-theme'); ?></p>
                    </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>
    </div>
<?php
}
