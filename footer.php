<?php extract(complete_theme_footer_data()); ?>
<footer class="bg-primary text-white pt-4">
    <div class="border-b border-white">
        <div class="container px-8 py-6 pb-12 lg:pb-6">
            <div class="md:flex items-center md:justify-between gap-4">
                <?php if (has_custom_logo()) : ?>
                    <div class="footer-logo brightness-0 invert lg:max-w-[250px] lg:shrink-0 mb-8 md:mb-4 transition-all duration-300 ease-in-out">
                        <?php the_custom_logo(); ?>
                    </div>
                <?php endif; ?>
                <?php if ($footer_data['address']) : ?>
                    <a class="flex items-center gap-2 text-sm no-underline text-white transition-all duration-300 hover:opacity-70 mb-2 md:mb-0"
                        href="<?php echo esc_url($footer_data['address_url']); ?>"
                        target="_blank" rel="noreferrer">
                        <?php echo esc_html($footer_data['address']); ?>
                    </a>
                <?php endif; ?>
                <?php if ($footer_data['phone']) : ?>
                    <a class="flex items-center gap-2 text-sm no-underline text-white hover:opacity-70 transition-all duration-150" href="<?php echo esc_attr($phone_href); ?>">
                        <span class="whitespace-nowrap"><?php echo esc_html($footer_data['phone']); ?></span>
                    </a>
                <?php endif; ?>

            </div>
        </div>
    </div>
    <div class="container px-8 pt-12 footer-menu-row">
        <?php if ($has_widgets) : ?>
            <?php
            $widget_count = count($footer_sidebars);
            $grid_class = 'md:grid-cols-2';
            if ($widget_count === 2) {
                $grid_class = 'md:grid-cols-2';
            } elseif ($widget_count === 3) {
                $grid_class = 'md:grid-cols-3';
            } elseif ($widget_count === 4) {
                $grid_class = 'md:grid-cols-2 lg:grid-cols-4';
            } elseif ($widget_count === 5) {
                $grid_class = 'md:grid-cols-3 lg:grid-cols-5';
            }
            ?>
            <div class="grid grid-cols-1 <?php echo esc_attr($grid_class); ?> gap-8 [&_.menu]:list-none [&_.col-title]:mb-4 [&_.col-title]:text-xs [&_.col-title]:font-bold [&_.col-title]:uppercase [&_.col-title]:tracking-widest [&_.col-title]:text-white/50">
                <?php foreach ($footer_sidebars as $sid) : ?>
                    <div class="footer-menu">
                        <?php dynamic_sidebar($sid); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>
    </div>
    <div class="container px-8 pb-6">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-6">
            <?php if ($footer_data['disclaimer']) : ?>
                <div class="text-sm m-0 leading-[1.6] lg:flex-1">
                    <?php echo wp_kses_post($footer_data['disclaimer']); ?>
                </div>
            <?php endif; ?>
            <div class="flex items-center justify-center gap-6 flex-wrap lg:justify-end lg:ml-6 pt-[30px] lg:pt-0">
                <?php if (! empty($comp_logos)) : ?>
                    <?php foreach ($comp_logos as $logo) : ?>
                        <a href="<?php echo esc_url($logo['url']); ?>" class="flex flex-col items-center gap-1 no-underline opacity-60 transition-opacity duration-200 hover:opacity-100"
                            <?php if ($logo['url'] !== '#') echo 'target="_blank" rel="noreferrer"'; ?>>
                            <img class="!max-w-[100px]" src="<?php echo esc_url($logo['src']); ?>"
                                alt="<?php echo esc_attr($logo['alt']); ?>">
                        </a>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    </div>
    <div class="border-t-[1px] py-4">
        <div class="container px-8">
            <div class="lg:flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
                <?php if (! empty($legal_links)) : ?>
                    <nav class="flex items-center gap-1 text-sm text-white/[.55] text-center md:text-left justify-center md:justify-left mb-4 lg:mb-0">
                        <?php foreach ($legal_links as $i => $link) : ?>
                            <?php if ($i > 0) : ?>
                                <span class="mx-[.4rem] text-white/25">|</span>
                            <?php endif; ?>
                            <a href="<?php echo esc_url($link['url']); ?>"
                                class="text-white/[.55] no-underline transition-colors duration-150 hover:text-white">
                                <?php echo esc_html($link['label']); ?>
                            </a>
                        <?php endforeach; ?>
                    </nav>
                <?php endif; ?>
                <div class="md:flex w-full items-center gap-4 md:flex-1 justify-center text-center md:text-left">
                    <div class="text-sm text-white/[.6] m-0 <?php if (! empty($legal_links)) : ?>md:pl-4 mb-4 md:mb-0<?php endif; ?>">
                        &copy; <?php echo esc_html(gmdate('Y')); ?> <?php bloginfo('name'); ?>. All Rights Reserved.
                    </div>
                    <div class="ml-auto flex items-center gap-2 justify-center md:justify-right">
                        <?php if ($footer_data['facebook']) : ?>
                            <a class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-150 hover:bg-white/20 hover:text-white" href="<?php echo esc_url($footer_data['facebook']); ?>" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if ($footer_data['twitter']) : ?>
                            <a class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-150 hover:bg-white/20 hover:text-white" href="<?php echo esc_url($footer_data['twitter']); ?>" target="_blank" rel="noreferrer" aria-label="X / Twitter">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.978l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if ($footer_data['youtube']) : ?>
                            <a class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-150 hover:bg-white/20 hover:text-white" href="<?php echo esc_url($footer_data['youtube']); ?>" target="_blank" rel="noreferrer" aria-label="YouTube">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.97C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if ($footer_data['instagram']) : ?>
                            <a class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-150 hover:bg-white/20 hover:text-white" href="<?php echo esc_url($footer_data['instagram']); ?>" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        <?php endif; ?>
                        <?php if ($footer_data['linkedin']) : ?>
                            <a class="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition-colors duration-150 hover:bg-white/20 hover:text-white" href="<?php echo esc_url($footer_data['linkedin']); ?>" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
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
