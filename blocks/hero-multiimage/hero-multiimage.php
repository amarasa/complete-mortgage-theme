<?php
$classes = '';
$id = '';
$acfKey = 'group_67c74f1292042';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// ACF fields
$headline          = get_field('headline');
$introduction_text = get_field('introduction_text');
$buttons           = get_field('buttons');
$below_button_text = get_field('below_button_text');
$multi_image_set   = get_field('multi-image_set');
$rounded_image_corners = get_field('image_corner_style');
$cornerClass = $rounded_image_corners ? 'rounded-md' : '';

?>

<section class="multiimage-hero relative w-full pb-16 <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="max-w-[1300px] mx-auto px-8">
        <div class="grid grid-cols-12 lg:gap-x-20 items-center">
            <!-- Left Content -->
            <div class="col-span-12 lg:col-span-5">
                <h1><?php echo esc_html($headline); ?></h1>
                <p><?php echo wp_kses_post($introduction_text); ?></p>

                <?php if ($buttons): ?>
                    <div class="sm:flex sm:gap-x-4">
                        <?php foreach ($buttons as $button): ?>
                            <?php if (!empty($button['button'])): ?>
                                <a class="button !no-underline !text-white !block sm:w-full mb-3"
                                    href="<?php echo esc_url($button['button']['url']); ?>"
                                    target="<?php echo esc_attr($button['button']['target']); ?>">
                                    <?php echo esc_html($button['button']['title']); ?>
                                </a>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

                <p class="mt-4"><?php echo wp_kses_post($below_button_text); ?></p>
            </div>

            <!-- Right Images -->
            <div class="col-span-12 hidden lg:block lg:col-span-7">
                <?php if (!empty($multi_image_set) && is_array($multi_image_set) && count($multi_image_set) >= 4): ?>
                    <div class="grid grid-cols-12 lg:gap-x-4">
                        <!-- Left Column of images -->
                        <div class="col-span-12 lg:col-span-6 xl:col-span-8">
                            <?php
                            $img1_id  = $multi_image_set[0]['image']['id'] ?? '';
                            $img1_url = $img1_id
                                ? wp_get_attachment_image_url($img1_id, 'large')
                                : $multi_image_set[0]['image'];
                            $img1_alt = $img1_id
                                ? get_post_meta($img1_id, '_wp_attachment_image_alt', true)
                                : '';
                            ?>
                            <div class="overflow-hidden <?php echo $cornerClass; ?> shadow-lg w-full max-w-[480px] h-full max-h-[338px] mb-4">
                                <img
                                    src="<?php echo esc_url($img1_url); ?>"
                                    alt="<?php echo esc_attr($img1_alt); ?>"
                                    class="object-cover w-full h-full" />
                            </div>

                            <?php
                            // Bottom-left image (480 x 250)
                            $img2_id  = $multi_image_set[1]['image']['id'] ?? '';
                            $img2_url = $img2_id
                                ? wp_get_attachment_image_url($img2_id, 'large')
                                : $multi_image_set[1]['image'];
                            $img2_alt = $img2_id
                                ? get_post_meta($img2_id, '_wp_attachment_image_alt', true)
                                : '';
                            ?>
                            <div class="overflow-hidden <?php echo $cornerClass; ?> shadow-lg w-full max-w-[480px] h-full max-h-[250px]">
                                <img
                                    src="<?php echo esc_url($img2_url); ?>"
                                    alt="<?php echo esc_attr($img2_alt); ?>"
                                    class="object-cover w-full h-full" />
                            </div>
                        </div>

                        <!-- Right Column of images -->
                        <div class="col-span-12 lg:col-span-6 xl:col-span-4">
                            <?php
                            // Top-right image (291 x 250)
                            $img3_id  = $multi_image_set[2]['image']['id'] ?? '';
                            $img3_url = $img3_id
                                ? wp_get_attachment_image_url($img3_id, 'large')
                                : $multi_image_set[2]['image'];
                            $img3_alt = $img3_id
                                ? get_post_meta($img3_id, '_wp_attachment_image_alt', true)
                                : '';
                            ?>
                            <div class="overflow-hidden <?php echo $cornerClass; ?> shadow-lg w-full max-w-[291px] h-full max-h-[250px] mb-4">
                                <img
                                    src="<?php echo esc_url($img3_url); ?>"
                                    alt="<?php echo esc_attr($img3_alt); ?>"
                                    class="object-cover w-full h-full" />
                            </div>

                            <?php
                            // Bottom-right image (291 x 338)
                            $img4_id  = $multi_image_set[3]['image']['id'] ?? '';
                            $img4_url = $img4_id
                                ? wp_get_attachment_image_url($img4_id, 'large')
                                : $multi_image_set[3]['image'];
                            $img4_alt = $img4_id
                                ? get_post_meta($img4_id, '_wp_attachment_image_alt', true)
                                : '';
                            ?>
                            <div class="overflow-hidden <?php echo $cornerClass; ?> shadow-lg w-full max-w-[291px] h-full max-h-[338px]">
                                <img
                                    src="<?php echo esc_url($img4_url); ?>"
                                    alt="<?php echo esc_attr($img4_alt); ?>"
                                    class="object-cover w-full h-full" />
                            </div>
                        </div>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>