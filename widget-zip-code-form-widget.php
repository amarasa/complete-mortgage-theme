<?php
$headline = get_field('headline', $acfw);
$subheadline = get_field('subheadline', $acfw);
$gravity_form_or_button = get_field('gravity_form_or_button', $acfw);
$gravity_form = get_field('gravity_form', $acfw);
$zip_code_form_or_button_widget_button = get_field('zip_code_form_or_button_widget_button', $acfw);
$after_form_or_button_text = get_field('after_form_or_button_text', $acfw);
?>

<div class="zip-code-form-or-button-widget bg-grey pt-8 pb-6 px-10 mb-5">
    <?php if ($headline) { ?>
        <h4 class="mb-2"><?php echo $headline; ?></h4>
    <?php } ?>
    <?php if ($subheadline) { ?>
        <h5 class="text-xl text-[#515151]"><?php echo $subheadline; ?></h5>
    <?php } ?>
    <div class="mt-5">
        <?php if ($gravity_form_or_button == true) { ?>
            <?php if ($zip_code_form_or_button_widget_button) { ?>
                <a class="button w-full" href="<?php echo $zip_code_form_or_button_widget_button['url']; ?>" target="<?php echo $zip_code_form_or_button_widget_button['target']; ?>"><?php echo $zip_code_form_or_button_widget_button['title']; ?></a>
            <?php } ?>
        <?php } else { ?>
            <?php echo do_shortcode('[gravityform id=' . $gravity_form . ' ajax="true" description="false" title="false"]'); ?>
        <?php } ?>
    </div>
    <?php if ($after_form_or_button_text) { ?>
        <div class="text-base">
            <?php echo $after_form_or_button_text; ?>
        </div>
    <?php } ?>
</div>