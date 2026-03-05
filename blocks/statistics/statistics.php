<?php
$classes = '';
$id = '';
$acfKey = 'group_67cf87bf5c41e';

// Get ACF fields
$headline = get_field('headline') ?: '';
$statistics = get_field('statistics') ?: [];
$animation_duration = get_field('seconds_to_animate') ?: 2; // Default to 2 seconds
$cta_link = get_field('cta_link');

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// Extract numeric values along with prefixes and suffixes for JavaScript
$stats_data = [];

foreach ($statistics as $index => $stat) {
    $big_stat = $stat['big_stat'];
    // Use regex to capture: prefix, numeric value, and suffix
    preg_match('/^([^0-9]*)([\d,.]+)(.*)$/', $big_stat, $matches);

    $prefix = isset($matches[1]) ? $matches[1] : '';
    $number_str = isset($matches[2]) ? $matches[2] : '';
    $suffix = isset($matches[3]) ? $matches[3] : '';
    $number = floatval(str_replace(',', '', $number_str)); // Convert numeric part to float

    $stats_data[] = [
        'id'       => "stat-$index",
        'number'   => $number,
        'prefix'   => $prefix,
        'suffix'   => $suffix,
        'duration' => $animation_duration * 1000, // Convert seconds to milliseconds
    ];
}
?>

<section class="statistics <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>" data-stats-config="<?php echo esc_attr(wp_json_encode($stats_data)); ?>">
    <div class="container px-8">
        <?php if ($headline): ?>
            <h2 class="text-center mb-12"><?php echo esc_html($headline); ?></h2>
        <?php endif; ?>

        <div class="grid grid-cols-12 md:gap-x-8">
            <?php
            $stats_count = count($statistics); // Count the number of statistics

            $col_span_classes = [
                3 => 'md:col-span-4',
                2 => 'md:col-span-6',
            ];

            foreach ($statistics as $index => $stat):
                $col_class = $col_span_classes[$stats_count] ?? 'md:col-span-12'; // Default to full width
            ?>
                <div class="col-span-12 <?php echo esc_attr($col_class); ?> mb-12 last:mb-0">
                    <div class="stat-item text-center">
                        <div class="big-stat text-secondary text-4xl md:text-6xl mb-5" id="stat-<?php echo esc_attr($index); ?>" data-animated="false"><?php echo esc_html($stat['big_stat'] ?? '0'); ?></div>
                        <div class="sub-stat font-normal"><?php echo esc_html($stat['sub_stat'] ?? ''); ?></div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
        <?php if ($cta_link) { ?>
            <div class="text-center mt-4">
                <a href="<?php echo esc_url($cta_link['url']); ?>" <?php echo cms_link_attributes($cta_link['target']); ?> class="arrow-link mx-auto inline-block font-semibold text-secondary hover:!text-primary transition-all duration-300 ease-in-out"><?php echo esc_html($cta_link['title']); ?></a>
            </div>
        <?php } ?>
    </div>
</section>
