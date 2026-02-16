<?php
$classes = '';
$id = '';
$acfKey = 'group_67c9c0a9e15ed';

// Get ACF fields
$headline = get_field('headline') ?: '';
$description = get_field('description') ?: '';
$lead_path_form = get_field('lead_path_entry_form');
$lead_path_entry_headline = get_field('lead_path_entry_headline');
$overlap = get_field('overlap_previous_block');
$corners = get_field('corners');


if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id=%s', $block['anchor']);
}
?>

<section class="apply-online <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="<?php if ($overlap) { ?>-mt-20 z-20 relative<?php } ?> sm:container bg-grey px-8 py-10 md:p-16 <?php if ($corners) { ?>sm:rounded-2xl<?php } ?>">
        <div class="grid grid-cols-12 md:gap-x-8 lg:gap-x-16">
            <div class="col-span-12 md:col-span-6 lg:col-span-7">
                <?php if ($headline): ?>
                    <h2><?php echo esc_html($headline); ?></h2>
                <?php endif; ?>

                <?php if ($description): ?>
                    <div class="description bold-links">
                        <?php echo wp_kses_post($description); ?>
                    </div>
                <?php endif; ?>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-5 mt-8 md:mt-0">
                <?php if (!empty($lead_path_entry_headline)): ?>
                    <h3><?php echo wp_kses_post($lead_path_entry_headline); ?></h3>
                <?php endif; ?>
                <?php if (!empty($lead_path_form)): ?>
                    <div class="lead-form">
                        <?php gravity_form($lead_path_form['id'], false, false, false, null, true); ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>