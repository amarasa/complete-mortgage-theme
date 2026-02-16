<?php
$classes = '';
$id = '';
$acfKey = 'group_67d319924ffa6';

// Get ACF fields
$hero_image = get_field('hero_image');
$edge_to_edge = get_field('edge_to_edge');
$corners = get_field('corners') ? 'md:rounded-xl' : ''; // Controls border-radius
$extend_container = get_field('extend_container'); // This makes the image stretch full width but not edge to edge.  64px padding left and right.

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// Handle FocusPoint Image
$hero_image_url = '';
$background_position = '50% 50%'; // Default to center

if (!empty($hero_image) && is_array($hero_image)) {
    $hero_image_src = wp_get_attachment_image_src($hero_image['id'], 'large');
    $hero_image_url = $hero_image_src[0] ?? '';

    if (!empty($hero_image['focus_point'])) {
        $focus_x = isset($hero_image['focus_point']['left']) ? $hero_image['focus_point']['left'] * 100 : 50;
        $focus_y = isset($hero_image['focus_point']['top']) ? $hero_image['focus_point']['top'] * 100 : 50;
        $background_position = "{$focus_x}% {$focus_y}%";
    }
}
?>

<section class="hero-with-image-only <?php echo esc_attr($edge_to_edge ? 'w-full px-0' : 'xl:container'); ?> <?php echo esc_attr(!$edge_to_edge ? $corners : ''); ?> <?php if ($extend_container) { ?>extend-container<?php } ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>"
    style="background-image: url('<?php echo esc_url($hero_image_url); ?>'); background-position: <?php echo esc_attr($background_position); ?>; background-size: cover !important;">
</section>