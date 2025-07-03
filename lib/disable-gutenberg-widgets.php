<?php
function disable_gutenberg_widgets()
{
    remove_theme_support('widgets-block-editor');
}
add_action('after_setup_theme', 'disable_gutenberg_widgets');
