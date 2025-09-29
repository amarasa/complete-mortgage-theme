<?php $widget_button = get_field('button', $acfw); ?>
<?php if ($widget_button) { ?>
    <a class="button w-full block" href="<?php echo $widget_button['url']; ?>" target="<?php echo $widget_button['target']; ?>"><?php echo $widget_button['title']; ?></a>
<?php } ?>