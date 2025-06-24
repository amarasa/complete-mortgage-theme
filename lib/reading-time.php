<?php

/**
 * Calculate the estimated reading time for a WordPress post.
 *
 * This function calculates the estimated reading time for a given post based on the average reading speed of readers.
 *
 * @param int|null $postID (Optional) The ID of the post. If not provided, it will attempt to use the global $post object.
 *
 * @return int The estimated reading time in minutes.
 */
function reading_time($postID = null)
{
    // Check if $postID is not provided; if so, attempt to use the global $post object.
    if (!$postID) {
        global $post;
        $postID = $post->ID;
    }

    // Define the average words per minute for reading.
    $wordsPerMinute = 200;

    // Get the content of the post by its ID.
    $content = get_post_field("post_content", $postID);

    // Count the words in the content after stripping HTML tags.
    $word_count = str_word_count(strip_tags($content));

    // Calculate the estimated reading time in minutes by dividing the word count by words per minute.
    $readingtime = ceil($word_count / $wordsPerMinute);

    // Return the estimated reading time in minutes.
    return $readingtime;
}
