<?php
class CMS_Zip_Code_Form_Widget extends WP_Widget
{
    function __construct()
    {
        parent::__construct(
            'cms_zip_code_form_widget',
            __('CMS ZIP Code Form Widget', 'text_domain'),
            array('description' => __('A widget with title, subtitle, Gravity Form or a button, and after-form text', 'text_domain'))
        );
    }

    public function widget($args, $instance)
    {
        $title            = !empty($instance['title']) ? $instance['title'] : '';
        $subtitle         = !empty($instance['subtitle']) ? $instance['subtitle'] : '';
        $display_type     = !empty($instance['display_type']) ? $instance['display_type'] : 'form'; // 'form' | 'button'
        $gravity_form_id  = !empty($instance['gravity_form_id']) ? $instance['gravity_form_id'] : '';
        $after_form_text  = !empty($instance['after_form_text']) ? $instance['after_form_text'] : '';
        $button_text      = !empty($instance['button_text']) ? $instance['button_text'] : '';
        // prefer new button_link; fall back to legacy button_url if present
        $button_link      = !empty($instance['button_link']) ? $instance['button_link'] : (!empty($instance['button_url']) ? $instance['button_url'] : '');
        $button_target    = !empty($instance['button_target']) ? $instance['button_target'] : '_self';

        echo $args['before_widget'];
?>
        <div class="cms-zip-code-widget bg-[#eeeeef] pt-8 pb-6 px-10">
            <?php if ($title): ?>
                <h4 class="text-2xl mb-2"><?php echo esc_html($title); ?></h4>
            <?php endif; ?>

            <?php if ($subtitle): ?>
                <h5 class="text-xl text-[#515151] mb-5"><?php echo esc_html($subtitle); ?></h5>
            <?php endif; ?>

            <?php if ($display_type === 'form'): ?>
                <?php if ($gravity_form_id): ?>
                    <?php echo do_shortcode('[gravityform id="' . esc_attr($gravity_form_id) . '" title="false" description="false" ajax="true"]'); ?>
                <?php else: ?>
                    <p class="text-sm text-[#515151]"><?php esc_html_e('Please select a Gravity Form in the widget settings.', 'text_domain'); ?></p>
                <?php endif; ?>
            <?php else: // button 
            ?>
                <?php if ($button_link && $button_text): ?>
                    <a
                        href="<?php echo esc_url($button_link); ?>"
                        target="<?php echo $button_target === '_blank' ? '_blank' : '_self'; ?>"
                        <?php echo $button_target === '_blank' ? 'rel="noopener"' : ''; ?>
                        class="button w-full">
                        <?php echo esc_html($button_text); ?>
                    </a>
                <?php else: ?>
                    <p class="text-sm text-[#515151]"><?php esc_html_e('Set the button text and link in the widget settings.', 'text_domain'); ?></p>
                <?php endif; ?>
            <?php endif; ?>

            <?php if ($after_form_text): ?>
                <div class="widget-after-form-text text-base mt-4"><?php echo wp_kses_post(wpautop($after_form_text)); ?></div>
            <?php endif; ?>
        </div>
    <?php
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        $title           = !empty($instance['title']) ? $instance['title'] : '';
        $subtitle        = !empty($instance['subtitle']) ? $instance['subtitle'] : '';
        $display_type    = !empty($instance['display_type']) ? $instance['display_type'] : 'form'; // 'form' | 'button'
        $gravity_form_id = !empty($instance['gravity_form_id']) ? $instance['gravity_form_id'] : '';
        $after_form_text = !empty($instance['after_form_text']) ? $instance['after_form_text'] : '';
        $button_text     = !empty($instance['button_text']) ? $instance['button_text'] : '';
        // prefer new field
        $button_link     = !empty($instance['button_link']) ? $instance['button_link'] : (!empty($instance['button_url']) ? $instance['button_url'] : '');
        $button_target   = !empty($instance['button_target']) ? $instance['button_target'] : '_self';

        $forms = class_exists('GFAPI') ? GFAPI::get_forms() : array();
        $wid   = esc_attr($this->id); // e.g. cms_zip_code_form_widget-2
    ?>
        <div class="cms-zip-code-widget-admin" data-widget-id="<?php echo $wid; ?>">
            <p>
                <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php esc_html_e('Title:', 'text_domain'); ?></label>
                <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
            </p>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('subtitle')); ?>"><?php esc_html_e('Subtitle:', 'text_domain'); ?></label>
                <input class="widefat" id="<?php echo esc_attr($this->get_field_id('subtitle')); ?>" name="<?php echo esc_attr($this->get_field_name('subtitle')); ?>" type="text" value="<?php echo esc_attr($subtitle); ?>">
            </p>

            <p>
                <label for="<?php echo esc_attr($this->get_field_id('display_type')); ?>"><?php esc_html_e('Display Type:', 'text_domain'); ?></label>
                <select class="widefat js-display-type" id="<?php echo esc_attr($this->get_field_id('display_type')); ?>" name="<?php echo esc_attr($this->get_field_name('display_type')); ?>">
                    <option value="form" <?php selected($display_type, 'form'); ?>><?php esc_html_e('Gravity Form', 'text_domain'); ?></option>
                    <option value="button" <?php selected($display_type, 'button'); ?>><?php esc_html_e('Button', 'text_domain'); ?></option>
                </select>
            </p>

            <div class="js-group-form" style="<?php echo ($display_type === 'form') ? '' : 'display:none;'; ?>">
                <p>
                    <label for="<?php echo esc_attr($this->get_field_id('gravity_form_id')); ?>"><?php esc_html_e('Select Gravity Form:', 'text_domain'); ?></label>
                    <select class="widefat" id="<?php echo esc_attr($this->get_field_id('gravity_form_id')); ?>" name="<?php echo esc_attr($this->get_field_name('gravity_form_id')); ?>">
                        <option value=""><?php esc_html_e('-- Select Form --', 'text_domain'); ?></option>
                        <?php if (!empty($forms)) : ?>
                            <?php foreach ($forms as $form): ?>
                                <option value="<?php echo esc_attr($form['id']); ?>" <?php selected($gravity_form_id, $form['id']); ?>>
                                    <?php echo esc_html($form['title']); ?>
                                </option>
                            <?php endforeach; ?>
                        <?php else: ?>
                            <option value=""><?php esc_html_e('Gravity Forms not available.', 'text_domain'); ?></option>
                        <?php endif; ?>
                    </select>
                </p>
            </div>

            <div class="js-group-button" style="<?php echo ($display_type === 'button') ? '' : 'display:none;'; ?>">
                <p>
                    <label for="<?php echo esc_attr($this->get_field_id('button_text')); ?>"><?php esc_html_e('Button Text:', 'text_domain'); ?></label>
                    <input class="widefat" id="<?php echo esc_attr($this->get_field_id('button_text')); ?>" name="<?php echo esc_attr($this->get_field_name('button_text')); ?>" type="text" value="<?php echo esc_attr($button_text); ?>">
                </p>
                <p>
                    <label for="<?php echo esc_attr($this->get_field_id('button_link')); ?>"><?php esc_html_e('Button Link:', 'text_domain'); ?></label>
                    <input class="widefat" id="<?php echo esc_attr($this->get_field_id('button_link')); ?>" name="<?php echo esc_attr($this->get_field_name('button_link')); ?>" type="url" value="<?php echo esc_attr($button_link); ?>" placeholder="https://example.com/">
                </p>
                <p>
                    <label for="<?php echo esc_attr($this->get_field_id('button_target')); ?>"><?php esc_html_e('Button Target:', 'text_domain'); ?></label>
                    <select class="widefat" id="<?php echo esc_attr($this->get_field_id('button_target')); ?>" name="<?php echo esc_attr($this->get_field_name('button_target')); ?>">
                        <option value="_self" <?php selected($button_target, '_self');  ?>><?php esc_html_e('Same tab', 'text_domain'); ?></option>
                        <option value="_blank" <?php selected($button_target, '_blank'); ?>><?php esc_html_e('New tab', 'text_domain'); ?></option>
                    </select>
                </p>
            </div>

            <p>
                <label><?php esc_html_e('After Form Text:', 'text_domain'); ?></label>
                <?php
                $editor_id   = $this->get_field_id('after_form_text');
                $editor_name = $this->get_field_name('after_form_text');

                $editor_settings = array(
                    'textarea_name' => $editor_name,
                    'media_buttons' => false,
                    'textarea_rows' => 5,
                    'teeny'         => false,
                    'quicktags'     => false,
                    'tinymce'       => array(
                        'toolbar1' => 'bold italic underline | bullist numlist blockquote | link unlink | undo redo',
                        'toolbar2' => '',
                        'wpautop'  => true,
                        'plugins'  => 'link lists',
                    ),
                );
                wp_editor($after_form_text, $editor_id, $editor_settings);
                ?>
            </p>
        </div>

        <script>
            jQuery(document).ready(function($) {
                // Scope to each widget instance
                function bindWidget($wrap) {
                    function toggleGroups() {
                        var val = $wrap.find('.js-display-type').val();
                        $wrap.find('.js-group-form').toggle(val === 'form');
                        $wrap.find('.js-group-button').toggle(val === 'button');
                    }
                    $wrap.on('change', '.js-display-type', toggleGroups);
                    toggleGroups();

                    // Keep TinyMCE hooked up
                    $wrap.find('textarea.wp-editor-area').each(function() {
                        var editorID = $(this).attr('id');
                        if (editorID && typeof tinymce !== 'undefined') {
                            tinymce.remove('#' + editorID);
                            tinymce.init({
                                selector: '#' + editorID,
                                menubar: false,
                                toolbar: 'bold italic underline | bullist numlist blockquote | link unlink | undo redo',
                                branding: false,
                                quicktags: false,
                                wpautop: true,
                                plugins: 'link lists',
                                setup: function(editor) {
                                    editor.on('change keyup', function() {
                                        editor.save();
                                        $('#' + editorID).trigger('change');
                                        var widget = $('#' + editorID).closest('.widget');
                                        widget.find('.widget-control-save').prop('disabled', false).removeClass('disabled');
                                    });
                                }
                            });
                        }
                    });
                }

                // Initial bind for current widget UI
                $('.cms-zip-code-widget-admin').each(function() {
                    bindWidget($(this));
                });

                // Re-bind on widget add/update (Customizer & Widgets screen)
                $(document).on('widget-added widget-updated', function(e, widget) {
                    var $wrap = $(widget).find('.cms-zip-code-widget-admin');
                    if ($wrap.length) bindWidget($wrap);
                });
            });
        </script>
<?php
    }

    public function update($new_instance, $old_instance)
    {
        $instance = array();
        $instance['title']           = sanitize_text_field($new_instance['title']);
        $instance['subtitle']        = sanitize_text_field($new_instance['subtitle']);
        $instance['display_type']    = in_array($new_instance['display_type'], array('form', 'button'), true) ? $new_instance['display_type'] : 'form';
        $instance['gravity_form_id'] = sanitize_text_field($new_instance['gravity_form_id']);
        $instance['after_form_text'] = wp_kses_post($new_instance['after_form_text']);

        // Button fields
        $instance['button_text']   = sanitize_text_field($new_instance['button_text']);
        $instance['button_link']   = esc_url_raw($new_instance['button_link']); // new canonical link field
        // keep legacy value if new field empty and old existed
        if (empty($instance['button_link']) && !empty($old_instance['button_url'])) {
            $instance['button_link'] = esc_url_raw($old_instance['button_url']);
        }
        $instance['button_target'] = ($new_instance['button_target'] === '_blank') ? '_blank' : '_self';

        // Preserve legacy button_url if present (no longer used in UI, but kept for migration safety)
        if (!empty($old_instance['button_url'])) {
            $instance['button_url'] = esc_url_raw($old_instance['button_url']);
        }

        return $instance;
    }
}

// Register
function register_cms_zip_code_form_widget()
{
    register_widget('CMS_Zip_Code_Form_Widget');
}
add_action('widgets_init', 'register_cms_zip_code_form_widget');
