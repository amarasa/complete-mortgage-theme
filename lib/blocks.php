<?php

/**
 * Block Registration & Related Functionality
 * Migrated from the complete-mortgage-blocks-and-post-types plugin.
 *
 * All functions are wrapped in function_exists() checks so the theme
 * can coexist with the plugin until it is deactivated.
 */

// Admin styles for ACF block editor UI
add_action('admin_enqueue_scripts', function ($hook) {
    wp_enqueue_style(
        'complete-mortgage-blocks-admin',
        get_template_directory_uri() . '/admin-style.css',
        [],
        COMPLETE_THEME_VERSION
    );
});

// Register block category
if (!function_exists('register_complete_marketing_category')) {
    function register_complete_marketing_category($categories)
    {
        return array_merge(
            $categories,
            [
                [
                    'slug'  => 'complete-marketing',
                    'title' => __('Complete Marketing', 'complete-mortgage-theme'),
                ]
            ]
        );
    }
    add_filter('block_categories_all', 'register_complete_marketing_category', 5);
}

// Register all blocks from blocks/ directory
if (!function_exists('complete_mortgage_get_blocks')) {
    function complete_mortgage_get_blocks()
    {
        $blocks_dir = get_template_directory() . '/blocks/';
        $blocks = array_filter(glob($blocks_dir . '*'), 'is_dir');
        $block_names = array_map('basename', $blocks);
        return $block_names;
    }

    add_action('init', function () {
        $all_blocks = complete_mortgage_get_blocks();

        foreach ($all_blocks as $block) {
            $block_path = get_template_directory() . '/blocks/' . $block . '/block.json';

            if (file_exists($block_path)) {
                register_block_type($block_path, [
                    'category' => 'complete-marketing'
                ]);
            }
        }
    }, 15);
}

// Conditionally enqueue interactive map scripts
if (!function_exists('enqueue_jvectormap_scripts')) {
    function enqueue_jvectormap_scripts()
    {
        if (!is_singular()) {
            return;
        }

        $post = get_post();
        if (!$post) {
            return;
        }

        if (!has_block('acf/cms-interactive-map', $post->post_content)) {
            return;
        }

        wp_enqueue_style(
            'jvectormap-css',
            'https://cdn.jsdelivr.net/npm/jsvectormap/dist/css/jsvectormap.min.css',
            array(),
            '2.0.5'
        );

        wp_enqueue_script(
            'jvectormap-js',
            'https://cdn.jsdelivr.net/npm/jsvectormap',
            array(),
            '2.0.5',
            true
        );

        wp_enqueue_script(
            'jvectormap-us',
            get_template_directory_uri() . '/blocks/interactive-map/us-aea-en.js',
            array('jvectormap-js'),
            '2.0.5',
            true
        );

        wp_enqueue_script(
            'cms-interactive-map',
            get_template_directory_uri() . '/blocks/interactive-map/interactive-map.js',
            array('jvectormap-us'),
            COMPLETE_THEME_VERSION,
            true
        );
    }
    add_action('wp_enqueue_scripts', 'enqueue_jvectormap_scripts');
}

// Conditionally enqueue statistics block script
if (!function_exists('cms_enqueue_block_scripts')) {
    function cms_enqueue_block_scripts()
    {
        if (!is_singular()) {
            return;
        }

        $post = get_post();
        if (!$post) {
            return;
        }

        $content = $post->post_content;

        if (has_block('acf/cms-statistics', $content)) {
            wp_enqueue_script(
                'cms-statistics',
                get_template_directory_uri() . '/blocks/statistics/statistics.js',
                array(),
                COMPLETE_THEME_VERSION,
                true
            );
        }
    }
    add_action('wp_enqueue_scripts', 'cms_enqueue_block_scripts');
}
