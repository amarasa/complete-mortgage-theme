<?php

/**
 * Registers sidebars for the Velocity theme.
 *
 * This function registers multiple sidebars to be used within the theme. Each sidebar is defined
 * with its unique ID, name, and widget container settings.
 */
function rivercity_register_sidebars()
{
    // Register the main sidebar.
    register_sidebar([
        "id" => "sidebar",
        "name" => "Sidebar",
        "description" => "",
        "before_widget" => '<div class="sidebar-widget">',
        "after_widget" => "</div>",
        "before_title" => '<div class="side-title">',
        "after_title" => "</div>",
        "empty_title" => "",
    ]);

    // Register footer columns 1 to 5.
    for ($i = 1; $i <= 5; $i++) {
        register_sidebar([
            "id" => "footer-col-$i",
            "name" => "Footer Column $i",
            "description" => "",
            "before_widget" => '<div class="footer-column' . ($i === 5 ? ' footer-column-5' : '') . '">',
            "after_widget" => "</div>",
            "before_title" => '<div class="footer-column-title">',
            "after_title" => "</div>",
            "empty_title" => "",
        ]);
    }

    // Register bottom footer columns for contact information, disclosures, and logos.
    $bottom_footer_columns = [
        "bottom-footer-left-column" => "Bottom Footer - Left Column (Contact Information and NMLS)",
        "bottom-footer-middle-column" => "Bottom Footer - Middle Column (Disclosures)",
        "bottom-footer-right-column" => "Bottom Footer - Right Column (Logos)",
    ];

    foreach ($bottom_footer_columns as $id => $name) {
        register_sidebar([
            "id" => $id,
            "name" => $name,
            "description" => "",
            "before_widget" => '<div class="bottom-footer-column' . ($id === "bottom-footer-right-column" ? '-logos' : '') . '">',
            "after_widget" => "</div>",
            "before_title" => '<div class="bottom-footer-column-title">',
            "after_title" => "</div>",
            "empty_title" => "",
        ]);
    }
}

// Hook the rivercity_register_sidebars function to the "widgets_init" action.
add_action("widgets_init", "rivercity_register_sidebars");
