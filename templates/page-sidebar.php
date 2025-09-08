<?php /* Template Name: Page with Sidebar */
header_hub_get_custom_header(); ?>

<main class="container px-8">
    <div class="grid grid-cols-12 gap-x-8">
        <article class="page-article prose col-span-12 md:col-span-8">
            <?php the_content(); ?>
        </article>
        <aside class="page-sidebar col-span-12 md:col-span-4">
            <?php dynamic_sidebar(); ?>
        </aside>
    </div>
</main>

<?php footer_hub_get_custom_footer(); ?>