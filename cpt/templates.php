<?php
// Hook into WordPress initialization to register the post type
if (!function_exists('cms_register_templates_cpt')) {
    function cms_register_templates_cpt()
    {
        register_post_type('cms-templates', array(
            'labels' => array(
                'name'          => 'CMS Templates',
                'singular_name' => 'CMS Template',
                'menu_name'     => 'CMS Templates',
                'add_new'       => 'Add New Template',
                'add_new_item'  => 'Add New CMS Template',
                'edit_item'     => 'Edit CMS Template',
                'new_item'      => 'New CMS Template',
                'view_item'     => 'View CMS Template',
                'search_items'  => 'Search CMS Templates',
                'not_found'     => 'No templates found',
                'not_found_in_trash' => 'No templates found in Trash'
            ),
            'public'            => true,
            'show_ui'           => true, // Ensures it's visible in the WP Admin menu
            'show_in_menu'      => true, // Ensures it appears in the WP admin menu
            'show_in_rest'      => true, // Enables Gutenberg editor
            'capability_type'   => 'post',
            'supports'          => array('title', 'editor', 'thumbnail', 'revisions'),
            'has_archive'       => false,
            'exclude_from_search' => true,
            'menu_icon'         => 'dashicons-media-text',
            'rewrite'           => array('slug' => 'templates', 'with_front' => false),
        ));
    }

    add_action('init', 'cms_register_templates_cpt');
}

// Function to flush rewrite rules on plugin/theme activation
if (!function_exists('cms_flush_rewrite_rules')) {
    function cms_flush_rewrite_rules()
    {
        cms_register_templates_cpt();
        flush_rewrite_rules();
    }

    register_activation_hook(__FILE__, 'cms_flush_rewrite_rules');

    // Flush rewrite rules when theme is switched
    add_action('after_switch_theme', 'cms_flush_rewrite_rules');
}

// Prevent "Item doesn't exist" issue by forcing permalinks flush after registering
add_action('init', function () {
    if (!get_option('cms_templates_permalinks_flushed')) {
        flush_rewrite_rules();
        update_option('cms_templates_permalinks_flushed', true);
    }
});

// Add a meta robots tag for noindex on Templates pages
if (!function_exists('cms_noindex_templates')) {
    function cms_noindex_templates()
    {
        if (is_singular('templates') || is_post_type_archive('templates')) {
            echo '<meta name="robots" content="noindex,follow" />' . "\n";
        }
    }

    add_action('wp_head', 'cms_noindex_templates');
}

// 1. Add a "Copy as Page" link to the row actions for 'cms-templates' posts.
if (!function_exists('cms_templates_add_copy_as_page_link')) {
    function cms_templates_add_copy_as_page_link($actions, $post)
    {
        // Only add for our custom post type.
        if ('cms-templates' === $post->post_type) {
            // Build a secure URL for the copy action.
            $url = wp_nonce_url(
                admin_url('admin.php?action=copy_as_page&post=' . $post->ID),
                'copy_as_page_' . $post->ID
            );
            // Append the "Copy as Page" link.
            $actions['copy_as_page'] = '<a href="' . esc_url($url) . '">Copy as Page</a>';
        }
        return $actions;
    }

    add_filter('post_row_actions', 'cms_templates_add_copy_as_page_link', 10, 2);
}


// 2. Process the copy action when the link is clicked.
if (!function_exists('cms_templates_copy_as_page')) {
    function cms_templates_copy_as_page()
    {
        // Verify the current user's capabilities.
        if (! current_user_can('edit_posts')) {
            wp_die('Insufficient permissions.');
        }

        // Retrieve and sanitize the post ID.
        $post_id = isset($_GET['post']) ? intval($_GET['post']) : 0;
        if (!$post_id || !isset($_GET['_wpnonce']) || !wp_verify_nonce($_GET['_wpnonce'], 'copy_as_page_' . $post_id)) {
            wp_die('Invalid request.');
        }

        // Get the original post data.
        $original_post = get_post($post_id);
        if (!$original_post) {
            wp_die('Post not found.');
        }

        // Prepare a new post array copying title and content.
        $new_post = array(
            'post_title'   => $original_post->post_title,
            'post_content' => $original_post->post_content,
            'post_status'  => 'draft',  // Create the new page as a draft.
            'post_type'    => 'page',   // Ensure it's a regular page.
        );

        // Insert the new page.
        $new_post_id = wp_insert_post($new_post);
        if ($new_post_id) {
            // Copy all meta data (including block attributes stored as meta)
            $meta_data = get_post_meta($post_id);
            if (!empty($meta_data)) {
                foreach ($meta_data as $meta_key => $meta_values) {
                    // Skip meta keys that you don't want to copy.
                    if (in_array($meta_key, array('_edit_lock', '_edit_last', '_wp_old_slug'))) {
                        continue;
                    }
                    foreach ($meta_values as $meta_value) {
                        update_post_meta($new_post_id, $meta_key, maybe_unserialize($meta_value));
                    }
                }
            }

            // Redirect to the edit screen for the new page.
            wp_redirect(admin_url('post.php?action=edit&post=' . $new_post_id));
            exit;
        } else {
            wp_die('Failed to create new page.');
        }
    }

    add_action('admin_action_copy_as_page', 'cms_templates_copy_as_page');
}
