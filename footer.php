<?php
$footer_columns = ['footer-col-1', 'footer-col-2', 'footer-col-3', 'footer-col-4', 'footer-col-5'];
$top_has_widgets = false;

foreach ($footer_columns as $footer_col) {
    if (is_active_sidebar($footer_col)) {
        $top_has_widgets = true;
        break;
    }
}

$bottom_footer_sidebars = [
    'bottom-footer-left-column',
    'bottom-footer-middle-column',
    'bottom-footer-right-column',
];

$legal_footer_sidebars = [
    'footer-legal-copyright',
    'footer-legal-menu',
    'footer-created-by',
];
?>
<footer class="[&_a]:text-white [&_a]:font-bold [&_a]:no-underline [&_a]:transition-all [&_a]:duration-300 [&_a:hover]:opacity-70 [&_ul]:!list-none [&_ul]:!ml-0 [&_ul]:!pr-0 [&_ul]:!mb-0 [&_.bottom-footer-column-logo_img]:!max-w-[100px]">
    <?php if ($top_has_widgets) : ?>
        <div class="top-footer bg-topFooter bg-primary pt-8 pb-12 lg:py-16">
            <div class="container px-8">
                <div class="grid grid-cols-10 sm:gap-x-8">
                    <?php foreach ($footer_columns as $footer_col) : ?>
                        <?php if (is_active_sidebar($footer_col)) : ?>
                            <div class="col-span-10 sm:col-span-5 lg:col-span-2">
                                <div class="footer-widget <?php echo esc_attr($footer_col); ?>">
                                    <?php dynamic_sidebar($footer_col); ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    <?php endif; ?>

    <div class="bottom-footer bg-bottomFooter bg-primary py-4 text-white">
        <div class="container px-8">
            <div class="grid grid-cols-12 md:gap-x-8">
                <?php foreach ($bottom_footer_sidebars as $index => $sidebar_id) : ?>
                    <?php if (!is_active_sidebar($sidebar_id)) {
                        continue;
                    } ?>
                    <div class="col-span-12 <?php echo esc_attr($index === 0 ? 'md:col-span-6 lg:col-span-4' : ($index === 1 ? 'md:col-span-6 lg:col-span-5' : 'lg:col-span-3')); ?>">
                        <?php dynamic_sidebar($sidebar_id); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <div class="legal-footer bg-bottomFooter bg-primary text-xs text-[#c7c7c7] pt-8">
        <div class="container px-8">
            <div class="grid grid-cols-12 xl:gap-x-8">
                <?php foreach ($legal_footer_sidebars as $index => $sidebar_id) : ?>
                    <?php if (!is_active_sidebar($sidebar_id)) {
                        continue;
                    } ?>
                    <div class="col-span-12 <?php echo esc_attr($index === 0 ? 'xl:col-span-4' : ($index === 1 ? 'xl:col-span-5' : 'xl:col-span-3 mb-4 pt-2')); ?>">
                        <?php dynamic_sidebar($sidebar_id); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</footer>
<button id="back-to-top" aria-label="Back to top" class="fixed bottom-6 right-6 z-50 bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 hover:opacity-80 cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
    </svg>
</button>
<script>
    (function() {
        var btn = document.getElementById('back-to-top');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 200) {
                btn.classList.remove('opacity-0', 'pointer-events-none');
                btn.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                btn.classList.remove('opacity-100', 'pointer-events-auto');
                btn.classList.add('opacity-0', 'pointer-events-none');
            }
        });
        btn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
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
