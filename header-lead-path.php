<?php require('header/wp-head.php'); ?>

<div class="relative">
    <header class="px-8 py-6 border-b-[1px]">
        <div class="header-logo mx-auto flex max-w-[400px] justify-center text-center transition-all duration-300 ease-in-out hover:opacity-70">
            <?php
            if (function_exists('the_custom_logo')) {
                the_custom_logo();
            } else {
                echo '<a class="mx-auto block text-center" href="' . esc_url(home_url('/')) . '">' . esc_html(get_bloginfo('name')) . '</a>';
            }
            ?>
        </div>
    </header>
</div>
