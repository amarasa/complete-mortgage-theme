<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

?>
<section class="narrow-container max-w-[800px] mx-auto <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <InnerBlocks />
</section>