<?php
$classes = '';
$id = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', $block['anchor']);
}
?>

<article class="container mx-auto px-8 py-12 lg:py-16 <?php echo esc_attr($classes); ?>" <?php echo $id; ?>>
    <InnerBlocks />
</article>
