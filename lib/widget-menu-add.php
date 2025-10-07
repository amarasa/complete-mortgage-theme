<?php

/**
 * Add Widgets link to Appearance menu
 * 
 * This file adds a "Widgets" menu item under Appearance in the WordPress admin
 * since it might be missing from the default menu structure.
 */

/**
 * Add Widgets page under Appearance menu
 */
function complete_mortgage_add_widgets_menu()
{
    // Check if the widgets.php page is accessible to the current user
    if (current_user_can('edit_theme_options')) {
        add_theme_page(
            __('Widgets', 'complete-mortgage-theme'),          // Page title
            __('Widgets', 'complete-mortgage-theme'),          // Menu title  
            'edit_theme_options',                              // Capability required
            'widgets.php'                                      // Menu slug (redirect to widgets.php)
        );
    }
}
add_action('admin_menu', 'complete_mortgage_add_widgets_menu');

/**
 * Alternative method: Add submenu page that redirects to widgets.php
 * This ensures the Widgets link appears even if WordPress doesn't show it automatically
 */
function complete_mortgage_ensure_widgets_menu()
{
    global $submenu;

    // Check if widgets.php is already in the Appearance menu
    $widgets_exists = false;
    if (isset($submenu['themes.php'])) {
        foreach ($submenu['themes.php'] as $item) {
            if (isset($item[2]) && $item[2] === 'widgets.php') {
                $widgets_exists = true;
                break;
            }
        }
    }

    // If Widgets link doesn't exist, add it
    if (!$widgets_exists && current_user_can('edit_theme_options')) {
        add_submenu_page(
            'themes.php',                                      // Parent slug (Appearance)
            __('Widgets', 'complete-mortgage-theme'),          // Page title
            __('Widgets', 'complete-mortgage-theme'),          // Menu title
            'edit_theme_options',                              // Capability
            'widgets.php'                                      // Menu slug
        );
    }
}
add_action('admin_menu', 'complete_mortgage_ensure_widgets_menu', 999); // Late priority to check after WP adds default menus