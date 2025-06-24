<?php header_hub_get_custom_header(); ?>

<?php $feature_img_src = wp_get_attachment_image_url(get_post_thumbnail_id($post), 'large');
?>
<section class="product-hero lg:px-8 mt-8">
    <div class="product-hero pb-[45%] md:pb-[35%] lg:pb-[25%] !bg-cover bg-center mb-8 md:mb-16 lg:rounded-md extend-container mx-auto" style="background-image: url('<?php echo $feature_img_src; ?>');">
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

<?php footer_hub_get_custom_footer(); ?>