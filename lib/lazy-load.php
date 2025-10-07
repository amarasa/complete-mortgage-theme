<?php

/**
 * Force native lazy‐loading on all attachment images.
 */
add_filter('wp_get_attachment_image_attributes', 'rr_force_lazy_loading', 10, 3);
function rr_force_lazy_loading($attr, $attachment, $size)
{
    // Don’t override if it’s already set (e.g. your hero img explicitly uses eager)
    if (empty($attr['loading'])) {
        $attr['loading'] = 'lazy';
    }
    return $attr;
}


/**
 * Add loading="lazy" to any <img> in post content.
 */
add_filter('the_content', 'rr_lazyload_content_imgs', 99);
function rr_lazyload_content_imgs($content)
{
    return preg_replace_callback(
        '/<img\s+[^>]*>/i',
        function ($matches) {
            $img = $matches[0];
            if (false === stripos($img, 'loading=')) {
                // inject right after <img
                $img = str_ireplace('<img', '<img loading="lazy"', $img);
            }
            return $img;
        },
        $content
    );
}
