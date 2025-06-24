<?php
function complete_theme_add_editor_styles()
{
    add_theme_support('editor-styles');
    add_editor_style('editor-style.css');
}
add_action('after_setup_theme', 'complete_theme_add_editor_styles');
