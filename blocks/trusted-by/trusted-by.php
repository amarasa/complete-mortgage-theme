<?php
$classes  = '';
$id_attr  = '';
$acfKey   = '';

if (!empty($block['className'])) $classes .= ' ' . $block['className'];
if (!empty($block['anchor']))   $id_attr = ' id="' . esc_attr($block['anchor']) . '"';

$is_slider        = get_field('enable_slider_version');
$enable_bg_color  = get_field('enable_grey_background_color');
$background_image = get_field('background_image');
$bg_url           = $background_image ? $background_image['url'] : '';
$top_gradient_overlay = get_field('top_gradient_overlay');
$bottom_gradient_overlay = get_field('bottom_gradient_overlay');
?>
<span class="bg-grey sr-only border-primary"></span>
<section class="trusted-by cmt-block relative px-8 <?php echo esc_attr($classes); ?> pt-12 pb-16 <?php echo $enable_bg_color ? 'bg-grey' : ''; ?>" <?php echo $id_attr; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <?php if ($bg_url) { ?>
        <?php if (get_field('enable_background_image_with_gradient')) { ?>
            <div class="trusted-by-gradient-background absolute z-20 h-full w-full left-0 top-0" style="background:
    linear-gradient(to bottom, <?php echo $top_gradient_overlay; ?>, rgba(0,0,0,0)) top,
    linear-gradient(to top, <?php echo $bottom_gradient_overlay; ?>, rgba(0,0,0,0)) bottom;"></div>
            <div class="trusted-by-background-image absolute inset-0"
                style="background-image:url('<?php echo esc_url($bg_url); ?>');background-size:cover;background-repeat:no-repeat;background-position:center center;">
            </div>
            <div class="trusted-by-background-image-overlay absolute z-10 inset-0"
                style="background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);">
            </div>
            <div class="content-overlay relative z-30">
            <?php } ?>
        <?php } ?>

        <div class="container px-8">
            <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-8 lg:col-start-3">
                    <?php if ($headline = get_field('headline')): ?>
                        <h2 class="!mb-0 text-center <?php if ($bg_url) { ?>text-white<?php } ?>"><?php echo esc_html($headline); ?></h2>
                    <?php endif; ?>

                    <?php if ($desc = get_field('description')): ?>
                        <p class="mb-8 text-center <?php if ($bg_url) { ?>text-white<?php } ?>"><?php echo wp_kses_post($desc); ?></p>
                    <?php endif; ?>

                    <?php if ($is_slider): ?>
                        <div class="splide logo-slider" aria-label="Trusted by">
                            <div class="splide__track">
                                <ul class="splide__list">
                                    <?php if (have_rows('logos')): while (have_rows('logos')): the_row(); ?>
                                            <li class="splide__slide">
                                                <div class="logo-card bg-card bg-white <?php echo $enable_bg_color ? 'border-primary' : ''; ?> rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-300 h-full flex items-center justify-center">
                                                    <?php
                                                    $logo    = get_sub_field('logo');
                                                    $logo_id = is_array($logo) ? ($logo['ID'] ?? 0) : (int)$logo;
                                                    if ($logo_id) {
                                                        echo wp_get_attachment_image(
                                                            $logo_id,
                                                            'medium',
                                                            false,
                                                            [
                                                                'class'    => 'logo-img h-16 w-full mx-auto grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300 h-auto',
                                                                'loading'  => 'lazy',
                                                                'decoding' => 'async',
                                                            ]
                                                        );
                                                    }
                                                    ?>
                                                </div>
                                            </li>
                                    <?php endwhile;
                                    endif; ?>
                                </ul>
                            </div>
                        </div>
                    <?php else: ?>
                        <div class="logo-flex flex flex-wrap items-center justify-center gap-6">
                            <?php if (have_rows('logos')): while (have_rows('logos')): the_row(); ?>
                                    <div class="eh-logo-card logo-card <?php echo $enable_bg_color ? 'border border-primary bg-white' : ''; ?> bg-card bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-all duration-300 flex items-center justify-center md:max-w-[175px] w-full">
                                        <?php
                                        $logo    = get_sub_field('logo');
                                        $logo_id = is_array($logo) ? ($logo['ID'] ?? 0) : (int)$logo;
                                        if ($logo_id) {
                                            echo wp_get_attachment_image(
                                                $logo_id,
                                                'medium',
                                                false,
                                                [
                                                    'class'    => 'logo-img h-16 w-full h-auto mx-auto grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300',
                                                    'loading'  => 'lazy',
                                                    'decoding' => 'async',
                                                ]
                                            );
                                        }
                                        ?>
                                    </div>
                            <?php endwhile;
                            endif; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <?php if ($bg_url && get_field('enable_background_image_with_gradient')) { ?>
            </div><!-- end content-overlay -->
        <?php } ?>
</section>