<?php
if (!function_exists('create_persons_post_type')) {
    function create_persons_post_type()
    {
        register_post_type('cms_persons', array(
            'labels' => array(
                'name'          => 'Persons',
                'singular_name' => 'Person',
                'menu_name'     => 'Persons'
            ),
            'description' => 'Persons',
            'public'      => true,
            'rewrite'     => array('slug' => 'persons'),
            'menu_position' => 23,
            'has_archive'   => false,
            'supports'          => array('title', 'editor', 'thumbnail', 'revisions'),
            'menu_icon'     => 'dashicons-groups',
            'show_in_rest' => true,
        ));
    }

    add_action('init', 'create_persons_post_type', 0);
}
