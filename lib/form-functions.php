<?php

/**
 * This function is a WordPress filter used for the Purchase Form.
 * It populates the city and state fields in the form based on the user's address input.
 *
 * @param array $form The form being processed.
 * @return array The modified form.
 */
add_filter('gform_pre_submission_filter_10', 'populate_city_state_purchase_form');

function populate_city_state_purchase_form($form)
{
    // Get the Google Maps Geocoding API key from the WordPress options.
    $apiKey = get_field('geocoding_api_key', 'option');

    // Make a request to Google Maps Geocoding API to fetch address details.
    $response = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($_POST["input_28"]) . '&sensor=true&key=' . $apiKey);
    $response = json_decode($response);

    // Initialize variables.
    $city = $longState = $shortState = '';

    // Check if the response has results and address components.
    if (!empty($response->results) && !empty($response->results[0]->address_components)) {
        $addressComponents = $response->results[0]->address_components;

        // Extract the city, long state, and short state from the API response.
        // Assuming the city is always in the second address component (this might need adjustment).
        if (isset($addressComponents[1])) {
            $city = $addressComponents[1]->long_name;
        }

        // Loop through address components to find the state.
        foreach ($addressComponents as $component) {
            if (in_array("administrative_area_level_1", $component->types)) {
                $longState = $component->long_name;
                $shortState = $component->short_name;
                break; // Exit the loop once the state is found.
            }
        }
    }

    // Set the city and state values in the form's input fields.
    $_POST["input_42"] = $city;
    $_POST["input_43"] = $shortState;
    $_POST["input_44"] = $longState;


    if (isset($_COOKIE['kal_loan_officer'])) {
        error_log('Cookie is set: ' . $_COOKIE['kal_loan_officer']); // Debugging line

        $loan_officer_data = json_decode(stripslashes($_COOKIE['kal_loan_officer']), true);

        // Debugging lines
        error_log('Loan Officer Name: ' . $loan_officer_data['name']);
        error_log('Loan Officer NMLS: ' . $loan_officer_data['nmls_number']);

        // Sanitize and assign the data to variables
        $LO_Name = esc_html($loan_officer_data['name']);
        $nmls_number = esc_html($loan_officer_data['nmls_number']);

        $_POST["input_70"] = $LO_Name;
        $_POST["input_71"] = $nmls_number;
    }

    // Return the modified form.
    return $form;
}



/**
 * This function is a WordPress filter used for the Refinance Form.
 * It populates the city and state fields in the form based on the user's address input.
 *
 * @param array $form The form being processed.
 * @return array The modified form.
 */
add_filter('gform_pre_submission_filter_11', 'populate_city_state_refinance_form');

function populate_city_state_refinance_form($form)
{
    // Get the Google Maps Geocoding API key from the WordPress options.
    $apiKey = get_field('geocoding_api_key', 'option');

    // Make a request to Google Maps Geocoding API to fetch address details.
    $response = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($_POST["input_28"]) . '&sensor=true&key=' . $apiKey);
    $response = json_decode($response);

    // Initialize variables.
    $city = $longState = $shortState = '';

    // Check if the response has results and address components.
    if (!empty($response->results) && !empty($response->results[0]->address_components)) {
        $addressComponents = $response->results[0]->address_components;

        // Extract the city, long state, and short state from the API response.
        // Assuming the city is always in the second address component (this might need adjustment).
        if (isset($addressComponents[1])) {
            $city = $addressComponents[1]->long_name;
        }

        // Loop through address components to find the state.
        foreach ($addressComponents as $component) {
            if (in_array("administrative_area_level_1", $component->types)) {
                $longState = $component->long_name;
                $shortState = $component->short_name;
                break; // Exit the loop once the state is found.
            }
        }
    }

    // Set the city and state values in the form's input fields.
    $_POST["input_42"] = $city;
    $_POST["input_43"] = $shortState;
    $_POST["input_44"] = $longState;


    if (isset($_COOKIE['kal_loan_officer'])) {
        $loan_officer_data = json_decode(stripslashes($_COOKIE['kal_loan_officer']), true);

        // Sanitize and assign the data to variables
        $LO_Name = esc_html($loan_officer_data['name']);
        $nmls_number = esc_html($loan_officer_data['nmls_number']);

        $_POST["input_79"] = $LO_Name;
        $_POST["input_80"] = $nmls_number;
    }


    // Return the modified form.
    return $form;
}


/**
 * This function is a WordPress filter used for the DSCR Form.
 * It populates the city and state fields in the form based on the user's address input.
 *
 * @param array $form The form being processed.
 * @return array The modified form.
 */
add_filter('gform_pre_submission_filter_13', 'populate_city_state_dscr_form');

function populate_city_state_dscr_form($form)
{
    // Get the Google Maps Geocoding API key from the WordPress options.
    $apiKey = get_field('geocoding_api_key', 'option');

    // Make a request to Google Maps Geocoding API to fetch address details.
    $response = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address=' . urlencode($_POST["input_71"]) . '&sensor=true&key=' . $apiKey);
    $response = json_decode($response);

    // Initialize variables.
    $city = $longState = $shortState = '';

    // Check if the response has results and address components.
    if (!empty($response->results) && !empty($response->results[0]->address_components)) {
        $addressComponents = $response->results[0]->address_components;

        // Extract the city, long state, and short state from the API response.
        // Assuming the city is always in the second address component (this might need adjustment).
        if (isset($addressComponents[1])) {
            $city = $addressComponents[1]->long_name;
        }

        // Loop through address components to find the state.
        foreach ($addressComponents as $component) {
            if (in_array("administrative_area_level_1", $component->types)) {
                $longState = $component->long_name;
                $shortState = $component->short_name;
                break; // Exit the loop once the state is found.
            }
        }
    }

    // Set the city and state values in the form's input fields.
    $_POST["input_67"] = $city;
    $_POST["input_68"] = $shortState;
    $_POST["input_69"] = $longState;


    if (isset($_COOKIE['kal_loan_officer'])) {
        error_log('Cookie is set: ' . $_COOKIE['kal_loan_officer']); // Debugging line

        $loan_officer_data = json_decode(stripslashes($_COOKIE['kal_loan_officer']), true);

        // Debugging lines
        error_log('Loan Officer Name: ' . $loan_officer_data['name']);
        error_log('Loan Officer NMLS: ' . $loan_officer_data['nmls_number']);

        // Sanitize and assign the data to variables
        $LO_Name = esc_html($loan_officer_data['name']);
        $nmls_number = esc_html($loan_officer_data['nmls_number']);

        $_POST["input_177"] = $LO_Name;
        $_POST["input_178"] = $nmls_number;
    }

    // Return the modified form.
    return $form;
}



/**
 * Populates specific fields in a Gravity Form with data from a cookie.
 *
 * This function checks for the presence of a 'kal_loan_officer' cookie.
 * If the cookie exists, it decodes its JSON content and uses it to populate
 * specific fields in the form. It expects the cookie to contain 'name' and
 * 'nmls_number' values.
 *
 * @param array $form The current form to be filtered.
 * @return array The modified form with populated values if the cookie is set.
 */
function populate_hidden_field_from_cookie($form)
{
    if (isset($_COOKIE['kal_loan_officer'])) {
        $loan_officer_data = json_decode(stripslashes($_COOKIE['kal_loan_officer']), true);

        // Sanitize and assign the data to variables
        $LO_Name = esc_html($loan_officer_data['name']);
        $nmls_number = esc_html($loan_officer_data['nmls_number']);

        $_POST["input_177"] = $LO_Name;
        $_POST["input_178"] = $nmls_number;
    }

    return $form;
}
