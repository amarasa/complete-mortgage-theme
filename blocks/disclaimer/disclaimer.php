<?php
$classes = '';
$id = '';
$acfKey = 'group_67d878e436114';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id=%s', $block['anchor']);
}

$disclaimer = get_field("disclaimer_content");
?>
<section class="disclaimer<?php echo esc_attr($classes); ?> py-3" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <div class="disclaimer-text text-sm">
        <?= $disclaimer;  ?>
    </div>
</section>