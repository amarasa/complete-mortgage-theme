<?php
// === Accessible Social Links (functions.php) ===
// Adds aria-labels to icon-only social links across the site output.
// Paste this into your (child) theme's functions.php.

if (!defined('ABSPATH')) {
    exit;
}

add_action('template_redirect', function () {
    // Only on front-end full HTML responses
    if (is_admin() || wp_doing_ajax() || wp_is_json_request()) return;
    ob_start('kld_accessible_social_links_buffer');
});

function kld_accessible_social_links_buffer($html)
{
    if (stripos($html, '<a ') === false) return $html;

    $dom = new DOMDocument();
    libxml_use_internal_errors(true);
    $encoded = mb_convert_encoding($html, 'HTML-ENTITIES', 'UTF-8');

    // Wrap to keep DOM happy, but preserve the original HTML structure
    $dom->loadHTML(
        $encoded,
        LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
    );
    libxml_clear_errors();

    // Map known social domains to readable labels
    $domainMap = [
        'facebook.com'  => 'Facebook',
        'fb.com'        => 'Facebook',
        'instagram.com' => 'Instagram',
        'linkedin.com'  => 'LinkedIn',
        'youtube.com'   => 'YouTube',
        'youtu.be'      => 'YouTube',
        'twitter.com'   => 'Twitter',
        'x.com'         => 'X',
        'tiktok.com'    => 'TikTok',
        'pinterest.com' => 'Pinterest',
        'threads.net'   => 'Threads',
        'whatsapp.com'  => 'WhatsApp',
        'telegram.me'   => 'Telegram',
        't.me'          => 'Telegram',
    ];

    $xpath = new DOMXPath($dom);

    // If you want to scope to the footer social column only, replace '//a' with:
    // '//div[contains(@class,"footer-col-5")]//a'
    foreach ($xpath->query('//a') as $a) {
        /** @var DOMElement $a */

        // Skip links that already have an accessible name
        if ($a->hasAttribute('aria-label') || $a->hasAttribute('aria-labelledby') || $a->hasAttribute('title')) {
            continue;
        }

        // Skip if there is any visible text in the link
        $text = trim(preg_replace('/\s+/u', ' ', $a->textContent ?? ''));
        if ($text !== '') continue;

        // Check for icon-only content (common patterns)
        $hasIcon = false;
        foreach ($a->childNodes as $child) {
            if ($child instanceof DOMElement) {
                $tag = strtolower($child->tagName);
                $cls = $child->getAttribute('class');

                if (
                    $tag === 'i' ||
                    $tag === 'svg' ||
                    ($cls && preg_match('/\bfa[sbrl]?\b|\bicon\b/i', $cls))
                ) {
                    $hasIcon = true;
                    // Hide decorative icon from screen readers
                    if (!$child->hasAttribute('aria-hidden')) {
                        $child->setAttribute('aria-hidden', 'true');
                    }
                }
            }
        }
        if (!$hasIcon) continue;

        // Derive label from href domain
        $href = $a->getAttribute('href');
        if (!$href) continue;

        $host = parse_url($href, PHP_URL_HOST);
        if (!$host) continue;
        $host = strtolower($host);

        $label = null;
        foreach ($domainMap as $domain => $name) {
            if ($host === $domain || kld_str_ends_with($host, '.' . $domain)) {
                $label = $name;
                break;
            }
        }

        // Fallback: try to infer from classes like "fa-facebook"
        if (!$label) {
            $aClass = $a->getAttribute('class');
            if ($aClass && preg_match('/fa-([a-z0-9\-]+)/i', $aClass, $m)) {
                $label = ucwords(str_replace(['-', 'x'], [' ', 'X'], $m[1]));
            }
        }

        // Last resort: hostname without TLD (e.g., "facebook" from "www.facebook.com")
        if (!$label) {
            $base = preg_replace('/^www\./i', '', $host);
            $parts = explode('.', $base);
            $label = ucwords($parts[0] ?? 'Social');
        }

        $a->setAttribute('aria-label', $label);
    }

    // Return the full HTML document
    return $dom->saveHTML() ?: $html;
}

// Small polyfill/helper for older PHP versions.
if (!function_exists('kld_str_ends_with')) {
    function kld_str_ends_with($haystack, $needle)
    {
        $len = strlen($needle);
        if ($len === 0) return true;
        return substr($haystack, -$len) === $needle;
    }
}
