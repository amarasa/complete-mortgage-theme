<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

$overlap_previous_block = get_field('overlap_previous_block');
$enable_background_color = get_field('enable_background_color');
$enable_rounded_edges = get_field('enable_rounded_edges');
$headline = get_field('headline');
$content = get_field('content');
$buttons = get_field('buttons');


?>
<section class="mission-statement cmt-block <?php echo esc_attr($classes); ?> <?php if ($overlap_previous_block) { ?>lg:-mt-20 z-20 relative<?php } ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="container max-w-[991px] mx-auto text-center <?php if ($enable_rounded_edges) { ?>lg:rounded-xl<?php } ?> <?php if ($enable_background_color) {
                                                                                                                            ?>bg-grey p-8<?php } ?>">
        <?php if ($headline) { ?>
            <h2><?php echo $headline; ?></h2>
        <?php } ?>
        <?php if ($content) { ?>
            <div class="max-w-[767px] mx-auto">
                <?php echo $content; ?>
            </div>
        <?php } ?>
        <?php if ($buttons) { ?>
            <div class="md:flex md:gap-x-4 justify-center">
                <?php
                while (have_rows('buttons')) : the_row();
                ?>
                    <?php $button = get_sub_field('button'); ?>
                    <a href="<?php echo $button['url']; ?>" class="button mb-4 !no-underline !text-white"><?php echo $button['title']; ?></a>
                <?php endwhile; ?>
            </div>
        <?php } ?>
    </div>
</section>