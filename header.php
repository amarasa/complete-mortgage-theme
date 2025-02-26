<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="px-10 py-6">
        <div class="grid grid-cols-12 gap-x-8 items-center">
            <div class="col-span-9 md:col-span-5 lg:col-span-3">
                <?php
                $custom_logo_id = get_theme_mod('custom_logo');
                $logo = wp_get_attachment_image_src($custom_logo_id, 'full');

                if (has_custom_logo()) {
                    echo '<a href="' . get_bloginfo('url') . '"><img src="' . esc_url($logo[0]) . '" alt="' . esc_attr(get_bloginfo('name')) . '"></a>';
                } else {
                    echo '<a href="' . get_bloginfo('url') . '">' . get_bloginfo('name') . '</a>';
                }
                ?>
            </div>
            <div class="col-span-3 md:col-span-7 lg:col-span-9">
                MENU HERE
            </div>
        </div>
    </header>