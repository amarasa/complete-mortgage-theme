<footer>
    <?php
    // Define the widget areas
    $footer_columns = ['footer-col-1', 'footer-col-2', 'footer-col-3', 'footer-col-4', 'footer-col-5']; ?>
    <div class="top-footer pt-8 bg-top-footer text-white">
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
    <div class="legal-footer bg-bottom-footer text-xs text-white">
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
<button id="back-to-top" aria-label="Back to top" class="fixed bottom-6 right-6 z-50 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 hover:opacity-80 cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>
</button>
<script>
(function(){
    var btn=document.getElementById('back-to-top');
    window.addEventListener('scroll',function(){
        if(window.scrollY>200){btn.style.opacity='1';btn.style.pointerEvents='auto'}
        else{btn.style.opacity='0';btn.style.pointerEvents='none'}
    });
    btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
})();
</script>
<?php wp_footer(); ?>
<script>
    jQuery("a[href ^= 'tel']").html(function(i, html) {
        return "<span data-calltrk-noswap>" + html + "</span>";
    });
</script>
<script src="//instant.page/5.1.0" type="module" integrity="sha384-by67kQnR+pyfy8yWP4kPO12fHKRLHZPfEsiSXR8u2IKcTdxD805MGUXBzVPnkLHw"></script>
</body>

</html>