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
$has_any_cta = !empty($left_cta) || !empty($right_cta);

if (!empty($block['className'])) {
    $classes .= ' ' . esc_attr($block['className']);
}
if (!empty($block['anchor'])) {
    $id = ' id="' . esc_attr($block['anchor']) . '"';
}

$space = '';

$section_classes = "how-it-works px-8 $space $classes";
if (!$has_any_cta) {
    $section_classes .= " how-it-works--no-cta";
}
if (!$background_switch) {
    $section_classes .= " text-white bg-primary";
}

$headline_class = !$background_switch ? '!text-white' : '';
$icon_class     = !$background_switch ? 'bg-white text-primary' : 'bg-primary text-white';
$button_class   = !$background_switch ? 'button-white !no-underline' : '';
?>
<section class="<?php echo esc_attr($section_classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container">
        <?php if ($display_style): ?>
            <?php if ($headline): ?>
                <h2 class="max-w-lg mx-auto text-center mt-0 mb-8 <?php echo esc_attr($headline_class); ?>">
                    <?php echo esc_html($headline); ?>
                </h2>
            <?php endif; ?>

            <?php if ($description): ?>
                <div class="how-it-works__copy max-w-[1024px] mx-auto text-center mb-16">
                    <?php echo wp_kses_post($description); ?>
                </div>
            <?php endif; ?>

            <!-- One Column Layout -->
            <?php if (!empty($list_items)): ?>
                <div class="how-it-works__list how-it-works__list--stacked wysiwyg max-w-[1024px] mx-auto">
                    <?php echo wp_kses_post($list_items); ?>
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
                    <h2 class="<?php echo esc_attr($headline_class); ?>"><?php echo esc_html($headline); ?></h2>

                    <div class="how-it-works__copy mb-8"><?php echo wp_kses_post($description); ?></div>

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
                    <p class="<?php echo esc_attr($headline_class); ?> font-bold text-xl mt-0"><?php echo esc_html($sub_headline); ?></p>

                    <?php if (!empty($list_items)): ?>
                        <div class="how-it-works__list how-it-works__list--split wysiwyg mb-8">
                            <?php echo wp_kses_post($list_items); ?>
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
