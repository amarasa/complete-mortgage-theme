<?php header_hub_get_custom_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <article class="page-article prose">
            <?php the_content(); ?>
        </article>
    <?php endwhile;
else : ?>
    <p class="text-center text-gray-600">No content found.</p>

<?php endif; ?>
</main>
<?php footer_hub_get_custom_footer(); ?>