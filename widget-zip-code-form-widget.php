<?php $title = get_field('title', $acfw);
$subtitle = get_field('sub_title', $acfw);
$display_type = get_field('display_type', $acfw);
$gravity_form_id = get_field('gravity_form', $acfw);
$button = get_field('button', $acfw);
$after_form_text = get_field('after_form_text', $acfw);
?>
<div class="cms-zip-code-widget bg-[#eeeeef] pt-8 pb-6 px-10 mb-5">
    <?php if ($title): ?>
        <h4 class="text-2xl mb-2"><?php echo esc_html($title); ?></h4>
    <?php endif; ?>

    <?php if ($subtitle): ?>
        <h5 class="text-xl text-[#515151] mb-5"><?php echo esc_html($subtitle); ?></h5>
    <?php endif; ?>

    <?php if ($display_type === 'gravityform'): ?>
        <?php if ($gravity_form_id): ?>
            <?php echo do_shortcode('[gravityform id="' . $gravity_form_id . '" title="false" description="false" ajax="true"]'); ?>
        <?php endif; ?>
    <?php elseif ($display_type === 'button'): ?>
        <a
            href="<?php echo $button['url']; ?>"
            target="<?php echo $button['target']; ?>"
            class="button w-full">
            <?php echo $button['title']; ?>
        </a>
    <?php endif; ?>

    <?php if ($after_form_text): ?>
        <div class="widget-after-form-text text-base mt-4"><?php echo $after_form_text; ?></div>
    <?php endif; ?>
</div>