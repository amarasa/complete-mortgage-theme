<?php require('header/wp-head.php'); ?>
<?php
$primary_menu = wp_get_nav_menu_object('Primary Menu');
$primary_menu_items = $primary_menu ? wp_get_nav_menu_items($primary_menu->term_id) : [];
$header_button_item = null;

if (!empty($primary_menu_items)) {
    foreach ($primary_menu_items as $menu_item) {
        if (in_array('header-button', $menu_item->classes, true)) {
            $header_button_item = $menu_item;
            break;
        }
    }
}
?>

<div class="relative">
    <header class="px-8 py-6 border-b-[1px]">
        <div class="relative mx-auto flex max-w-[1375px] items-center justify-between sm:justify-center">
            <div class="header-logo flex max-w-[400px] justify-start text-left transition-all duration-300 ease-in-out hover:opacity-70 sm:justify-center sm:text-center">
                <?php
                if (function_exists('the_custom_logo')) {
                    the_custom_logo();
                } else {
                    echo '<a class="block text-left sm:mx-auto sm:text-center" href="' . esc_url(home_url('/')) . '">' . esc_html(get_bloginfo('name')) . '</a>';
                }
                ?>
            </div>
            <?php if ($header_button_item) : ?>
                <div class="ml-4 sm:absolute sm:right-0 sm:ml-0">
                    <a href="<?php echo esc_url($header_button_item->url); ?>"
                        class="bg-primary hover:bg-secondary inline-block transition-all duration-300 ease-in-out rounded-md bg-secondary px-7 py-4 text-center font-bold text-white no-underline hover:bg-primary hover:text-white"
                        <?php echo cms_link_attributes($header_button_item->target ?: '_self'); ?>>
                        <?php echo esc_html($header_button_item->title); ?>
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </header>
</div>
