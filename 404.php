<?php header_hub_get_custom_header(); ?>

<section class="fourohfour-main pt-8 pb-8">
    <div class="container px-8">
        <div class="grid grid-cols-12">
            <div class="col-span-12 md:col-span-8 md:col-start-3 text-center">
                <h2 class="text-secondary font-bold tracking-widest uppercase">404 Error</h2>
                <h1 class="text-3xl font-bold md:text-4xl mb-8">Sorry, this page cannot be found.</h1>

                <p class="text-xl">The page you are looking for may have been removed, had it's name changed or is temporarily unavailable.</p>
            </div>
        </div>
    </div>
</section>
<hr />
<section class="fourohfour-recent-posts px-8 pt-8 md:pt-14 pb-20">
    <div class="container">
        <div class="grid grid-cols-12">
            <div class="col-span-12 text-center">
                <h2 class="dark-text text-3xl leading-tight font-bold mb-10">Recent Posts</h2>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-x-8">
            <?php $fallback_image = get_field('blog_fallback_image', 'option'); // Fetch global fallback image 
            ?>
            <?php // WP_Query arguments
            $args = array(
                'post_type'              => array('post'),
                'post_status'            => array('publish'),
                'posts_per_page'         => '3',
            );

            // The Query
            $fourohfour_recent_posts_query = new WP_Query($args);

            // The Loop
            if ($fourohfour_recent_posts_query->have_posts()) {
                while ($fourohfour_recent_posts_query->have_posts()) {
                    $fourohfour_recent_posts_query->the_post();

                    $fallback_image_url = '';
                    $fallback_position = '50% 50%'; // Default center if no focus point

                    if (!empty($fallback_image) && is_array($fallback_image)) {
                        $fallback_image_src = wp_get_attachment_image_src($fallback_image['id'], 'large');
                        $fallback_image_url = $fallback_image_src[0] ?? '';

                        if (!empty($fallback_image['focus_point'])) {
                            $focus_x = isset($fallback_image['focus_point']['left']) ? $fallback_image['focus_point']['left'] * 100 : 50;
                            $focus_y = isset($fallback_image['focus_point']['top']) ? $fallback_image['focus_point']['top'] * 100 : 50;
                            $fallback_position = "{$focus_x}% {$focus_y}%";
                        }
                    }
            ?>
                    <div class="col-span-12 sm:col-span-6 lg:col-span-4">
                        <div class="bg-white rounded-lg overflow-hidden">
                            <!-- Featured Image or Fallback -->
                            <div class="w-full h-64 mb-2">
                                <?php if (has_post_thumbnail()): ?>
                                    <a href="<?php the_permalink(); ?>"><?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'large', false, [
                                        'class' => 'w-full !h-full object-cover rounded-lg',
                                        'loading' => 'lazy',
                                        'sizes' => '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
                                    ]); ?></a>
                                <?php elseif (!empty($fallback_image['id'])): ?>
                                    <a href="<?php the_permalink(); ?>"><?php echo wp_get_attachment_image($fallback_image['id'], 'large', false, [
                                        'class' => 'w-full !h-full object-cover rounded-lg',
                                        'style' => 'object-position: ' . esc_attr($fallback_position) . ';',
                                        'loading' => 'lazy',
                                        'sizes' => '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
                                    ]); ?></a>
                                <?php endif; ?>
                            </div>

                            <div>
                                <!-- Post Date -->
                                <div class="text-sm text-gray-500 mb-3">Posted on <?php echo get_the_date('m/d/Y'); ?></div>

                                <!-- Post Title (Hyperlinked) -->
                                <h3 class="mb-8 !text-2xl">
                                    <a href="<?php the_permalink(); ?>" class="hover:text-primary text-secondary"><?php the_title(); ?></a>
                                </h3>
                            </div>
                        </div>
                    </div>

            <?php
                }
            } else {
                // no posts found
            }

            // Restore original Post Data
            wp_reset_postdata(); ?>
        </div>
    </div>
</section>

<?php footer_hub_get_custom_footer(); ?>