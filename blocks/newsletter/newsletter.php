<?php
$classes = '';
$id = '';
$acfKey = 'group_67d87cd49d94b';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

$headline = get_field('headline');
$newsletter_form = get_field('form');
?>
<section class="newsletter<?php echo esc_attr($classes); ?> bg-[#eee] pt-12 pb-16" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="container px-8">
        <?php if ($headline): ?>
            <h2><?php echo esc_html($headline); ?></h2>
        <?php endif; ?>
        <?php if (!empty($newsletter_form)): ?>
            <div class="newsletter-form">
                <?php gravity_form($newsletter_form['id'], false, false, false, null, true); ?>
            </div>
        <?php endif; ?>
    </div>
</section>
