<?php
$classes    = '';
$id         = '';
$acfKey     = 'group_67c9ba97ad294';

$display_style = get_field('display_style');
$background_color = get_field('background_color');
$headline = get_field('headline');
$description = get_field('description');
$list_items = get_field('list_items');
$left_cta = get_field('optional_buttonleft_column_cta_button');
$right_cta = get_field('right_column_cta_button');
$background_switch = get_field('background_color_switch');
$extra_spacing = get_field('extra_spacing');
$sub_headline = get_field('sub_headline');
$list_type = get_field('list_type');
$display_numbers = get_field('numbers_displsy');

if (!empty($block['className'])) {
    $classes .= ' ' . $block['className'];
}
if (!empty($block['anchor'])) {
    $id = ' id="' . esc_attr($block['anchor']) . '"';
}

if ($extra_spacing) {
    $space = 'pb-40';
} elseif ($display_style) {
    $space = 'pb-12';
} else {
    $space = 'pb-20';
}

$section_classes = "how-it-works pt-20 $space $classes";
if (!$background_switch) {
    $section_classes .= " text-white bg-primary";
}

$headline_class = !$background_switch ? 'text-white' : '';
$icon_class     = !$background_switch ? 'bg-white text-primary' : 'bg-primary text-white';
$button_class   = !$background_switch ? 'button-white !no-underline' : '';
?>
<section class="<?php echo esc_attr($section_classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container px-8">
        <?php if ($display_style): ?>
            <?php if ($headline): ?>
                <h2 class="max-w-lg mx-auto text-center mt-0 mb-8 <?php echo esc_attr($headline_class); ?>">
                    <?php echo esc_html($headline); ?>
                </h2>
            <?php endif; ?>

            <?php if ($description): ?>
                <div class="max-w-[1024px] mx-auto text-center mb-16">
                    <?php echo $description; ?>
                </div>
            <?php endif; ?>

            <!-- One Column Layout -->
            <?php if (!empty($list_items)): ?>
                <div class="flex flex-wrap justify-between gap-x-4 gap-y-4">
                    <?php $pos = 1; ?>
                    <?php foreach ($list_items as $item): ?>
                        <div class="text-center mb-8 md:w-1/3 lg:w-1/4">
                            <?php if ($display_numbers) { ?>
                                <div class="<?php echo esc_attr($icon_class); ?> font-bold w-[38px] h-[38px] rounded-full relative mx-auto mb-4">
                                    <span class="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                        <span class="<?php if ($background_switch) { ?>text-white<?php } else { ?>text-secondary<?php } ?>"><?php echo $pos++; ?></span>
                                    </span>
                                </div>
                            <?php } ?>
                            <div>
                                <?php echo esc_html($item['list_item']); ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

            <div class="cta-buttons text-center">
                <?php if ($left_cta): ?>
                    <a href="<?php echo esc_url($left_cta['url']); ?>" class="button <?php echo esc_attr($button_class); ?>" <?php echo cms_link_attributes($left_cta['target'] ?: '_self'); ?>>
                        <?php echo esc_html($left_cta['title']); ?>
                    </a>
                <?php endif; ?>
            </div>
        <?php else: ?>
            <!-- Two Column Layout here -->
            <div class="grid grid-cols-12 lg:gap-x-16">
                <div class="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
                    <h2 class="<?php echo $headline_class; ?>"><?php echo esc_html($headline); ?></h2>

                    <div class="mb-8"><?php echo $description; ?></div>

                    <?php if ($left_cta): ?>
                        <a href="<?php echo esc_url($left_cta['url']); ?>" class="button <?php echo esc_attr($button_class); ?>" <?php echo cms_link_attributes($left_cta['target'] ?: '_self'); ?>>
                            <?php echo esc_html($left_cta['title']); ?>
                        </a>
                    <?php endif; ?>
                </div>
                <div class="col-span-1 hidden">
                    <div class="vertical-divider h-[100%] w-[1px] bg-[#ededed] mx-auto hidden md:block"></div>
                </div>
                <div class="col-span-12 lg:col-span-7">
                    <p class="<?php echo $headline_class; ?> font-bold text-xl mt-0"><?php echo esc_html($sub_headline); ?></p>

                    <?php if (!empty($list_items)): ?>
                        <div class="mb-8">
                            <?php $pos = 1; ?>
                            <?php foreach ($list_items as $item): ?>
                                <div class="flex gap-x-4 mb-8 last:mb-0">
                                    <div class="checkmark-number">
                                        <?php
                                        if ($list_type == 1) { ?>
                                            <div class="<?php echo esc_attr($icon_class); ?> font-bold w-[28px] h-[28px] mb-2 rounded-full flex justify-center mr-4">
                                                <?php echo $pos++; ?>
                                            </div>
                                        <?php } else { ?>
                                            <i class="fa fa-check <?php if ($background_switch) { ?>text-secondary<?php } ?>"></i>
                                        <?php } ?>
                                    </div>
                                    <div class="checkmark-number-content">
                                        <?php echo esc_html($item['list_item']); ?>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>


                    <div class="cta-buttons lg:ml-8">
                        <?php if ($right_cta): ?>
                            <a href="<?php echo esc_url($right_cta['url']); ?>" class="button <?php echo esc_attr($button_class); ?>" <?php echo cms_link_attributes($right_cta['target'] ?: '_self'); ?>>
                                <?php echo esc_html($right_cta['title']); ?>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
    </div>
</section>