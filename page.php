<?php header_hub_get_custom_header(); ?>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php the_content(); ?>
        </div>
    <?php endwhile;
else : ?>
    <p class="text-center text-gray-600">No content found.</p>

<?php endif; ?>
</main>
<?php footer_hub_get_custom_footer(); ?>