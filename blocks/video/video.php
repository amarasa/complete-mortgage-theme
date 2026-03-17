<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}
$youtube_video_id = get_field('youtube_video_id');
$video_title = get_field('video_title') ?: get_the_title();
$video_description = get_field('video_description') ?: '';
?>
<lite-youtube
    class="video <?php echo esc_attr($classes); ?>"
    videoid="<?php echo esc_attr($youtube_video_id); ?>"
    <?php echo $id; ?>
    data-block-name="<?php echo esc_attr($acfKey); ?>">
</lite-youtube>

<?php
// VideoObject Schema for SEO
if ($youtube_video_id) :
    $video_schema = [
        "@context" => "https://schema.org",
        "@type" => "VideoObject",
        "name" => $video_title,
        "description" => $video_description ?: $video_title,
        "thumbnailUrl" => "https://img.youtube.com/vi/{$youtube_video_id}/maxresdefault.jpg",
        "uploadDate" => get_the_date('c'),
        "embedUrl" => "https://www.youtube.com/embed/{$youtube_video_id}",
        "contentUrl" => "https://www.youtube.com/watch?v={$youtube_video_id}"
    ];
    // Remove empty values
    $video_schema = array_filter($video_schema);
?>
<script type="application/ld+json">
<?php echo wp_json_encode($video_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
</script>
<?php endif; ?>