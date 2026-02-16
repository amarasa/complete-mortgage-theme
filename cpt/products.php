<?php
if (!function_exists('create_products_post_type')) {
    function create_products_post_type()
    {
        register_post_type('cms_products', array(
            'labels' => array(
                'name'          => 'Products',
                'singular_name' => 'Product',
                'menu_name'     => 'Products'
            ),
            'description' => 'Products',
            'public'      => true,
            'rewrite'     => array('slug' => 'products'),
            'menu_position' => 23,
            'has_archive'   => false,
            'supports'          => array('title', 'editor', 'thumbnail', 'revisions', 'excerpt'),
            'menu_icon'     => 'dashicons-cart',
            'show_in_rest' => true,
        ));
    }

    add_action('init', 'create_products_post_type', 0);
}
