<?php
$classes = '';
$id = '';
$acfKey = 'group_67d878e436114';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

$disclaimer = get_field("disclaimer_content");
?>
<section class="disclaimer<?php echo esc_attr($classes); ?> py-3" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="disclaimer-text text-sm wysiwyg">
        <?= wp_kses_post($disclaimer);  ?>
    </div>
</section>