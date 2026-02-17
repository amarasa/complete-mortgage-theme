<?php header_hub_get_custom_header(); ?>
<div class="container px-8 mt-8">
    <h1 class="text-3xl mb-8 font-bold">Search Results for "<?php echo esc_html(get_search_query(false)); ?>"</h1>

    <div class="grid grid-cols-12 gap-x-4">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
                <div class="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 mb-20 ">
                    <?php
                    $feature_img_id = get_post_thumbnail_id($post->ID);
                    $fallback_img = get_field('fallback_image', 'option');
                    ?>
                    <a href="<?php the_permalink(); ?>" class="relative block mb-4 overflow-hidden blog-entry-thumbnail">
                        <?php if ($feature_img_id): ?>
                            <?php echo wp_get_attachment_image($feature_img_id, 'large', false, [
                                'class' => 'w-full !h-full object-cover',
                                'loading' => 'lazy',
                                'sizes' => '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw',
                            ]); ?>
                        <?php elseif ($fallback_img): ?>
                            <img src="<?php echo esc_url(is_array($fallback_img) ? $fallback_img['url'] : $fallback_img); ?>"
                                 alt="<?php the_title_attribute(); ?>"
                                 class="w-full !h-full object-cover"
                                 loading="lazy">
                        <?php endif; ?>
                        <div class="read-more absolute -bottom-16 w-full text-white p-4 text-center uppercase left-0 transition-all duration-300 ease-in-out blog-entry-read-more font-semibold">
                            Read More
                        </div>
                    </a>

                    <div class="flex mb-4 text-sm">
                        <div class="mr-4">
                            Posted on <?php $date = get_the_date('m/d/Y');
                                        echo $date; ?>
                        </div>
                        <div class="blog-entry-category">
                            <?php
                            $categories = wp_get_post_categories(get_the_ID());
                            $i = 0;
                            foreach ($categories as $category) {
                                if ($i == 0) {
                                    echo '<a class="category-link transition-all duration-300 ease-in-out" href="' . get_category_link($category) . '">' . get_cat_name($category) . '</a>';
                                }
                                $i++;
                            } ?>
                        </div>
                    </div>

                    <h2 class="text-xl md:text-2xl font-bold mb-4"><a class="transition-all duration-300 ease-in-out" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>

                    <div class="text-sm mb-2">
                        By <a href="<?php echo get_author_posts_url(get_the_author_meta('ID'), get_the_author_meta('user_nicename')); ?>" class="transition-all duration-300 ease-in-out"><?php the_author(); ?></a>
                    </div>
                    <div class="text-sm">
                        <?php $id = get_the_id(); ?>
                        <?php echo reading_time($id); ?> minute read
                    </div>
                </div>
        <?php endwhile;
        endif; ?>
    </div>
</div>

<?php footer_hub_get_custom_footer(); ?>