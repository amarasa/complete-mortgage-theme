<?php
$classes = '';
$id = '';
$acfKey = 'group_67cf8d0d316ec';

// Get ACF fields
$headline = get_field('headline') ?: '';
$option_cards = get_field('option_cards') ?: [];
$card_corners = get_field('card_corners') ? 'rounded' : 'squared'; // Controls card styling

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}
?>

<section class="option-cards <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container px-8">
        <?php if ($headline): ?>
            <h2 class="lg:text-center mb-8"><?php echo esc_html($headline); ?></h2>
        <?php endif; ?>
        <?php if (get_field('description')) : ?>
            <div class="text-center mb-8">
                <?php echo wp_kses_post(get_field('description')); ?>
            </div>
        <?php endif; ?>

        <div class="grid grid-cols-12 md:gap-x-8">
            <?php
            $cardCount = count($option_cards);
            ?>

            <?php foreach ($option_cards as $card): ?>
                <div class="col-span-12 
        <?php
                if ($cardCount == 3) {
                    echo 'lg:col-span-4';
                } elseif ($cardCount == 2) {
                    echo 'lg:col-span-6';
                }
        ?>
    ">
                    <div class="card border-[1px] border-solid border-[#d8d8d8] <?php if ($card_corners) { ?>rounded-xl<?php } ?> mb-8 p-10">
                        <div class="card-icon text-secondary text-2xl"><?php echo $card['icon']; ?></div>
                        <div class="eh-card-headline">
                            <h3 class="card-headline text-2xl"><?php echo esc_html($card['headline']); ?></h3>
                        </div>
                        <div class="eh-card-content mb-5">
                            <p class="card-content mb-5"><?php echo esc_html($card['card_content']); ?></p>
                        </div>

                        <?php if (!empty($card['cta_link'])): ?>
                            <a href="<?php echo esc_url($card['cta_link']['url']); ?>" class="cta-button font-bold text-secondary hover:text-primary duration-300 ease-in-out transition-all !no-underline" <?php echo cms_link_attributes($card['cta_link']['target'] ?: '_self'); ?>>
                                <?php echo esc_html($card['cta_link']['title']); ?>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>