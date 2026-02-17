<?php $widget_button = get_field('widget_button', $acfw); ?>
<?php if ($widget_button) { ?>
    <div class="mb-5">
        <a class="button w-full" href="<?php echo esc_url($widget_button['url']); ?>" <?php echo cms_link_attributes($widget_button['target'] ?: '_self'); ?>><?php echo esc_html($widget_button['title']); ?></a>
    </div>
<?php } ?>
