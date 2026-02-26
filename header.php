<?php require('header/wp-head.php'); ?>

<?php $header_alert_bar = get_field('header_alert_bar', 'option'); ?>
<?php if ($header_alert_bar) { ?>
    <section class="header-alert-bar bg-secondary px-8 py-2 text-white text-center">
        <?php echo wp_kses_post(get_field('alert_bar_content', 'option')); ?>
    </section>
<?php } ?>
<?php
$menu = wp_get_nav_menu_object('Top Menu');
$menu_items = wp_get_nav_menu_items($menu->term_id);
?>
<div class="relative">
    <header class="px-8 py-6">
        <div class="w-full max-w-[1375px] mx-auto">
            <div class="grid grid-cols-12 lg:gap-x-8 items-center">
                <div class="col-span-6 lg:col-span-3">
                    <div class="header-logo transition-all duration-300 ease-in-out hover:opacity-70">
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
                    <?php if (!empty($menu_items)) { ?>
                        <div class="top-header-menu py-4 text-right hidden lg:block">
                            <nav aria-label="Top menu">
                                <?php wp_nav_menu(array('menu' => 'Top Menu')); ?>
                            </nav>
                        </div>
                    <?php } ?>

                    <div class="flex items-center gap-x-4 justify-end">
                        <div class="header-desktop-menu">
                            <nav aria-label="Primary navigation">
                                <?php wp_nav_menu(array('menu' => 'Primary Menu')); ?>
                            </nav>
                        </div>
                        <button type="button" class="mobile-menu-toggle lg:hidden" aria-label="Toggle menu">
                            <span class="hamburger-box">
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                                <span class="hamburger-line"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <?php if (function_exists('get_field') && get_field('top_of_page_gradient')) : ?>
        <div class="absolute left-0 top-full w-full h-[15vh] bg-gradient-to-b from-topGradient to-bottomGradient z-[-1]"></div>
    <?php endif; ?>
</div>

<div id="mobile-menu">
    <?php if (!empty($menu_items)) { ?>
        <div class="mobile-top-menu">
            <nav aria-label="Top menu mobile">
                <?php wp_nav_menu(array('menu' => 'Top Menu')); ?>
            </nav>
        </div>
    <?php } ?>
    <nav aria-label="Mobile navigation">
        <?php
        wp_nav_menu(array(
            'menu' => 'Primary Menu',
        ));
        ?>
    </nav>
</div>