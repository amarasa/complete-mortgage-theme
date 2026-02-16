<?php
$classes = '';
$id = '';
$acfKey = 'group_67d87b5f039d3';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id=%s', $block['anchor']);
}

?>
<section class="blue-link<?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <?php
    // Retrieve the ACF link field
    $blue_link = get_field('blue_link');

    // Only display the link if a valid URL is set
    if (!empty($blue_link) && !empty($blue_link['url'])) :

        // Assign variables safely
        $blueLinkUrl    = $blue_link['url'];
        $blueLinkTitle  = !empty($blue_link['title']) ? $blue_link['title'] : 'Click Me';
        $blueLinkTarget = !empty($blue_link['target']) ? $blue_link['target'] : '_self';
    ?>

        <a class="mb-8 block text-[20px] font-bold text-[blue] hover:text-[purple] underline tracking-tight"
            href="<?php echo esc_url($blueLinkUrl); ?>"
            target="<?php echo esc_attr($blueLinkTarget); ?>">
            <?php echo esc_html($blueLinkTitle); ?>
        </a>

    <?php endif; ?>

</section>