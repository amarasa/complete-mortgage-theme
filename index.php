<?php header_hub_get_custom_header(); ?>

<main class="container mx-auto my-8">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="mb-6 p-6 bg-white shadow-md rounded-lg">
                <h2 class="text-2xl font-bold mb-2">
                    <a href="<?php the_permalink(); ?>">
                        <?php the_title(); ?>
                    </a>
                </h2>
                <div class="text-gray-700 mb-4">
                    <?php the_excerpt(); ?>
                </div>
                <a href="<?php the_permalink(); ?>" class="text-blue-600 hover:underline">Read More</a>
            </article>
        <?php endwhile;
    else : ?>
        <p class="text-center text-gray-600">No posts found.</p>
    <?php endif; ?>
</main>

<?php footer_hub_get_custom_footer(); ?>