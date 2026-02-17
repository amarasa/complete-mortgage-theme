<?php
$classes = '';
$id = '';
$acfKey = 'group_63a5bd05b1bdb';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// Get ACF fields
$default_background_color = get_field('default_background_color');
$headline = get_field('headline');
$introduction_text = get_field('introduction_text');
$buttons = get_field('buttons');
$below_button_text = get_field('below_button_text');
$background_images = get_field('background_images');
$turn_on_overlay = get_field('turn_on_overlay');
$top_gradient_overlay = get_field('top_gradient_overlay');
$bottom_gradient_overlay = get_field('bottom_gradient_overlay');
?>
<?php
$hero_image_id = 0;
if (have_rows('background_images')) {
    $background_images_array = [];
    while (have_rows('background_images')) {
        the_row();
        $background_image = get_sub_field('background_image');
        if ($background_image) {
            $background_images_array[] = $background_image;
        }
    }

    if (!empty($background_images_array)) {
        $random_image = $background_images_array[array_rand($background_images_array)];
        $hero_image_id = $random_image['ID'] ?? $random_image['id'] ?? 0;
    }
}
?>
<section class="hero-full-width relative w-full h-full overflow-hidden <?php echo esc_attr($default_background_color); ?> <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <?php if ($hero_image_id) {
        echo wp_get_attachment_image($hero_image_id, 'full', false, [
            'class'         => 'hero-full-width-bg absolute inset-0 w-full !h-full object-cover object-center z-0',
            'sizes'         => '100vw',
            'loading'       => 'eager',
            'fetchpriority' => 'high',
            'aria-hidden'   => 'true',
            'alt'           => '',
        ]);
    } ?>
    <?php if ($hero_image_id) { ?>
        <div class="hero-full-width-overlay z-10 absolute h-full w-full" style="background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);"></div>
    <?php } ?>
    <?php
    // Text and button colors based on background
    if ($hero_image_id) {
        $content_text_color = '!text-white';
        $button_bg_class = '!bg-secondary';
    } else {
        switch ($default_background_color) {
            case 'bg-primary':
                $content_text_color = '!text-white';
                $button_bg_class = '!bg-secondary';
                break;
            case 'bg-secondary':
                $content_text_color = '!text-white';
                $button_bg_class = '!bg-primary';
                break;
            case 'bg-grey':
            case 'bg-white':
                $content_text_color = '!text-primary';
                $button_bg_class = '!bg-primary';
                break;
            default:
                $content_text_color = '!text-white';
                $button_bg_class = '';
                break;
        }
    }
    ?>
    <div class="hero-full-width-content relative px-8 z-20 <?php echo esc_attr($content_text_color); ?> mx-auto text-center container py-16 lg:pt-[130px] lg:pb-[105px]">

        <h1 class="<?php echo esc_attr($content_text_color); ?>"><?php echo esc_html($headline); ?></h1>
        <div class="max-w-3xl mx-auto mb-5 <?php echo esc_attr($content_text_color); ?>"><?php echo wp_kses_post($introduction_text); ?></div>

        <?php if ($buttons): ?>
            <?php $button_count = count($buttons); ?>
            <div class="mt-4 <?php echo esc_attr($button_count === 3 ? 'md:flex justify-center gap-x-8' : ''); ?>">
                <?php foreach ($buttons as $button): ?>
                    <?php if (!empty($button['button'])): ?>
                        <a class="button !no-underline !text-white !block md:!max-w-[350px] w-full mb-3 mx-auto <?php echo esc_attr($button_bg_class); ?> <?php echo esc_attr($button_count === 3 ? '!max-w-none w-auto px-6' : ''); ?>" href="<?php echo esc_url($button['button']['url']); ?>" <?php echo cms_link_attributes($button['button']['target'] ?: '_self'); ?>>
                            <?php echo esc_html($button['button']['title']); ?>
                        </a>
                    <?php endif; ?>
                <?php endforeach; ?>
            </div>
        <?php endif; ?>

        <p><?php echo wp_kses_post(str_replace('<a ', '<a class="!no-underline ' . esc_attr($content_text_color) . ' hover:!opacity-60" ', $below_button_text)); ?></p>
    </div>
</section>
