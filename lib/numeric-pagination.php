<?php

/**
 * Display numeric pagination for WordPress pages.
 *
 * This function generates a numeric pagination bar for navigating through pages of posts.
 *
 * @param int|string $pages (Optional) The total number of pages or leave empty to use the global $wp_query.
 * @param int $range (Optional) The number of page links to show on each side of the current page.
 */
function pagination($pages = "", $range = 4)
{
    $showitems = $range * 2 + 1;

    global $paged;
    if (empty($paged)) {
        $paged = 1;
    }

    if ($pages == "") {
        global $wp_query;
        $pages = $wp_query->max_num_pages;
        if (!$pages) {
            $pages = 1;
        }
    }

    if (1 != $pages) {
        echo "<div class=\"pagination\"><span>Page " .
            $paged .
            " of " .
            $pages .
            "</span>";
        if ($paged > 2 && $paged > $range + 1 && $showitems < $pages) {
            echo "<a href='" . get_pagenum_link(1) . "'>&laquo; First</a>";
        }
        if ($paged > 1 && $showitems < $pages) {
            echo "<a href='" .
                get_pagenum_link($paged - 1) .
                "'>&lsaquo; Previous</a>";
        }

        for ($i = 1; $i <= $pages; $i++) {
            if (
                1 != $pages &&
                (!($i >= $paged + $range + 1 || $i <= $paged - $range - 1) ||
                    $pages <= $showitems)
            ) {
                echo $paged == $i
                    ? "<span class=\"current\">" . $i . "</span>"
                    : "<a href='" .
                    get_pagenum_link($i) .
                    "' class=\"inactive\">" .
                    $i .
                    "</a>";
            }
        }

        if ($paged < $pages && $showitems < $pages) {
            echo "<a href=\"" .
                get_pagenum_link($paged + 1) .
                "\">Next &rsaquo;</a>";
        }
        if (
            $paged < $pages - 1 &&
            $paged + $range - 1 < $pages &&
            $showitems < $pages
        ) {
            echo "<a href='" . get_pagenum_link($pages) . "'>Last &raquo;</a>";
        }
        echo "</div>\n";
    }
}
