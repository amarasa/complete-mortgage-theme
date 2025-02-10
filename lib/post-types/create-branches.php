<?php

/**
 * Create a custom post type for Branches.
 *
 * This function registers a custom post type called "branch" for managing branch information.
 * It defines various options for the custom post type, including labels, visibility, supports, and more.
 * The custom post type will be accessible in the WordPress admin panel, and it can have its own
 * set of attributes and functionality.
 */
function create_branches_posttype()
{
    register_post_type(
        "branch",
        // Custom Post Type (CPT) Options
        [
            "labels" => [
                "name" => __("Branches"),
                "singular_name" => __("Branch"),
            ],
            "public" => true,           // Makes the custom post type publicly accessible.
            "has_archive" => false,     // Disables post archives for this post type.
            "rewrite" => ["slug" => "branch"], // Sets the URL slug for the branch post type.
            "show_in_rest" => true,     // Enables access to the REST API for this post type.
            "supports" => [             // Defines supported features for this post type.
                "title",
                "editor",
                "excerpt",
                "author",
                "thumbnail",
                "comments",
                "revisions",
            ],
            "menu_icon" => "dashicons-building", // Sets the menu icon in the WordPress admin panel.
        ]
    );
}

// Hook the create_branches_posttype function to the "init" action.
add_action("init", "create_branches_posttype");
