<?php

/**
 * Render an image with hirasso/focal-point-picker support.
 *
 * @param mixed  $acf_field Image field (ID or array from ACF).
 * @param string $size      Image size (e.g., 'large', 'medium', 'full').
 * @param string $ratio     Aspect ratio for the crop box (e.g., '70%' = 10:7, '100%' = square).
 */
if (!function_exists('vv_render_focal_image')) {
    function vv_render_focal_image($acf_field, $size = 'large', $ratio = '70%')
    {
        // Normalize to attachment ID
        $image_id = 0;
        if (is_array($acf_field) && !empty($acf_field['ID'])) {
            $image_id = (int) $acf_field['ID'];
        } elseif (is_numeric($acf_field)) {
            $image_id = (int) $acf_field;
        }

        if (!$image_id) {
            echo '<div class="relative w-full bg-gray-100" style="padding-bottom:' . esc_attr($ratio) . ';"></div>';
            return;
        }

        // Default focus
        $x = 50;
        $y = 50;

        if (function_exists('fcp_get_focalpoint')) {
            $focus = fcp_get_focalpoint($image_id);
            if (is_object($focus)) {
                if (isset($focus->leftPercent, $focus->topPercent)) {
                    $x = (float) $focus->leftPercent;
                    $y = (float) $focus->topPercent;
                } elseif (isset($focus->xPercent, $focus->yPercent)) {
                    $x = (float) $focus->xPercent;
                    $y = (float) $focus->yPercent;
                } elseif (isset($focus->x, $focus->y)) {
                    $x = (float) $focus->x * 100;
                    $y = (float) $focus->y * 100;
                }
            }
        }

        $fmt = function ($n) {
            return rtrim(rtrim(number_format($n, 2, '.', ''), '0'), '.');
        };
        $object_position = $fmt($x) . '% ' . $fmt($y) . '%';

?>
        <div class="relative w-full overflow-hidden" style="padding-bottom:<?php echo esc_attr($ratio); ?>;">
            <?php
            echo wp_get_attachment_image(
                $image_id,
                $size,
                false,
                [
                    'class'   => 'wp-image-' . $image_id,
                    'loading' => 'lazy',
                    'style'   => sprintf(
                        'position:absolute;inset:0;width:100%%;height:100%%;display:block;object-fit:cover!important;object-position:%s!important;',
                        esc_attr($object_position)
                    ),
                ]
            );

            if (is_user_logged_in() && current_user_can('manage_options')) {
                echo '<div style="position:absolute;bottom:.5rem;left:.5rem;z-index:60;background:rgba(0,0,0,.7);color:#fff;padding:.25rem .5rem;font:12px/1.2 monospace;border-radius:.25rem;">'
                    . 'id=' . esc_html($image_id) . ' | ' . esc_html($object_position)
                    . '</div>';
            }
            ?>
        </div>
<?php
    }
}
