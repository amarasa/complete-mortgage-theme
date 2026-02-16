<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id=%s', $block['anchor']);
}

$headline = get_field('headline');
$description = get_field('description');
$html_content = get_field('html_content');
?>
<style>
    ul.circle-checklist li {
        list-style: none;
    }

    .circle-checklist li::marker {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>');
        width: 20px;
        height: 20px;
    }
</style>
<section class="content-with-list-left--html-block-right<?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="container px-8">
        <div class="grid grid-cols-12 items-center md:gap-x-8">
            <div class="col-span-12 lg:col-span-6 mb-4">
                <?php if ($headline) { ?>
                    <h2><?php echo $headline; ?></h2>
                <?php } ?>
                <?php if ($description) { ?>
                    <p class="mb-8"><?php echo $description; ?></p>
                <?php } ?>
                <?php

                // Check rows exists.
                if (have_rows('list_items')):
                ?>
                    <ul class="circle-checklist space-y-4 ml-0">
                        <?php while (have_rows('list_items')) : the_row(); ?>
                            <li class="text-xl flex items-start gap-4">
                                <svg class="w-6 h-6 text-secondary flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                                </svg>
                                <span><?php echo get_sub_field('list_item'); ?></span>
                            </li>
                        <?php endwhile; ?>
                    </ul>

                <?php endif; ?>
            </div>
            <div class="col-span-12 lg:col-span-6">
                <?php if ($html_content) { ?>
                    <div class="shadow-lg p-8">
                        <?php echo $html_content; ?>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</section>