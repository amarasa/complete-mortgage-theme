<?php header_hub_get_custom_header(); ?>

<main class="container py-20 px-8">
    <h1 class="mb-16"><?php single_cat_title(); ?></h1>

    <?php if (have_posts()) : ?>
        <?php $fallback_image = get_field('blog_fallback_image', 'option'); // Fetch global fallback image 
        ?>
        <div class="grid grid-cols-12 md:gap-x-8">

            <?php while (have_posts()) : the_post();
                // Extract FocusPoint values for fallback image
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
                                <a href="<?php the_permalink(); ?>" class="relative">
                                    <div class="bg-black absolute top-0 right-0 bottom-0 left-0 rounded-lg opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out"></div>
                                    <?php echo wp_get_attachment_image(get_post_thumbnail_id(), 'large', false, [
                                        'class' => 'w-full !h-full object-cover rounded-lg',
                                        'loading' => 'lazy',
                                        'sizes' => '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
                                    ]); ?>
                                </a>
                            <?php elseif (!empty($fallback_image['id'])): ?>
                                <a href="<?php the_permalink(); ?>" class="relative">
                                    <div class="bg-black absolute top-0 right-0 bottom-0 left-0 rounded-lg opacity-0 hover:opacity-40 transition-all duration-300 ease-in-out"></div>
                                    <?php echo wp_get_attachment_image($fallback_image['id'], 'large', false, [
                                        'class' => 'w-full !h-full object-cover rounded-lg',
                                        'style' => 'object-position: ' . esc_attr($fallback_position) . ';',
                                        'loading' => 'lazy',
                                        'sizes' => '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
                                    ]); ?>
                                </a>
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
            <?php endwhile;
        else : ?>
            <p class="text-center text-gray-600">No posts found.</p>
        </div>
    <?php endif; ?>
    </div>
    <?php pagination(); ?>
</main>

<?php footer_hub_get_custom_footer(); ?>