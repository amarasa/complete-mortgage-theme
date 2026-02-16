<?php
$classes = '';
$id = '';
$acfKey = 'group_67dc00d2b6ff3';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

$headline = get_field('headline');
$content = get_field('content');
$cta_button = get_field('cta_button');

// Get the repeater field "states_selector"
$states_selector = get_field('states_selector');
$highlighted_states = array();
if ($states_selector) {
    foreach ($states_selector as $row) {
        if (!empty($row['state'])) {
            $highlighted_states[] = $row['state'];
        }
    }
}
// Convert the PHP array into a JS array.
$js_states = wp_json_encode($highlighted_states);
?>
<section class="interactive-map<?php echo esc_attr($classes); ?> md:pb-10" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>" data-highlighted-states="<?php echo esc_attr($js_states); ?>">
    <div class="container px-8">
        <?php $display_style = get_field('display_style');
        if ($display_style) { ?>
            <h2><?= esc_html($headline); ?></h2>
            <div class="grid grid-cols-12 lg:gap-x-8 items-center">
                <div class="col-span-12 lg:col-span-7 xl:col-span-6 mb-8">
                    <?php if ($content) {
                        echo $content;
                    }
                    ?>

                    <?php if ($cta_button) { ?>
                        <a href="<?php echo esc_url($cta_button['url']); ?>" <?php echo cms_link_attributes($cta_button['target'] ?? '_self'); ?> class="button bg-secondary"><?php echo esc_html($cta_button['title']); ?></a>
                    <?php } ?>
                </div>
                <div class="col-span-12 lg:col-span-5 xl:col-span-6">
                <?php } ?>
                <div class="map-container">
                    <div id="map" class="w-full"></div>
                </div>
                <?php if ($display_style) { ?>
                </div>
            </div>
        <?php } ?>
    </div>
</section>