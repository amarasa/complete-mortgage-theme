<?php

/**
 * Inline insert from ACF Theme Settings (Options)
 * Inserts a custom block before a specific <h2> in post content.
 */
if (get_field('enable_blog_post_auto_cta', 'option')) {
    add_filter('the_content', function ($content) {

        // Only single posts with at least one <h2>
        if (!is_singular('post') || stripos($content, '<h2') === false) {
            return $content;
        }

        // ACF option: enable/disable
        $enabled = function_exists('get_field') ? get_field('enable_blog_post_auto_cta', 'option') : false;
        if (!$enabled) {
            return $content;
        }

        // Which heading number to insert BEFORE (1-based)
        $blog_post_auto_cta_which_h2 = (int) get_field('blog_post_auto_cta_which_h2', 'option');

        // Build the HTML for the insert block
        ob_start();
?>
        <div class="w-full px-8 pt-8 pb-12 rounded-lg border my-8 
        <?php
        if (get_field('blog_post_auto_cta_enable_gradient_background_color', 'option')) {
            $choice = get_field('blog_post_auto_cta_which_color', 'option'); // "primary" | "secondary"
            $from_choices = [
                'primary'   => 'from-primary/20',
                'secondary' => 'from-secondary/20',
            ];
            $from_class = $from_choices[$choice] ?? 'from-primary/20';
            echo ' bg-gradient-to-l ' . esc_attr($from_class) . ' to-muted';
        }
        ?>
        ">
            <?php
            $blog_post_auto_cta_icon = get_field('blog_post_auto_cta_icon', 'option'); ?>
            <?php if ($blog_post_auto_cta_icon) { ?>
                <div class="text-center mb-3">
                    <i class="<?php echo esc_attr($blog_post_auto_cta_icon); ?> text-6xl text-secondary" aria-hidden="true"></i>
                </div>
            <?php } ?>


            <h3 class="text-2xl font-bold !mb-3 text-center">
                <?php echo esc_html(get_field('blog_post_auto_cta_headline', 'option')); ?>
            </h3>

            <?php if ($text = get_field('blog_post_auto_cta_text', 'option')): ?>
                <p class="text-muted-foreground mb-6 text-center text-balance">
                    <?php echo wp_kses_post($text); ?>
                </p>
            <?php endif; ?>

            <?php if (have_rows('blog_post_auto_cta_buttons', 'option')): ?>
                <div class="flex flex-col sm:flex-row gap-3 justify-center">
                    <?php while (have_rows('blog_post_auto_cta_buttons', 'option')): the_row();
                        $link = get_sub_field('button'); // ACF Link field: ['title','url','target']
                        if (!$link || empty($link['url'])) continue;

                        $label  = $link['title'] ?: 'Learn more';
                        $url    = $link['url'];
                    ?>
                        <a class="button bg-primary !no-underline !text-white hover:bg-secondary"
                            href="<?php echo esc_url($url); ?>" <?php echo cms_link_attributes($link['target'] ?: '_self'); ?>>
                            <?php echo esc_html($label); ?>
                        </a>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>

        </div>
<?php
        $insert_html = trim(ob_get_clean());

        if ($insert_html === '') {
            return $content;
        }

        /**
         * Insert BEFORE the Nth <h2>.
         * We split on "<h2" (case-insensitive) and re-attach the tag to each subsequent chunk
         * to preserve attributes.
         */
        $parts = preg_split('/<h2/i', $content);
        $rebuilt = '';
        $h2_counter = 0;

        foreach ($parts as $idx => $chunk) {
            if ($idx === 0) {
                // Leading content before the first <h2>
                $rebuilt .= $chunk;
                continue;
            }

            $h2_counter++;

            // Before re-attaching the <h2>, check if this is our target position
            if ($h2_counter === $blog_post_auto_cta_which_h2) {
                $rebuilt .= $insert_html;
            }

            // Re-attach the <h2> that was removed by the split
            $rebuilt .= '<h2' . $chunk;
        }

        return $rebuilt;
    }, 15);
}
?>
