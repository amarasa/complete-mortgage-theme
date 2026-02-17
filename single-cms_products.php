<?php header_hub_get_custom_header(); ?>

<?php $feature_img_src = wp_get_attachment_image_url(get_post_thumbnail_id($post), 'large');
?>
<section class="product-hero lg:px-8 mt-8">
    <div class="product-hero pb-[45%] md:pb-[35%] lg:pb-[25%] !bg-cover bg-center mb-8 md:mb-16 lg:rounded-md extend-container mx-auto" style="background-image: url('<?php echo esc_url($feature_img_src); ?>');">
    </div>
</section>
<main class="product-content pb-12">
    <div class="container px-8">
        <div class="grid grid-cols-12 lg:gap-x-16">
            <div class="col-span-12 lg:col-span-7 mb-8 order-2 lg:order-1">
                <h1><?php the_title(); ?></h1>

                <article class="prose">
                    <?php the_content(); ?>
                </article>
            </div>
            <div class="col-span-12 lg:col-span-5 order-1 lg:order-2 mb-8">
                <div class="sticky top-8">
                    <?php
                    // Check if a specific sidebar is selected for this page/post
                    $selected_sidebar = get_post_meta(get_the_ID(), '_widget_whiz_selected_sidebar', true);

                    if ($selected_sidebar) {
                        // Display the selected sidebar
                        dynamic_sidebar(sanitize_title($selected_sidebar));
                    } else {
                        // Fallback to a default sidebar if none is selected
                        dynamic_sidebar('sidebar');
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</main>

<?php
$financial_product_schema = [
    "@context" => "https://schema.org",
    "@type" => "FinancialProduct",
    "name" => get_the_title(),
    "description" => wp_strip_all_tags(get_the_excerpt() ?: get_the_content()),
    "url" => get_permalink(),
    "image" => get_the_post_thumbnail_url(get_the_ID(), 'full'),
    "provider" => [
        "@type" => "Organization",
        "name" => get_bloginfo('name'),
        "url" => home_url(),
    ],
];

$financial_product_schema = array_filter($financial_product_schema, function ($value) {
    if (is_array($value)) {
        return !empty(array_filter($value));
    }

    return !empty($value);
});
?>
<script type="application/ld+json">
    <?php echo wp_json_encode($financial_product_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>

<?php footer_hub_get_custom_footer(); ?>
