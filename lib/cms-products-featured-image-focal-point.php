<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('cms_products_add_featured_image_focal_point_metabox')) {
    function cms_products_add_featured_image_focal_point_metabox()
    {
        add_meta_box(
            'cms-products-featured-image-focal-point',
            __('Featured Image Focal Point', 'complete-mortgage-theme'),
            'cms_products_render_featured_image_focal_point_metabox',
            'cms_products',
            'side',
            'default'
        );
    }
    add_action('add_meta_boxes', 'cms_products_add_featured_image_focal_point_metabox');
}

if (!function_exists('cms_products_render_featured_image_focal_point_metabox')) {
    function cms_products_render_featured_image_focal_point_metabox($post)
    {
        $thumbnail_id = get_post_thumbnail_id($post->ID);
        $preview_src = $thumbnail_id ? wp_get_attachment_image_src($thumbnail_id, 'large') : false;
        $preview_url = $preview_src ? $preview_src[0] : '';

        $focus_x = get_post_meta($post->ID, 'featured_image_focus_x', true);
        $focus_y = get_post_meta($post->ID, 'featured_image_focus_y', true);
        $focus_x = is_numeric($focus_x) ? max(0, min(100, (float) $focus_x)) : 50;
        $focus_y = is_numeric($focus_y) ? max(0, min(100, (float) $focus_y)) : 50;

        wp_nonce_field('cms_products_featured_image_focal_point', 'cms_products_featured_image_focal_point_nonce');
        ?>
        <div class="cms-featured-image-focuspoint-wrap">
            <?php if ($preview_url): ?>
                <div class="cms-featured-image-focuspoint-stage" data-focus-stage>
                    <img src="<?php echo esc_url($preview_url); ?>" alt="" />
                    <span class="cms-featured-image-focuspoint-marker" data-focus-marker style="left: <?php echo esc_attr($focus_x); ?>%; top: <?php echo esc_attr($focus_y); ?>%;"></span>
                </div>
                <p class="description"><?php esc_html_e('Click the image to set the focal point used by Product Hero.', 'complete-mortgage-theme'); ?></p>
            <?php else: ?>
                <p class="description"><?php esc_html_e('Set a Featured Image first, then update the post and pick a focal point here.', 'complete-mortgage-theme'); ?></p>
            <?php endif; ?>

            <p class="description">
                <?php esc_html_e('Current:', 'complete-mortgage-theme'); ?>
                <span data-focus-readout><?php echo esc_html(round($focus_x) . '%, ' . round($focus_y) . '%'); ?></span>
            </p>

            <p>
                <label for="cms-products-focus-x"><?php esc_html_e('X (%)', 'complete-mortgage-theme'); ?></label>
                <input id="cms-products-focus-x" type="number" min="0" max="100" step="1" name="featured_image_focus_x" value="<?php echo esc_attr(round($focus_x)); ?>" data-focus-x style="width: 100%;" />
            </p>
            <p>
                <label for="cms-products-focus-y"><?php esc_html_e('Y (%)', 'complete-mortgage-theme'); ?></label>
                <input id="cms-products-focus-y" type="number" min="0" max="100" step="1" name="featured_image_focus_y" value="<?php echo esc_attr(round($focus_y)); ?>" data-focus-y style="width: 100%;" />
            </p>
        </div>
        <?php
    }
}

if (!function_exists('cms_products_save_featured_image_focal_point')) {
    function cms_products_save_featured_image_focal_point($post_id)
    {
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        $has_focus_fields = isset($_POST['featured_image_focus_x']) || isset($_POST['featured_image_focus_y']);
        if (!$has_focus_fields) {
            return;
        }

        if (isset($_POST['cms_products_featured_image_focal_point_nonce']) && !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['cms_products_featured_image_focal_point_nonce'])), 'cms_products_featured_image_focal_point')) {
            return;
        }

        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        $post_type = get_post_type($post_id);
        if ($post_type !== 'cms_products') {
            return;
        }

        $focus_x = isset($_POST['featured_image_focus_x']) ? (float) wp_unslash($_POST['featured_image_focus_x']) : 50;
        $focus_y = isset($_POST['featured_image_focus_y']) ? (float) wp_unslash($_POST['featured_image_focus_y']) : 50;

        $focus_x = max(0, min(100, $focus_x));
        $focus_y = max(0, min(100, $focus_y));

        update_post_meta($post_id, 'featured_image_focus_x', $focus_x);
        update_post_meta($post_id, 'featured_image_focus_y', $focus_y);
    }
    add_action('save_post', 'cms_products_save_featured_image_focal_point');
}

if (!function_exists('cms_products_enqueue_featured_image_focal_point_assets')) {
    function cms_products_enqueue_featured_image_focal_point_assets($hook)
    {
        if ($hook !== 'post.php' && $hook !== 'post-new.php') {
            return;
        }

        $screen = get_current_screen();
        if (!$screen || $screen->post_type !== 'cms_products') {
            return;
        }

        $css = '
            .cms-featured-image-focuspoint-stage { position: relative; cursor: crosshair; margin-bottom: 8px; border: 1px solid #dcdcde; background: #f6f7f7; }
            .cms-featured-image-focuspoint-stage img { display: block; width: 100%; height: auto; }
            .cms-featured-image-focuspoint-marker { position: absolute; width: 16px; height: 16px; border: 2px solid #fff; background: #2271b1; border-radius: 999px; transform: translate(-50%, -50%); box-shadow: 0 0 0 1px #00000033; pointer-events: none; }
        ';
        wp_register_style('cms-products-featured-image-focal-point-admin', false, [], COMPLETE_THEME_VERSION);
        wp_enqueue_style('cms-products-featured-image-focal-point-admin');
        wp_add_inline_style('cms-products-featured-image-focal-point-admin', $css);

        $js = '
            (function($){
                function initFocusPicker(context) {
                    var $wrap = $(context).find(".cms-featured-image-focuspoint-wrap");
                    if (!$wrap.length) return;
                    var $stage = $wrap.find("[data-focus-stage]");
                    if (!$stage.length) return;
                    var $marker = $wrap.find("[data-focus-marker]");
                    var $x = $wrap.find("[data-focus-x]");
                    var $y = $wrap.find("[data-focus-y]");
                    var $readout = $wrap.find("[data-focus-readout]");

                    function setPoint(px, py) {
                        px = Math.max(0, Math.min(100, px));
                        py = Math.max(0, Math.min(100, py));
                    $x.val(Math.round(px));
                    $y.val(Math.round(py));
                    $marker.css({ left: px + "%", top: py + "%" });
                    $readout.text(Math.round(px) + "%, " + Math.round(py) + "%");
                }

                    $stage.on("click", function(e){
                        var rect = this.getBoundingClientRect();
                        var px = ((e.clientX - rect.left) / rect.width) * 100;
                        var py = ((e.clientY - rect.top) / rect.height) * 100;
                        setPoint(px, py);
                    });

                    $x.on("input change", function(){
                        setPoint(parseFloat($x.val() || 50), parseFloat($y.val() || 50));
                    });
                    $y.on("input change", function(){
                        setPoint(parseFloat($x.val() || 50), parseFloat($y.val() || 50));
                    });
                }

                $(document).ready(function(){
                    initFocusPicker(document);
                });
            })(jQuery);
        ';
        wp_register_script('cms-products-featured-image-focal-point-admin', false, ['jquery'], COMPLETE_THEME_VERSION, true);
        wp_enqueue_script('cms-products-featured-image-focal-point-admin');
        wp_add_inline_script('cms-products-featured-image-focal-point-admin', $js);
    }
    add_action('admin_enqueue_scripts', 'cms_products_enqueue_featured_image_focal_point_assets');
}
