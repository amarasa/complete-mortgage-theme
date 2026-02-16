<?php
// Register the Demo Blocks custom post type.
if (!function_exists('cms_register_demo_blocks_cpt')) {
    function cms_register_demo_blocks_cpt()
    {
        register_post_type('demo_blocks', array(
            'labels' => array(
                'name'          => 'CMS Demo Blocks',
                'singular_name' => 'CMS Demo Block',
                'menu_name'     => 'CMS Demo Blocks',
            ),
            'public'            => true,
            'show_in_rest'      => true, // Enables Gutenberg.
            'supports'          => array('title', 'editor', 'thumbnail', 'revisions'),
            'has_archive'       => false,
            'exclude_from_search' => true,
            'menu_icon' => 'dashicons-schedule',

        ));
    }

    add_action('init', 'cms_register_demo_blocks_cpt');
}

// Add a meta robots tag for noindex on Demo Blocks pages.
if (!function_exists('cms_noindex_demo_blocks')) {
    function cms_noindex_demo_blocks()
    {
        if (is_singular('demo_blocks') || is_post_type_archive('demo_blocks')) {
            echo '<meta name="robots" content="noindex,follow" />' . "\n";
        }
    }

    add_action('wp_head', 'cms_noindex_demo_blocks');
}
