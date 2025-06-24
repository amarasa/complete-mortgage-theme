<?php
// Enable Theme Features
function custom_allowed_block_types($allowed_block_types, $editor_context)
{
    // Define allowed core blocks
    $core_blocks = array(
        'core/paragraph',
        'core/heading',
        'core/spacer',
        'core/code',
        'core/shortcode',
        'core/separator',
        'core/pullquote',
        'core/buttons',
        'core/columns',
        'core/list',
        'core/table',
        'core/html',
        'gravityforms/form'
    );

    // Get all registered block types
    $acf_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

    // Filter only blocks that start with "acf/cms-"
    $acf_cms_blocks = array_filter(array_keys($acf_blocks), function ($block_name) {
        return strpos($block_name, 'acf/cms-') === 0;
    });

    // Merge core and ACF blocks
    return array_merge($core_blocks, $acf_cms_blocks);
}

add_filter('allowed_block_types_all', 'custom_allowed_block_types', 10, 2);
