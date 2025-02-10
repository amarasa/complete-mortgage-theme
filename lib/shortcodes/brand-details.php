<?php

/**
 * WordPress shortcode function for displaying brand details or contact information.
 *
 * This function is used as a shortcode named "brand-details" and accepts an optional "type" attribute
 * to determine which brand information or contact detail to display. It retrieves information from
 * theme settings stored in the WordPress options and formats it for display.
 *
 * @param array $atts (Optional) Shortcode attributes, including the "type" attribute to specify the content type.
 *
 * @return string The formatted brand detail or contact information as a string.
 */
function get_brand_details($atts = [])
{
    // Parse and set default attributes.
    $a = shortcode_atts(
        [
            "type" => "brand",
        ],
        $atts
    );

    // Start output buffering to capture echoed content.
    ob_start();

    // Check the "type" attribute to determine which information to display.
    if ($a["type"] == "brand") {
        // Retrieve and display the brand name.
        $brand_name = get_field("brand_name", "option");
        echo $brand_name;
    } elseif ($a["type"] == "phone") {
        // Retrieve and display the phone number as a clickable link.
        $phone_number = get_field("phone_number", "option");
        echo "<a href='tel:{$phone_number}'>{$phone_number}</a>";
    } elseif ($a["type"] == "email") {
        // Retrieve and display the email address as a clickable link.
        $email_address = get_field("email_address", "option");
        echo "<a href='mailto:{$email_address}'>{$email_address}</a>";
    } elseif ($a["type"] == "address") {
        // Retrieve and display multiple address-related fields.
        $address_line_1 = get_field("address_line_1", "option");
        $address_line_2 = get_field("address_line_2", "option");
        $city = get_field("city", "option");
        $state = get_field("state", "option");
        $zip_code = get_field("zip_code", "option");

        // Format and display the address details.
        echo "<span class='brand-detail-address-line-1'>{$address_line_1}</span>
        <span class='brand-detail-address-line-2'>{$address_line_2}</span>
        <span class='brand-detail-city'>{$city}</span>
        <span class='brand-detail-state'>{$state}</span>
        <span class='brand-detail-zip-code'>{$zip_code}</span>";
    }

    // Capture the echoed content, end output buffering, and return the formatted content.
    $ob_str = ob_get_contents();
    ob_end_clean();
    return $ob_str;
}

// Register the "brand-details" shortcode with the get_brand_details function.
add_shortcode("brand-details", "get_brand_details");
