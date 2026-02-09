<?php header_hub_get_custom_header(); ?>

<section class="single-meta max-w-[920px] text-center pt-20 mx-auto px-8">
    <div class="text-base mb-6">
        <?php $date = get_the_date();
        echo $date; ?>
    </div>
    <h1 class="mb-8 md:mb-20"><?php the_title(); ?></h1>
    <hr />
</section>
<main class="max-w-[920px] mx-auto mb-20 px-8">
    <div class="md:flex md:gap-x-16">
        <aside class="mt-5 text-center">
            <div class="md:sticky md:top-10">
                <div class="font-bold text-sm text-primary mb-3">
                    Share
                </div>
                <div class="text-center flex md:block justify-center gap-x-8">
                    <?php echo do_shortcode('[social-share-icons]'); ?>
                </div>
            </div>
        </aside>
        <article class="single-article mt-10 md:mt-0 prose">
            <?php the_content(); ?>
        </article>
        <div class="mobile-social-share md:hidden mt-12">
            <div class="font-bold text-sm text-primary mb-3 text-center">
                Share
            </div>
            <div class="text-center flex md:block justify-center gap-x-8">
                <?php echo do_shortcode('[social-share-icons]'); ?>
            </div>
        </div>
    </div>
</main>
<hr />
<section class="single-recent-articles mb-20">
    <?php
    // Get current post ID
    $post_id = get_the_ID();

    // Get categories of the current post
    $categories = get_the_category($post_id);
    $related_posts = null;

    if ($categories) {
        $category_ids = wp_list_pluck($categories, 'term_id');

        // Query related posts
        $related_posts = new WP_Query([
            'post_type'      => 'post',
            'posts_per_page' => 3, // Adjust as needed
            'post__not_in'   => [$post_id], // Exclude current post
            'category__in'   => $category_ids,
            'orderby'        => 'rand', // Random order
        ]);
    }

    // Handle fallback image
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

    <div class="container mx-auto py-12 px-8">
        <h2 class="font-bold text-center mb-8">Related Articles</h2>

        <?php if ($related_posts && $related_posts->have_posts()) : ?>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php while ($related_posts->have_posts()) : $related_posts->the_post(); ?>
                    <div class="bg-white rounded-lg overflow-hidden">
                        <!-- Featured Image or Fallback -->
                        <div class="w-full h-64 mb-2">
                            <?php if (has_post_thumbnail()): ?>
                                <a href="<?php the_permalink(); ?>"><img src="<?php echo get_the_post_thumbnail_url(get_the_ID(), 'large'); ?>"
                                        alt="<?php the_title_attribute(); ?>"
                                        class="w-full h-full object-cover rounded-lg">
                                </a>
                            <?php elseif ($fallback_image_url): ?>
                                <a href="<?php the_permalink(); ?>"><img src="<?php echo esc_url($fallback_image_url); ?>"
                                        alt="Fallback Image"
                                        class="w-full h-full object-cover rounded-lg"
                                        style="object-position: <?php echo esc_attr($fallback_position); ?>;"></a>
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
                <?php endwhile; ?>
            </div>
            <?php wp_reset_postdata(); ?>
        <?php else : ?>
            <p class="text-center text-gray-500">No related articles available.</p>
        <?php endif; ?>
    </div>
</section>

<?php
// Article Schema - for SEO rich results
$article_schema = [
    "@context" => "https://schema.org",
    "@type" => "Article",
    "headline" => get_the_title(),
    "description" => has_excerpt() ? get_the_excerpt() : wp_trim_words(get_the_content(), 30),
    "image" => get_the_post_thumbnail_url(get_the_ID(), 'full') ?: '',
    "datePublished" => get_the_date('c'),
    "dateModified" => get_the_modified_date('c'),
    "author" => [
        "@type" => "Person",
        "name" => get_the_author()
    ],
    "publisher" => [
        "@type" => "Organization",
        "name" => get_bloginfo('name'),
        "logo" => [
            "@type" => "ImageObject",
            "url" => get_site_icon_url()
        ]
    ],
    "mainEntityOfPage" => [
        "@type" => "WebPage",
        "@id" => get_permalink()
    ]
];

// Remove empty values
$article_schema = array_filter($article_schema, function($value) {
    return !empty($value);
});
?>
<script type="application/ld+json">
<?php echo wp_json_encode($article_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>

<?php footer_hub_get_custom_footer(); ?>