<?php
$classes = !empty($block['className']) ? ' ' . esc_attr($block['className']) : '';
$id = !empty($block['anchor']) ? ' id="' . esc_attr($block['anchor']) . '"' : '';
$acfKey = ''; // Set your ACF block name key if needed
?>

<!-- Shadow visibility helpers -->
<?php foreach (['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', 'none'] as $size) : ?>
    <div class="shadow-<?php echo esc_attr($size); ?> visibility-hidden"></div>
<?php endforeach; ?>

<section class="info-cards-with-icons<?php echo $classes; ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container px-8">
        <div class="flex flex-wrap gap-6 justify-center">
            <?php while (have_rows('info_cards')) : the_row(); ?>
                <?php
                $link = get_sub_field('optional_link');
                $icon = get_sub_field('icon');
                $headline = get_sub_field('headline');
                $description = get_sub_field('description');
                $hasCorners = get_field('corners');
                $shadowSize = get_field('drop_shadow_size');
                $cardClasses = 'block info-card-with-icon p-6 w-full max-w-sm relative bottom-0 duration-300 transition-all ease-in-out hover:bottom-[10px]';
                if ($hasCorners) {
                    $cardClasses .= ' rounded-xl';
                }
                if ($shadowSize) {
                    $cardClasses .= ' shadow-' . esc_attr($shadowSize);
                }
                ?>
                <?php if ($link) : ?>
                    <a href="<?php echo esc_url($link['url']); ?>" class="<?php echo $cardClasses; ?> !no-underline !font-normal">
                    <?php else : ?>
                        <div class="<?php echo $cardClasses; ?>">
                        <?php endif; ?>

                        <?php if ($icon) : ?>
                            <div class="mb-4 text-secondary text-3xl <?php echo esc_attr($icon); ?>" aria-hidden="true"></div>
                        <?php endif; ?>

                        <?php if ($headline) : ?>
                            <h3 class="mb-4 text-2xl"><?php echo esc_html($headline); ?></h3>
                        <?php endif; ?>

                        <?php if ($description) : ?>
                            <p class="!text-[rgb(81,81,81)]"><?php echo esc_html($description); ?></p>
                        <?php endif; ?>

                        <?php if ($link) : ?>
                    </a>
                <?php else : ?>
        </div>
    <?php endif; ?>
<?php endwhile; ?>
    </div>
    </div>
</section>