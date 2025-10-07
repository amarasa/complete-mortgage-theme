<footer>
    <?php
    // Define the widget areas
    $footer_columns = ['footer-col-1', 'footer-col-2', 'footer-col-3', 'footer-col-4', 'footer-col-5']; ?>
    <div class="top-footer bg-topFooter pt-14 pb-12">
        <div class="container px-8">
            <div class="grid grid-cols-10 sm:gap-x-8">
                <?php foreach ($footer_columns as $footer_col) {
                    // Loop through and check if the widgets are active 
                    if (is_active_sidebar($footer_col)) {
                        echo '<div class="col-span-10 sm:col-span-5 lg:col-span-2">';
                        echo '<div class="footer-widget ' . esc_attr($footer_col) . '">';
                        dynamic_sidebar($footer_col);
                        echo '</div>';
                        echo '</div>';
                    }
                }
                ?>
            </div>
        </div>
    </div>
    <div class="bottom-footer bg-bottomFooter pt-7 pb-10">
        <div class="container px-8">
            <div class="grid grid-cols-12 md:gap-x-8">
                <div class="col-span-12 md:col-span-6 lg:col-span-4">
                    <?php if (is_active_sidebar('bottom-footer-left-column')) { ?>
                        <?php dynamic_sidebar('bottom-footer-left-column'); ?>
                    <?php } ?>
                </div>
                <div class="col-span-12 md:col-span-6 lg:col-span-5">
                    <?php if (is_active_sidebar('bottom-footer-middle-column')) { ?>
                        <?php dynamic_sidebar('bottom-footer-middle-column'); ?>
                    <?php } ?>
                </div>
                <div class="col-span-12 lg:col-span-3">
                    <?php if (is_active_sidebar('bottom-footer-right-column')) { ?>
                        <div class="bottom-footer-column-logos pt-4 text-center items-center flex gap-x-8 lg:justify-end flex-wrap">
                            <?php dynamic_sidebar('bottom-footer-right-column'); ?>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
    <div class="legal-footer bg-bottomFooter text-xs text-[#c7c7c7]">
        <div class="container px-8">
            <div class="grid grid-cols-12 xl:gap-x-8">
                <div class="col-span-12 xl:col-span-4">
                    <?php if (is_active_sidebar('footer-legal-copyright')) { ?>
                        <?php dynamic_sidebar('footer-legal-copyright'); ?>
                    <?php } ?>
                </div>
                <div class="col-span-12 xl:col-span-5">
                    <?php if (is_active_sidebar('footer-legal-menu')) { ?>
                        <?php dynamic_sidebar('footer-legal-menu'); ?>
                    <?php } ?>
                </div>
                <div class="col-span-12 xl:col-span-3 mb-4">
                    <?php if (is_active_sidebar('footer-created-by')) { ?>
                        <?php dynamic_sidebar('footer-created-by'); ?>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>

</html>