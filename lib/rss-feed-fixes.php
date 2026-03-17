<?php
// Strip scripts and complex HTML from RSS feeds
function clean_rss_content($content)
{
        // Remove script tags and their content
        $content = preg_replace('/<script\b[^>]*>(.*?)<\ /script>/is', '', $content);

        // Remove complex interactive elements
        $content = preg_replace('/<section[^>]*class="[^"]*frequently-asked-questions[^"]*"[^>]*>.*?<\ /section>/is', '', $content);

        return $content;
}
add_filter('the_excerpt_rss', 'clean_rss_content');
add_filter('the_content_feed', 'clean_rss_content');

// Convert HTML entities to Unicode for RSS feeds
function convert_html_entities_for_rss($content)
{
        // Decode HTML entities to actual characters
        $content = html_entity_decode($content, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        // Re-escape XML special characters
        $content = str_replace('&', '&amp;', $content);
        $content = str_replace('<', '&lt;', $content);
        $content = str_replace('>', '&gt;', $content);

        return $content;
}
add_filter('the_excerpt_rss', 'convert_html_entities_for_rss', 20);
add_filter('the_content_feed', 'convert_html_entities_for_rss', 20);
