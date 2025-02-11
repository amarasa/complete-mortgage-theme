<?php header_hub_get_custom_header(); ?>

<main class="container mx-auto my-8">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="mb-6 p-6 bg-white shadow-md rounded-lg">
                <h1 class="text-3xl font-bold mb-4"><?php the_title(); ?></h1>
                <div class="text-gray-700 mb-4">
                    <?php the_content(); ?>
                </div>

            </article>

            <article>
                <time>Mar 10, 2020</time>
                <h2>Boost your conversion rate</h2>
                <p class="line-clamp-2">
                    Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
                    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
                    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
                    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
                    enim.
                </p>
            </article>

            <button class="elevation-1">Button</button>
        <?php endwhile;
    else : ?>
        <p class="text-center text-gray-600">No content found.</p>


    <?php endif; ?>
</main>
<?php footer_hub_get_custom_footer(); ?>