<?php
$classes = '';
$id = '';
$acfKey = 'group_67d8825115afa';

// Get ACF Fields
$include_left_column = get_field('include_left_column');
$headline = get_field('headline');
$content = get_field('content');
$cta_link = get_field('cta_link');
$partial_row_list = get_field('partial_row_list_items');
$full_row_list = get_field('full_row_list_items');

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}
?>

<section class="why-us bg-gray-100 pt-20 pb-12 <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container mx-auto px-8">
        <?php if (get_field('main_headline')) { ?>
            <div class="py-4 text-center">
                <h2><?php echo get_field('main_headline'); ?></h2>
            </div>
        <?php } ?>
        <div class="grid grid-cols-12 md:gap-x-8 lg:gap-x-16">
            <?php if ($include_left_column): ?>
                <!-- Left Column -->
                <div class="col-span-12 lg:col-span-4 mb-8">
                    <?php if (!empty($headline)): ?>
                        <h3><?php echo esc_html($headline); ?></h3>
                    <?php endif; ?>

                    <?php if (!empty($content)): ?>
                        <p><?php echo esc_html($content); ?></p>
                    <?php endif; ?>

                    <?php if (!empty($cta_link)): ?>
                        <a href="<?php echo esc_url($cta_link['url']); ?>"
                            class="button !no-underline !text-white w-full mb-8"
                            <?php echo cms_link_attributes($cta_link['target'] ?: '_self'); ?>>
                            <?php echo esc_html($cta_link['title']); ?>
                        </a>
                    <?php endif; ?>
                </div>

                <?php if (!empty($partial_row_list)): ?>
                    <div class="col-span-12 lg:col-span-8">
                        <div class="grid grid-cols-12 lg:gap-x-8">
                            <?php foreach ($partial_row_list as $item): ?>
                                <div class="col-span-12 md:col-span-6 mb-12">
                                    <div class="w-12 h-12 items-center justify-center bg-primary rounded-full text-2xl mb-4 relative">
                                        <i class="<?php echo esc_attr($item['icon']); ?> text-white top-1/2 left-1/2 absolute -translate-y-1/2 -translate-x-1/2" aria-hidden="true"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-bold text-secondary tracking-[1px] uppercase"><?php echo esc_html($item['headline']); ?></h3>
                                        <p class="text-gray-700"><?php echo esc_html($item['content']); ?></p>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                <?php endif; ?>


            <?php else: ?>
                <!-- Full Row Items -->

                <?php if (!empty($full_row_list)): ?>
                    <?php foreach ($full_row_list as $item): ?>
                        <div class="col-span-12 md:col-span-6 lg:col-span-4 gap-x-8 mb-12">
                            <div class="w-12 h-12 items-center justify-center bg-primary rounded-full text-2xl mb-2 relative">
                                <i class="<?php echo esc_attr($item['icon']); ?> text-white top-1/2 left-1/2 absolute -translate-y-1/2 -translate-x-1/2" aria-hidden="true"></i>
                            </div>
                            <div>
                                <h3 class="text-lg text-secondary tracking-[1px] font-bold uppercase"><?php echo esc_html($item['headline']); ?></h3>
                                <p class="text-gray-700"><?php echo esc_html($item['content']); ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>

            <?php endif; ?>
        </div><!-- end grid -->
    </div><!-- end container -->
</section>