<?php
$classes = '';
$id = '';
$acfKey = 'group_67d302c4b5dda';

// Get ACF fields
$headline = get_field('headline');
$use_hyperlinks = get_field('hyperlinks_or_plain_text');
$list = get_field('list') ?: [];

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}
?>
<section class="hyper-local-seo py-10 <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="container px-8">
        <?php if ($headline): ?>
            <h2 class="font-bold text-center mb-8"><?php echo esc_html($headline); ?></h2>
        <?php endif; ?>

        <?php if (!empty($list)): ?>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center justify-items-center">
                <?php foreach ($list as $item): ?>
                    <div class="mb-4">
                        <?php if ($use_hyperlinks && !empty($item['link_item'])): ?>
                            <a href="<?php echo esc_url($item['link_item']['url']); ?>" target="<?php echo esc_attr($item['link_item']['target'] ?: '_self'); ?>" class="text-secondary !text-2xl font-bold hover:text-primary duration-300 ease-in-out transition-all !no-underline">
                                <?php echo esc_html($item['link_item']['title']); ?>
                            </a>
                        <?php else: ?>
                            <p class="font-medium"><?php echo esc_html($item['list_item']); ?></p>
                        <?php endif; ?>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php else: ?>
            <p class="text-center">No items available.</p>
        <?php endif; ?>
    </div>
</section>