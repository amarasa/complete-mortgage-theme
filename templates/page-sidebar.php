<?php /* Template Name: Page with Sidebar */
header_hub_get_custom_header(); ?>

<main class="container px-8">
    <div class="grid grid-cols-12 gap-x-8">
        <article class="page-article prose col-span-12 lg:col-span-8 order-2 lg:order-1 mb-8">
            <h1><?php the_title(); ?></h1>

            <?php the_content(); ?>
        </article>
        <aside class="page-sidebar col-span-12 lg:col-span-4 order-1 lg:order-2 mb-8">
            <div class="sticky top-8">
                <?php $selected_sidebar = get_post_meta(get_the_ID(), '_widget_whiz_selected_sidebar', true);

                if ($selected_sidebar && is_active_sidebar(sanitize_title($selected_sidebar))) {
                    dynamic_sidebar(sanitize_title($selected_sidebar));
                }
                ?>
            </div>
        </aside>
    </div>
</main>

<?php footer_hub_get_custom_footer(); ?>