<?php
/**
 * Organization JSON-LD schema for SEO
 * Outputs organization structured data for knowledge panel eligibility
 *
 * @package Complete_Mortgage_Theme
 */

/**
 * Output Organization schema on all pages
 * Uses ACF option fields if available
 */
add_action('wp_footer', function() {
    // Build social links array from ACF options if available
    $social_links = [];

    // Try common ACF field names for social links
    $social_fields = [
        'social_facebook',
        'facebook_url',
        'company_facebook',
        'social_twitter',
        'twitter_url',
        'company_twitter',
        'social_linkedin',
        'linkedin_url',
        'company_linkedin',
        'social_instagram',
        'instagram_url',
        'company_instagram',
        'social_youtube',
        'youtube_url',
        'company_youtube'
    ];

    foreach ($social_fields as $field) {
        $value = function_exists('get_field') ? get_field($field, 'option') : '';
        if (!empty($value)) {
            $social_links[] = $value;
        }
    }

    // Get company phone from ACF options
    $company_phone = '';
    $phone_fields = ['company_phone', 'phone_number', 'main_phone', 'contact_phone'];
    foreach ($phone_fields as $field) {
        $value = function_exists('get_field') ? get_field($field, 'option') : '';
        if (!empty($value)) {
            $company_phone = $value;
            break;
        }
    }

    // Get logo URL
    $logo_url = '';
    if (function_exists('get_site_icon_url')) {
        $logo_url = get_site_icon_url();
    }
    if (empty($logo_url)) {
        $custom_logo_id = get_theme_mod('custom_logo');
        if ($custom_logo_id) {
            $logo_url = wp_get_attachment_image_url($custom_logo_id, 'full');
        }
    }

    // Build the schema
    $schema = [
        "@context" => "https://schema.org",
        "@type" => "Organization",
        "name" => get_bloginfo('name'),
        "url" => home_url(),
        "description" => get_bloginfo('description')
    ];

    // Add logo if available
    if (!empty($logo_url)) {
        $schema['logo'] = $logo_url;
    }

    // Add social links if available
    if (!empty($social_links)) {
        $schema['sameAs'] = array_unique($social_links);
    }

    // Add contact point if phone available
    if (!empty($company_phone)) {
        $schema['contactPoint'] = [
            "@type" => "ContactPoint",
            "telephone" => $company_phone,
            "contactType" => "customer service"
        ];
    }

    // Add address if ACF fields exist
    $address_fields = [
        'streetAddress' => ['company_address', 'street_address', 'address'],
        'addressLocality' => ['company_city', 'city'],
        'addressRegion' => ['company_state', 'state'],
        'postalCode' => ['company_zip', 'zip_code', 'postal_code'],
    ];

    $address = [];
    foreach ($address_fields as $schema_field => $acf_fields) {
        foreach ($acf_fields as $field) {
            $value = function_exists('get_field') ? get_field($field, 'option') : '';
            if (!empty($value)) {
                $address[$schema_field] = $value;
                break;
            }
        }
    }

    if (!empty($address)) {
        $address['@type'] = 'PostalAddress';
        $address['addressCountry'] = 'US';
        $schema['address'] = $address;
    }

    // Clean empty values
    $schema = array_filter($schema, function($v) {
        return !empty($v);
    });

    echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES) . '</script>';
}, 100);
