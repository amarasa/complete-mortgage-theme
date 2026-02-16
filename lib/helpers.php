<?php
/**
 * SEO and Security Helper Functions
 *
 * Reusable functions for link security, image optimization,
 * and structured data output.
 *
 * All functions wrapped in function_exists() so the theme can
 * coexist with the plugin until it is deactivated.
 *
 * @package Complete_Mortgage_Theme
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('cms_link_attributes')) {
    function cms_link_attributes($target = '_self') {
        $attrs = 'target="' . esc_attr($target) . '"';

        if ($target === '_blank') {
            $attrs .= ' rel="noopener noreferrer"';
        }

        return $attrs;
    }
}

if (!function_exists('cms_seo_image')) {
    function cms_seo_image($image_id, $alt_text, $size = 'large', $classes = '', $priority = false, $sizes = '(max-width: 768px) 100vw, 50vw') {
        if (!$image_id) {
            return '';
        }

        $attrs = [
            'class'    => $classes,
            'alt'      => $alt_text,
            'loading'  => $priority ? 'eager' : 'lazy',
            'decoding' => 'async',
            'sizes'    => $sizes
        ];

        if ($priority) {
            $attrs['fetchpriority'] = 'high';
        }

        return wp_get_attachment_image($image_id, $size, false, $attrs);
    }
}

if (!function_exists('cms_responsive_picture')) {
    function cms_responsive_picture($mobile_src, $desktop_src, $alt_text, $classes = '', $priority = true) {
        if (empty($mobile_src) && empty($desktop_src)) {
            return '';
        }

        $desktop_src = $desktop_src ?: $mobile_src;
        $mobile_src = $mobile_src ?: $desktop_src;

        $loading = $priority ? 'eager' : 'lazy';
        $fetchpriority = $priority ? ' fetchpriority="high"' : '';

        $html = '<picture class="' . esc_attr($classes) . '">';

        if ($desktop_src !== $mobile_src) {
            $html .= '<source media="(min-width: 768px)" srcset="' . esc_url($desktop_src) . '">';
        }

        $html .= '<img src="' . esc_url($mobile_src) . '"';
        $html .= ' alt="' . esc_attr($alt_text) . '"';
        $html .= ' class="w-full h-full object-cover"';
        $html .= ' loading="' . esc_attr($loading) . '"';
        $html .= ' decoding="async"';
        $html .= $fetchpriority;
        $html .= '>';

        $html .= '</picture>';

        return $html;
    }
}

if (!function_exists('cms_output_schema')) {
    function cms_output_schema($schema, $pretty = true) {
        if (empty($schema)) {
            return;
        }

        $schema = cms_filter_empty_schema($schema);

        if (empty($schema)) {
            return;
        }

        $flags = JSON_UNESCAPED_SLASHES;
        if ($pretty) {
            $flags |= JSON_PRETTY_PRINT;
        }

        echo '<script type="application/ld+json">';
        echo wp_json_encode($schema, $flags);
        echo '</script>';
    }
}

if (!function_exists('cms_filter_empty_schema')) {
    function cms_filter_empty_schema($array) {
        if (!is_array($array)) {
            return $array;
        }

        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $array[$key] = cms_filter_empty_schema($value);
                if (empty($array[$key])) {
                    unset($array[$key]);
                }
            } elseif (empty($value) && $value !== 0 && $value !== '0') {
                unset($array[$key]);
            }
        }

        return $array;
    }
}

if (!function_exists('cms_get_brand_font_url')) {
    function cms_get_brand_font_url() {
        $upload_dir = wp_upload_dir();
        $brand_file = $upload_dir['basedir'] . '/brand.css';

        if (!file_exists($brand_file)) {
            return '';
        }

        $contents = file_get_contents($brand_file);

        if (preg_match('/@brand-font-url:\s*(.+?)\s*\*\//', $contents, $matches)) {
            return trim($matches[1]);
        }

        return '';
    }
}

if (!function_exists('cms_add_preconnect_hints')) {
    function cms_add_preconnect_hints() {
        $post = get_post();
        if (!$post) {
            return;
        }

        $content = $post->post_content;
        $hints = [];

        if (has_block('acf/cms-video', $content) || strpos($content, 'lite-youtube') !== false) {
            $hints[] = 'https://www.youtube-nocookie.com';
            $hints[] = 'https://i.ytimg.com';
        }

        if (has_block('acf/cms-interactive-map', $content)) {
            $hints[] = 'https://cdn.jsdelivr.net';
        }

        foreach ($hints as $origin) {
            echo '<link rel="preconnect" href="' . esc_url($origin) . '" crossorigin>' . "\n";
        }
    }
    add_action('wp_head', 'cms_add_preconnect_hints', 1);
}
