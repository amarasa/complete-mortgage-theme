<?php
$classes = '';
$id = '';
$acfKey = 'group_67c0b66c507d3';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', esc_attr($block['className']));
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

$background_color = get_field('background_color');
$headline = get_field('headline');
$introduction_text = get_field('introduction_text');
$buttons = get_field('buttons');
$below_button_text = get_field('below_button_text');
$background_image_raw = get_field('background_image');
$background_image_id = 0;
if (is_array($background_image_raw) && !empty($background_image_raw['id'])) {
    $background_image_id = $background_image_raw['id'];
} elseif (is_array($background_image_raw) && !empty($background_image_raw['ID'])) {
    $background_image_id = $background_image_raw['ID'];
} elseif (is_numeric($background_image_raw)) {
    $background_image_id = (int) $background_image_raw;
} elseif (is_string($background_image_raw) && !empty($background_image_raw)) {
    $background_image_id = attachment_url_to_postid($background_image_raw);
}
$foreground_image_set = get_field('foreground_image_set');

// Text and button colors based on background
switch ($background_color) {
    case 'bg-primary':
        $text_color = '!text-white';
        $btn_color = '!bg-secondary';
        break;
    case 'bg-secondary':
        $text_color = '!text-white';
        $btn_color = '!bg-primary';
        break;
    case 'bg-grey':
        $text_color = '!text-primary';
        $btn_color = '!bg-primary';
        break;
    default:
        $text_color = '';
        $btn_color = '';
        break;
}

$foreground_image = false;
$foreground_image_id = 0;
$foreground_object_position = 'center';

if (!empty($foreground_image_set)) {
    $random_item = $foreground_image_set[array_rand($foreground_image_set)];
    $random_image = $random_item['image'];

    if (is_array($random_image) && !empty($random_image['id'])) {
        $foreground_image = true;
        $foreground_image_id = $random_image['id'];
        if (!empty($random_image['left']) && !empty($random_image['top'])) {
            $foreground_object_position = esc_attr($random_image['left']) . '% ' . esc_attr($random_image['top']) . '%';
        }
    }
}

// If a background image exists, force bg-white and reset text/button colors
if ($background_image_id) {
    $background_color = 'bg-white';
    $text_color = '';
    $btn_color = '';
}
?>
<section class="hero-with-squared-image <?php echo $background_color; ?> relative lg:h-[575px] xl:h-[700px] w-full <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <div class="hero-with-squared-image-background hidden lg:block absolute w-1/2 h-full right-0 overflow-hidden rounded-bl-[75px]">
        <?php if ($background_image_id) {
            echo wp_get_attachment_image($background_image_id, 'full', false, [
                'class' => 'w-full h-full object-cover',
                'sizes' => '50vw',
                'loading' => 'eager',
                'fetchpriority' => 'high',
                'aria-hidden' => 'true',
                'alt' => '',
            ]);
        } ?>
    </div>
    <div class="max-w-[1400px] mx-auto h-full px-8 lg:absolute w-full left-0 right-0 bottom-0 z-10 lg:pt-[5%]">
        <div class="grid grid-cols-12 lg:gap-x-24 items-center">
            <div class="col-span-12 lg:col-span-5 <?php echo $text_color; ?>">
                <h1 class="<?php echo $text_color; ?>"><?= esc_html($headline); ?></h1>
                <p class="<?php echo $text_color; ?>"><?= wp_kses_post($introduction_text); ?></p>

                <?php $enable_banking_bridge_button = get_field('enable_banking_bridge_button');
                if ($enable_banking_bridge_button) { ?>
                    <div id='bb-custom'></div>
                    <script>
                        (function() {
                            function i() {
                                if (window.BB) BB.init('<?php echo get_field('banking_bridge_id'); ?>', document.getElementById('bb-custom'), {
                                    type: 'api'
                                })
                            }
                            if (window.BB) i();
                            else {
                                var s = document.createElement('script');
                                s.src = 'https://cdn.bankingbridge.com/assets/external/index.js';
                                s.type = 'text/javascript';
                                s.charset = 'utf-8';
                                s.async = true;
                                s.onload = i;
                                document.head.appendChild(s);
                            }
                        })();
                    </script>

                    <a class="button !text-white !no-underline !block <?php echo $btn_color; ?>" onclick="BB.api.openModal('leadWorkflow')" href="javascript:void(0);"><?php echo get_field('banking_bridge_button_text'); ?></a>

                    <script>
                        function main(purpose) {
                            BB.api.workflowInit({
                                loan_purpose: purpose
                            })
                            BB.api.openModal('leadWorkflow')
                        }
                    </script>
                <?php } else { ?>
                    <?php if ($buttons): ?>
                        <div class="md:flex gap-x-4 flex-wrap">
                            <?php foreach ($buttons as $button): ?>
                                <?php if (!empty($button['button'])): ?>
                                    <div class="flex-grow">
                                        <a class="button mb-3 !no-underline !text-white !w-full text-center <?php echo $btn_color; ?>" href="<?= esc_url($button['button']['url']); ?>" <?= cms_link_attributes($button['button']['target'] ?: '_self'); ?>>
                                            <?= esc_html($button['button']['title']); ?>
                                        </a>
                                    </div>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                <?php } ?>

                <p class="<?php echo $text_color; ?>"><?= wp_kses_post($below_button_text); ?></p>
            </div>
            <div class="col-span-12 lg:col-span-7">
                <div class="relative overflow-hidden rounded-md mb-8 lg:mb-0 pb-[50%] lg:pb-0 lg:h-[500px] <?= $foreground_image ? 'shadow-lg' : '' ?>">
                    <?php if ($foreground_image_id) {
                        echo wp_get_attachment_image($foreground_image_id, 'large', false, [
                            'class' => 'absolute inset-0 w-full h-full object-cover',
                            'style' => 'object-position: ' . $foreground_object_position,
                            'sizes' => '(min-width: 1024px) 58vw, 100vw',
                            'loading' => 'eager',
                            'fetchpriority' => 'high',
                        ]);
                    } ?>
                </div>
            </div>

        </div>
    </div>
</section>