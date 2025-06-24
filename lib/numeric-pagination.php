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
        echo "<div class=\"pagination flex gap-x-2 mt-8 \">";
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
                    ? "<span class=\"current relative inline-flex items-center rounded-md border border-gray-300 bg-secondary px-4 py-2 text-sm font-bold text-white hover:bg-gray-50 \">" . $i . "</span>"
                    : "<a href='" .
                    get_pagenum_link($i) .
                    "' class=\"relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-bold text-secondary hover:bg-gray-100 hover:text-secondary inactive\">" .
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
