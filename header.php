<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?></title>
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <header class="bg-gray-900 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <a href="<?php echo home_url(); ?>" class="text-2xl font-bold">
                <?php bloginfo('name'); ?>
            </a>
            <nav>
                <?php wp_nav_menu([
                    'theme_location' => 'primary',
                    'container' => '',
                    'menu_class' => 'flex space-x-4'
                ]); ?>
            </nav>
        </div>
    </header>