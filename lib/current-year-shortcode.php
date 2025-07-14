<?php
function current_year_shortcode()
{
    $year = date('Y');
    return $year;
}
add_shortcode('year', 'current_year_shortcode');
