<?php require('header/wp-head.php'); ?>

<?php $header_alert_bar = get_field('header_alert_bar', 'option'); ?>
<?php if ($header_alert_bar) { ?>
    <section class="header-alert-bar bg-secondary px-8 py-2 text-white text-center">
        <?php echo get_field('alert_bar_content', 'option'); ?>
    </section>
<?php } ?>
<?php
$menu = wp_get_nav_menu_object('Top Menu');
$menu_items = wp_get_nav_menu_items($menu->term_id);

if (!empty($menu_items)) { ?>
    <div class="top-header-menu bg-primary px-8 py-4 text-right hidden lg:block">
        <?php wp_nav_menu(array('menu' => 'Top Menu')); ?>
    </div>
<?php } ?>
<div class="relative">
    <header class="px-8 py-6">
        <div class="grid grid-cols-12 lg:gap-x-8 items-center">
            <div class="col-span-6 lg:col-span-3">
                <div class="header-logo">
                    <?php
                    if (function_exists('the_custom_logo')) {
                        the_custom_logo();
                    } else {
                        echo '<a href="' . esc_url(home_url('/')) . '">' . esc_html(get_bloginfo('name')) . '</a>';
                    }
                    ?>
                </div>
            </div>
            <div class="col-span-6 lg:col-span-9">
                <div class="flex items-center gap-x-4 justify-end">
                    <div class="header-desktop-menu">
                        <?php wp_nav_menu(array('menu' => 'Primary Menu')); ?>
                    </div>
                    <div class="open-menu-button lg:hidden">
                        <i class="fa-solid fa-bars text-3xl text-secondary"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <?php if (function_exists('get_field') && get_field('top_of_page_gradient')) : ?>
        <div class="absolute left-0 top-full w-full h-[15vh] bg-gradient-to-b from-topGradient to-bottomGradient z-[-1]"></div>
    <?php endif; ?>
</div>

<div id="mobile-menu" class="lg:hidden">
    <div class="close-menu-button lg:hidden text-right  mb-8">
        <i class="fa-solid fa-close text-3xl text-white"></i>
    </div>

    <?php
    wp_nav_menu(array(
        'menu'         => 'Mobile Menu',
        'container_id' => 'cssmenu',
        'walker'       => new CSS_Menu_Maker_Walker()
    ));
    ?>
</div>