<?php /* Template Name: Thank You */
header_hub_get_custom_header(); ?>

<section class="thank-you-content bg-[#efefef] py-16">
    <div class="container px-8 max-w-4xl mx-auto">
        <h1 class="!font-bolder"><?php the_title(); ?></h1>

        <article>
            <?php the_content(); ?>
        </article>
    </div>
</section>

<?php footer_hub_get_custom_footer(); ?>