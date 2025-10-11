<?php require('header/wp-head.php'); ?>

<div class="relative">
    <header class="px-8 py-6 border-b-[1px]">
        <div class="header-logo transition-all duration-300 ease-in-out hover:opacity-70 mx-auto text-center max-w-[400px]">
            <?php
            if (function_exists('the_custom_logo')) {
                the_custom_logo();
            } else {
                echo '<a class="mx-auto" href="' . esc_url(home_url('/')) . '">' . esc_html(get_bloginfo('name')) . '</a>';
            }
            ?>
        </div>
    </header>

    <?php if (function_exists('get_field') && get_field('top_of_page_gradient')) : ?>
        <div class="absolute left-0 top-full w-full h-[15vh] bg-gradient-to-b from-topGradient to-bottomGradient z-[-1]"></div>
    <?php endif; ?>
</div>