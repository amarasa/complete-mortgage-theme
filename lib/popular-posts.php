<?php

/**
 * Count and update the number of visits for a single post.
 *
 * This function is hooked to the "wp_head" action and counts the number of visits for a single post
 * and updates the post's custom field "my_post_viewed" to store the visit count.
 * It is typically used to track the popularity or visit count of individual posts.
 */
function count_post_visits()
{
    // Check if the current page is a single post.
    if (is_single()) {
        global $post;

        // Get the current visit count from the post's custom field "my_post_viewed."
        $views = get_post_meta($post->ID, "my_post_viewed", true);

        // If there's no existing visit count, initialize it to "1."
        if ($views == "") {
            update_post_meta($post->ID, "my_post_viewed", "1");
        } else {
            // If there's an existing count, increment it and update the custom field.
            $views_no = intval($views);
            update_post_meta($post->ID, "my_post_viewed", ++$views_no);
        }
    }
}

// Hook the count_post_visits function to the "wp_head" action.
add_action("wp_head", "count_post_visits");
