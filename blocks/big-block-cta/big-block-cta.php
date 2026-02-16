<?php
$classes = '';
$acfKey = 'group_67d2efcf1320e';
$block_id = 'big-block-cta-' . $block['id'];

// Get ACF fields
$optional_image = get_field('optional_image');
$headline = get_field('headline');
$cta_content = get_field('cta_content');
$cta_button = get_field('cta_button');
$edge_to_edge = get_field('edge_to_edge');
$corners = get_field('corners') ? 'xl:rounded-xl' : ''; // Controls border-radius

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $block_id = $block['anchor'];
}
?>
<section id="<?php echo esc_attr($block_id); ?>" class="big-block-cta overflow-hidden relative <?php echo esc_attr($edge_to_edge ? 'w-full' : 'md:container mx-auto'); ?> <?php echo esc_attr(!$edge_to_edge ? $corners : ''); ?> p-12 bg-primary text-white text-center" data-block-name="<?php echo $acfKey; ?>">
    <?php if ($optional_image): ?>
        <?php echo wp_get_attachment_image($optional_image['ID'], 'full', false, [
            'class' => 'absolute inset-0 w-full !h-full object-cover object-center ' . esc_attr($corners),
            'sizes' => '100vw',
            'loading' => 'lazy',
            'decoding' => 'async',
        ]); ?>
        <div class="big-block-cta-image-overlay absolute inset-0 bg-black/50 <?php echo esc_attr($corners); ?>"></div>
    <?php endif; ?>
    <div class="big-block-cta-content relative z-20">
        <h2 class="font-bold !text-white"><?php echo esc_html($headline); ?></h2>

        <?php if ($cta_content): ?>
            <p class="text-lg mt-4 max-w-[600px] mx-auto"><?php echo esc_html($cta_content); ?></p>
        <?php endif; ?>

        <?php if (!empty($cta_button)): ?>
            <a href="<?php echo esc_url($cta_button['url']); ?>" class="button !bg-white !text-secondary hover:!bg-secondary hover:!text-white !no-underline" <?php echo cms_link_attributes($cta_button['target'] ?: '_self'); ?>>
                <?php echo esc_html($cta_button['title']); ?>
            </a>
        <?php endif; ?>
    </div>
</section>