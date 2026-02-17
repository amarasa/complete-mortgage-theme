<?php
$classes = '';
$id = '';
$acfKey = 'group_67c0b8f891316';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}
?>
<section class="hero-with-circular-image<?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <?php
    // Get ACF fields
    $headline = get_field('headline');
    $introduction_text = get_field('introduction_text');
    $buttons = get_field('buttons');
    $below_button_text = get_field('below_button_text');
    $foreground_image_set = get_field('foreground_image_set');

    // Select a random foreground image if the set is not empty
    $random_foreground_image_url = '';
    if (!empty($foreground_image_set)) {
        $random_item = $foreground_image_set[array_rand($foreground_image_set)];
        $random_image = $random_item['image'];
        if (is_array($random_image)) {
            $random_foreground_image_src = wp_get_attachment_image_src($random_image['id'], 'large');
            $random_foreground_image_url = $random_foreground_image_src[0];
        } else {
            $random_foreground_image_url = $random_image;
        }
    }
    ?>

    <?php if ($random_foreground_image_url): ?>
        <style>
            .random-foreground-image {
                background-image: url('<?php echo esc_url($random_foreground_image_url); ?>');
                <?php if (is_array($random_image) && !empty($random_image['left']) && !empty($random_image['top'])): ?>background-position: <?php echo esc_attr($random_image['left']) . '% ' . esc_attr($random_image['top']); ?>%;
                <?php else: ?>background-position: center;
                <?php endif; ?>background-size: cover;
                background-repeat: no-repeat;
            }
        </style>
    <?php endif; ?>
    <div class="container px-8 md:my-10">
        <div class="grid grid-cols-12 lg:gap-x-24 items-center">
            <div class="col-span-12 lg:col-span-5">
                <h1><?= esc_html($headline); ?></h1>
                <p><?= wp_kses_post($introduction_text); ?></p>

                <?php if ($buttons): ?>
                    <div class="flex lg:gap-x-4 flex-wrap">
                        <?php foreach ($buttons as $button): ?>
                            <?php if (!empty($button['button'])): ?>
                                <div class="flex-grow">
                                    <a class="mb-4 button !no-underline !text-white !w-full text-center" href="<?= esc_url($button['button']['url']); ?>" <?= cms_link_attributes($button['button']['target'] ?: '_self'); ?>>
                                        <?= esc_html($button['button']['title']); ?>
                                    </a>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

                <p><?= wp_kses_post($below_button_text); ?></p>

            </div>
            <div class="col-span-12 lg:col-span-6">
                <?php if ($random_foreground_image_url): ?>
                    <div class="random-foreground-image w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full mx-auto"></div>
                <?php else: ?>
                    <p>No foreground images available.</p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
