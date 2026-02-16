<?php
$classes = '';
$id = '';
$acfKey = 'group_67d2ea8731b7b';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}
?>

<section class="customer-reviews <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="container mx-auto px-8">
        <h2 class="font-bold text-center mb-8">
            <?php $headline = get_field('headline'); ?>
            <?php if ($headline) {
                echo $headline;
            } else { ?>
                Customer Reviews
            <?php } ?>
        </h2>

        <?php echo do_shortcode('[wprevpro_usetemplate tid="4"]'); ?>
    </div>
</section>