<?php $widget_button = get_field('widget_button', $acfw); ?>
<?php if ($widget_button) { ?>
    <div class="mb-5">
        <a class="button w-full" href="<?php echo $widget_button['url']; ?>" target="<?php echo $widget_button['target']; ?>"><?php echo $widget_button['title']; ?></a>
    </div>
<?php } ?>