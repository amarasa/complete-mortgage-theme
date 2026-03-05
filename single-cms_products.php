<?php header_hub_get_custom_header(); ?>

<?php
$post_id = get_queried_object_id();
if (!$post_id) {
    $post_id = get_the_ID();
}
$feature_img_id = get_post_thumbnail_id($post_id);
$hero_image_id = $feature_img_id ? (int) $feature_img_id : 0;
$hero_image_alt = $hero_image_id ? get_post_meta($hero_image_id, '_wp_attachment_image_alt', true) : '';
$focus_x = 50;
$focus_y = 50;
$raw_focus_x = get_post_meta($post_id, 'featured_image_focus_x', true);
$raw_focus_y = get_post_meta($post_id, 'featured_image_focus_y', true);
$focus_x = is_numeric($raw_focus_x) ? (float) $raw_focus_x : 50;
$focus_y = is_numeric($raw_focus_y) ? (float) $raw_focus_y : 50;
if (is_user_logged_in() && current_user_can('manage_options')) {
    $debug_fx = isset($_GET['fx']) ? wp_unslash($_GET['fx']) : null;
    $debug_fy = isset($_GET['fy']) ? wp_unslash($_GET['fy']) : null;
    if (is_numeric($debug_fx) && is_numeric($debug_fy)) {
        $focus_x = (float) $debug_fx;
        $focus_y = (float) $debug_fy;
    }
}

$focus_x = max(0, min(100, $focus_x));
$focus_y = max(0, min(100, $focus_y));
$hero_object_position = $focus_x . '% ' . $focus_y . '%';
$hero_srcset = $hero_image_id ? wp_get_attachment_image_srcset($hero_image_id, 'full') : '';
$hero_sizes = '(min-width: 1536px) 1500px, (min-width: 1280px) 96vw, 100vw';
if (is_user_logged_in() && current_user_can('manage_options')) {
    echo "\n<!-- product-hero-focus: x={$focus_x}, y={$focus_y}, post_id={$post_id} -->\n";
}
?>
<section class="product-hero lg:px-8">
    <div class="product-hero-media relative pb-[45%] md:pb-[35%] lg:pb-[25%] mb-8 md:mb-16 lg:rounded-md extend-container mx-auto overflow-hidden">
        <?php
        if ($hero_image_id) {
            echo wp_get_attachment_image($hero_image_id, 'full', false, [
                'class' => 'absolute inset-0 w-full h-full object-cover',
                'style' => 'width: 100% !important; height: 100% !important; max-width: none !important; object-fit: cover !important; object-position: ' . esc_attr($hero_object_position) . ' !important;',
                'data-focus-x' => (string) $focus_x,
                'data-focus-y' => (string) $focus_y,
                'srcset' => $hero_srcset,
                'sizes' => $hero_sizes,
                'alt' => $hero_image_alt,
                'loading' => 'eager',
                'fetchpriority' => 'high',
            ]);
        }
        ?>
    </div>
</section>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        var heroImg = document.querySelector('.product-hero-media img[data-focus-x][data-focus-y]');
        if (!heroImg) return;
        var x = heroImg.getAttribute('data-focus-x');
        var y = heroImg.getAttribute('data-focus-y');
        if (!x || !y) return;
        heroImg.style.setProperty('object-fit', 'cover', 'important');
        heroImg.style.setProperty('object-position', x + '% ' + y + '%', 'important');
    });
</script>
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