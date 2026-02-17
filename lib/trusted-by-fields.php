<?php
// Register the "Display Logos in Color" toggle for the Trusted By block.
add_action('acf/init', function () {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group([
        'key'      => 'group_trusted_by_color_toggle',
        'title'    => 'Trusted By – Color Toggle',
        'fields'   => [
            [
                'key'           => 'field_trusted_by_display_color',
                'label'         => 'Display Logos in Color',
                'name'          => 'display_logos_in_color',
                'type'          => 'true_false',
                'instructions'  => 'Enable to show logos in full color instead of greyscale.',
                'default_value' => 0,
                'ui'            => 1,
            ],
        ],
        'location' => [
            [
                [
                    'param'    => 'block',
                    'operator' => '==',
                    'value'    => 'acf/cms-trusted-by',
                ],
            ],
        ],
        'menu_order' => 5,
        'active'     => true,
    ]);
});
