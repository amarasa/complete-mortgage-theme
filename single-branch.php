<?php header_hub_get_custom_header(); ?>

<?php
$quantity = get_field("reviews_quantity");
$term_ID = get_field("select_branch");
?>


<section>
    <?php the_content(); ?>
</section>



<?php footer_hub_get_custom_footer(); ?>