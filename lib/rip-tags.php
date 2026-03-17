<?php

/**
 * Remove HTML tags, control characters, and multiple spaces from a given string.
 *
 * This function takes an input string and performs several operations to clean and modify it:
 * 1. Removes all HTML tags and their contents.
 * 2. Replaces specific control characters (such as \r, \n, \t, and :) with spaces.
 * 3. Reduces consecutive spaces to a single space.
 * 4. Trims any leading or trailing spaces.
 *
 * @param string $string The input string to be processed.
 *
 * @return string The cleaned and sanitized version of the input string.
 */
function rip_tags($string)
{
    // Remove HTML tags using regular expression.
    $string = preg_replace('/<[^>]*>/', ' ', $string);

    // Remove control characters by replacing them with spaces.
    $string = str_replace("\r", '', $string);
    $string = str_replace("\n", ' ', $string);
    $string = str_replace("\t", ' ', $string);
    $string = str_replace(":", ' ', $string);

    // Remove multiple consecutive spaces and trim the result.
    $string = trim(preg_replace('/ {2,}/', ' ', $string));

    return $string;
}
