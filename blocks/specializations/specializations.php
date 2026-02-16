<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id=%s', $block['anchor']);
}

?>
<?php
// Get ACF fields
$background_image = get_field('background_image');
$edge_to_edge = get_field('edge_to_edge');
$corners = get_field('corners') ? 'md:rounded-xl' : ''; // Controls border-radius
$extend_container = get_field('extend_container'); // This makes the image stretch full width but not edge to edge.  64px padding left and right.
$headline = get_field('headline');
$description = get_field('description');
$specializations = get_field('specializations');
$button_1 = get_field('button_1');
$button_2 = get_field('button_2');
$turn_on_gradient_overlay = get_field('turn_on_overlay');
$top_gradient_overlay_color = get_field('top_gradient_overlay_color');
$bottom_gradient_overlay_color = get_field('bottom_gradient_overlay_color');

// Debug: Uncomment the next line to see ACF field values
// echo "<!-- Debug: turn_on_overlay: " . var_export($turn_on_gradient_overlay, true) . ", top_color: " . var_export($top_gradient_overlay_color, true) . ", bottom_color: " . var_export($bottom_gradient_overlay_color, true) . " -->";

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

// Handle FocusPoint Image
$background_image_url = '';
$background_position = '50% 50%'; // Default to center

if (!empty($background_image) && is_array($background_image)) {
    $background_image_src = wp_get_attachment_image_src($background_image['id'], 'large');
    $background_image_url = $background_image_src[0] ?? '';

    if (!empty($background_image['focus_point'])) {
        $focus_x = isset($background_image['focus_point']['left']) ? $background_image['focus_point']['left'] * 100 : 50;
        $focus_y = isset($background_image['focus_point']['top']) ? $background_image['focus_point']['top'] * 100 : 50;
        $background_position = "{$focus_x}% {$focus_y}%";
    }
}
?>

<section class="specializations relative py-20 <?php echo esc_attr($edge_to_edge ? 'w-full px-0' : 'xl:container'); ?> <?php echo esc_attr(!$edge_to_edge ? $corners : ''); ?> <?php if ($extend_container) { ?>extend-container<?php } ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>"
    style="background-image: url('<?php echo esc_url($background_image_url); ?>'); background-position: <?php echo esc_attr($background_position); ?>; background-size: cover !important;">

    <!-- Default overlay for content readability -->
    <div class="overlay bg-black/50 h-full w-full absolute top-0 z-10 <?php if ($corners) { ?>md:rounded-xl<?php } ?>"></div>

    <!-- Gradient overlay when enabled -->
    <?php if ($turn_on_gradient_overlay && $top_gradient_overlay_color && $bottom_gradient_overlay_color) { ?>
        <style>
            .gradient-overlay-<?php echo esc_attr($block['id']); ?> {
                background: linear-gradient(to bottom, <?php echo esc_attr($top_gradient_overlay_color); ?>, <?php echo esc_attr($bottom_gradient_overlay_color); ?>);
            }
        </style>
        <div class="gradient-overlay-<?php echo esc_attr($block['id']); ?> h-full w-full absolute top-0 z-20 <?php if ($corners) { ?>md:rounded-xl<?php } ?>"></div>
    <?php } ?>

    <div class="relative z-30">
        <div class="px-10">
            <?php if ($headline) { ?>
                <h2 class="text-white text-center"><?php echo $headline; ?></h2>
            <?php } ?>
            <?php if ($description) { ?>
                <p class="max-w-[576px] mx-auto text-white mb-12"><?php echo $description; ?></p>
            <?php } ?>
            <?php // Check rows exists.
            if (have_rows('specializations')): ?>
                <div class="container">
                    <div class="flex flex-wrap gap-8 mb-12">
                        <?php while (have_rows('specializations')) : the_row(); ?>
                            <div class="flex w-full sm:w-[48%] md:w-[30%] lg:w-[23%] gap-2">
                                <?php $link = get_sub_field('link'); ?>
                                <?php if ($link) { ?>
                                    <a href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>" class="!no-underline duration-300 transition-opacity ease-in-out hover:opacity-80">
                                    <?php } ?>
                                    <span class="!no-underline text-white text-2xl <?php echo get_sub_field('icon'); ?>"></span>
                                    <span class="!no-underline font-bold text-white">
                                        <?php echo get_sub_field('specialization'); ?>
                                    </span>
                                    <?php if ($link) { ?>
                                    </a>
                                <?php } ?>
                            </div>
                    <?php
                        endwhile;
                    endif; ?>
                    </div>

                    <div class="sm:flex justify-center sm:gap-4">
                        <?php if ($button_1) { ?>
                            <a class="button !no-underline !bg-white hover:!bg-transparent border-[1px] border-white border-solid !text-primary hover:!text-white mb-6 sm:mb-0" href="<?php echo $button_1['url']; ?>" target="<?php echo $button_1['target']; ?>"><?php echo $button_1['title']; ?></a>
                        <?php } ?>
                        <?php if ($button_2) { ?>
                            <a class="button !no-underline !text-white !bg-transparent hover:!bg-white hover:!text-primary border-[1px] border-white border-solid" href="<?php echo $button_2['url']; ?>" target="<?php echo $button_2['target']; ?>"><?php echo $button_2['title']; ?></a>
                        <?php } ?>
                    </div>
                </div>
        </div>
    </div>
</section>