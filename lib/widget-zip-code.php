<?php
class CMS_Zip_Code_Form_Widget extends WP_Widget
{
    function __construct()
    {
        parent::__construct(
            'cms_zip_code_form_widget',
            __('CMS ZIP Code Form Widget', 'text_domain'),
            array('description' => __('A widget with title, subtitle, Gravity Form dropdown, and after-form text', 'text_domain'))
        );
    }

    public function widget($args, $instance)
    {
        echo $args['before_widget'];
?>
        <div class="cms-zip-code-widget bg-[#eeeeef] pt-8 pb-6 px-10">
            <?php if (!empty($instance['title'])): ?>
                <h4 class="text-2xl mb-2"><?php echo esc_html($instance['title']); ?></h4>
            <?php endif; ?>

            <?php if (!empty($instance['subtitle'])): ?>
                <h5 class="text-xl text-[#515151] mb-5"><?php echo esc_html($instance['subtitle']); ?></h3>
                <?php endif; ?>

                <?php if (!empty($instance['gravity_form_id'])): ?>
                    <?php echo do_shortcode('[gravityform id="' . esc_attr($instance['gravity_form_id']) . '" title="false" description="false" ajax="true"]'); ?>
                <?php endif; ?>

                <?php if (!empty($instance['after_form_text'])): ?>
                    <div class="widget-after-form-text text-base"><?php echo wp_kses_post(wpautop($instance['after_form_text'])); ?></div>
                <?php endif; ?>
        </div>
    <?php
        echo $args['after_widget'];
    }

    public function form($instance)
    {
        $title = !empty($instance['title']) ? $instance['title'] : '';
        $subtitle = !empty($instance['subtitle']) ? $instance['subtitle'] : '';
        $gravity_form_id = !empty($instance['gravity_form_id']) ? $instance['gravity_form_id'] : '';
        $after_form_text = !empty($instance['after_form_text']) ? $instance['after_form_text'] : '';

        $forms = GFAPI::get_forms(); // Get Gravity Forms
    ?>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>">Title:</label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('title')); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" type="text" value="<?php echo esc_attr($title); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('subtitle')); ?>">Subtitle:</label>
            <input class="widefat" id="<?php echo esc_attr($this->get_field_id('subtitle')); ?>" name="<?php echo esc_attr($this->get_field_name('subtitle')); ?>" type="text" value="<?php echo esc_attr($subtitle); ?>">
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('gravity_form_id')); ?>">Select Gravity Form:</label>
            <select class="widefat" id="<?php echo esc_attr($this->get_field_id('gravity_form_id')); ?>" name="<?php echo esc_attr($this->get_field_name('gravity_form_id')); ?>">
                <option value="">-- Select Form --</option>
                <?php foreach ($forms as $form): ?>
                    <option value="<?php echo esc_attr($form['id']); ?>" <?php selected($gravity_form_id, $form['id']); ?>><?php echo esc_html($form['title']); ?></option>
                <?php endforeach; ?>
            </select>
        </p>
        <p>
            <label>After Form Text:</label>
            <?php
            $editor_id = $this->get_field_id('after_form_text');
            $editor_name = $this->get_field_name('after_form_text');

            $editor_settings = array(
                'textarea_name' => $editor_name,
                'media_buttons' => false,
                'textarea_rows' => 5,
                'teeny'         => false, // Disabling "teeny" mode to ensure full TinyMCE controls
                'quicktags'     => false,
                'tinymce'       => array(
                    'toolbar1' => 'bold italic underline | bullist numlist blockquote | link unlink | undo redo',
                    'toolbar2' => '',
                    'wpautop'  => true,
                    'plugins'   => 'link lists', // Explicitly load link plugin
                )
            );


            wp_editor($after_form_text, $editor_id, $editor_settings);
            ?>
        </p>
        <script>
            jQuery(document).ready(function($) {
                function initTinyMCE(id) {
                    if (typeof tinymce !== "undefined") {
                        tinymce.remove('#' + id);
                        tinymce.init({
                            selector: '#' + id,
                            menubar: false,
                            toolbar: 'bold italic underline | bullist numlist blockquote | link unlink | undo redo',
                            branding: false,
                            quicktags: false,
                            wpautop: true,
                            plugins: 'link lists',
                            setup: function(editor) {
                                editor.on('change keyup', function() {
                                    editor.save(); // Save content to textarea
                                    $('#' + id).trigger('change'); // Force WordPress to recognize the change
                                    let widget = $('#' + id).closest('.widget');
                                    widget.find('.widget-control-save').prop('disabled', false).removeClass('disabled');
                                });
                            }
                        });
                    }
                }

                // Initialize TinyMCE on widget load
                $('.widget').each(function() {
                    var editorID = $(this).find('textarea.wp-editor-area').attr('id');
                    if (editorID) initTinyMCE(editorID);
                });

                // Reinitialize TinyMCE when a widget is added or updated
                $(document).on('widget-updated widget-added', function(event, widget) {
                    var editorID = $(widget).find('textarea.wp-editor-area').attr('id');
                    if (editorID) {
                        initTinyMCE(editorID);
                    }
                });
            });
        </script>
<?php
    }

    public function update($new_instance, $old_instance)
    {
        $instance = array();
        $instance['title'] = sanitize_text_field($new_instance['title']);
        $instance['subtitle'] = sanitize_text_field($new_instance['subtitle']);
        $instance['gravity_form_id'] = sanitize_text_field($new_instance['gravity_form_id']);
        $instance['after_form_text'] = wp_kses_post($new_instance['after_form_text']); // Keep HTML formatting

        return $instance;
    }
}

function register_cms_zip_code_form_widget()
{
    register_widget('CMS_Zip_Code_Form_Widget');
}
add_action('widgets_init', 'register_cms_zip_code_form_widget');
