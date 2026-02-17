<?php
$classes = '';
$id = '';
$acfKey = 'group_67cf806f0116e';

// Get ACF fields
$eyebrow_headline = get_field('eyebrow_headline') ?: '';
$headline = get_field('headline') ?: '';
$cta_content = get_field('cta_content') ?: '';
$cta_button = get_field('cta_button');
$image = get_field('image'); // FocusPoint ACF image
$image_corners = get_field('image_corners') ? 'image-rounded' : 'image-squared'; // Apply rounded/squared
$image_position = get_field('image_position') ? 'order-2 md:order-1' : 'order-2 md:order-2';
$other_column_position = get_field('image_position') ? 'order-1 md:order-2' : 'order-1 md:order-1';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// Handle FocusPoint Image Data
$image_url = '';
$background_position = '50% 50%'; // Default center

if (!empty($image) && is_array($image)) {
    // Retrieve image URL via attachment ID for consistent sizing
    $image_src = wp_get_attachment_image_src($image['id'], 'large');
    $image_url = $image_src[0] ?? '';

    // Extract focus point data for object positioning
    if (!empty($image['focus_point'])) {
        $focus_x = isset($image['focus_point']['left']) ? $image['focus_point']['left'] * 100 : 50;
        $focus_y = isset($image['focus_point']['top']) ? $image['focus_point']['top'] * 100 : 50;
        $background_position = "{$focus_x}% {$focus_y}%";
    }
}
?>

<section class="two-column-product-block <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container px-8">
        <div class="grid grid-cols-12 md:gap-x-16 items-center">
            <!-- Image Column -->
            <?php if ($image_url): ?>
                <div class="col-span-12 md:col-span-6 lg:col-span-7 <?php echo esc_attr($image_corners); ?> <?php echo esc_attr($image_position); ?>">
                    <img
                        src="<?php echo esc_url($image_url); ?>"
                        alt="<?php echo esc_attr($image['alt'] ?? 'Product Image'); ?>"
                        class="product-image <?php echo esc_attr($image_corners); ?>"
                        style="object-position: <?php echo esc_attr($background_position); ?>;">
                </div>
            <?php endif; ?>

            <!-- Content Column -->
            <div class="col-span-12 md:col-span-6 lg:col-span-5 mb-4 md:mb-0 <?php echo esc_attr($other_column_position); ?>">
                <?php if ($eyebrow_headline): ?>
                    <p class="eyebrow !mb-3"><?php echo esc_html($eyebrow_headline); ?></p>
                <?php endif; ?>

                <?php if ($headline): ?>
                    <h2><?php echo esc_html($headline); ?></h2>
                <?php endif; ?>

                <?php if ($cta_content): ?>
                    <?php echo wp_kses_post($cta_content); ?>
                <?php endif; ?>

                <?php if ($cta_button): ?>
                    <a href="<?php echo esc_url($cta_button['url']); ?>" class="button !no-underline !text-white" <?php echo cms_link_attributes($cta_button['target'] ?: '_self'); ?>>
                        <?php echo esc_html($cta_button['title']); ?>
                    </a>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>