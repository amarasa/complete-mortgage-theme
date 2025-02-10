<?php header_hub_get_custom_header(); ?>

<main class="container mx-auto my-8">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="mb-6 p-6 bg-white shadow-md rounded-lg">
                <h1 class="text-3xl font-bold mb-4"><?php the_title(); ?></h1>
                <div class="text-gray-700 mb-4">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile;
    else : ?>
        <p class="text-center text-gray-600">No content found.</p>
    <?php endif; ?>
</main>
<?php footer_hub_get_custom_footer(); ?>