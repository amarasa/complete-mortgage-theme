<?php
$facebook_url = get_field('facebook_url', $acfw);
$twitter_x_url = get_field('twitter_x_url', $acfw);
$instagram_url = get_field('instagram_url', $acfw);
$linkedin_url = get_field('linkedin_url', $acfw);
$youtube_url = get_field('youtube_url', $acfw);
?>

<div class="social-media-widget flex gap-x-4 items-center">
    <?php if ($facebook_url) { ?>
        <a href="<?php echo $facebook_url; ?>" target="_blank"><i class="fa-brands fa-facebook-f text-white transition-all duration-300 ease-in-out hover:opacity-70 text-[16px]"><span class="sr-only">Follow on Facebook</span></i></a>
    <?php } ?>
    <?php if ($twitter_x_url) { ?>
        <a href="<?php echo $twitter_x_url; ?>" target="_blank"><i class="fa-brands fa-x-twitter text-white transition-all duration-300 ease-in-out hover:opacity-70"><span class="sr-only">Follow on Twitter (X)</span></i></a>
    <?php } ?>
    <?php if ($instagram_url) { ?>
        <a href="<?php echo $instagram_url; ?>" target="_blank"><i class="fa-brands fa-instagram text-white transition-all duration-300 ease-in-out hover:opacity-70"><span class="sr-only">Follow on Instagram</span></i></a>
    <?php } ?>
    <?php if ($linkedin_url) { ?>
        <a href="<?php echo $linkedin_url; ?>" target="_blank"><i class="fa-brands fa-linkedin text-white transition-all duration-300 ease-in-out hover:opacity-70"><span class="sr-only">Follow on LinkedIn</span></i></a>
    <?php } ?>
    <?php if ($youtube_url) { ?>
        <a href="<?php echo $youtube_url; ?>" target="_blank"><i class="fa-brands fa-youtube text-white transition-all duration-300 ease-in-out hover:opacity-70"><span class="sr-only">Follow on YouTube</span></i></a>
    <?php } ?>
</div>