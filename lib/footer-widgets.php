<?php
add_filter('use_widgets_block_editor', '__return_false');

if (class_exists('WP_Customize_Control') && ! class_exists('Complete_Theme_Wysiwyg_Control')) {
    class Complete_Theme_Wysiwyg_Control extends WP_Customize_Control
    {
        public $type = 'wysiwyg';

        public function render_content()
        {
            if (! isset($this->label)) {
                return;
            }
?>
            <label>
                <span class="customize-control-title"><?php echo esc_html($this->label); ?></span>
                <textarea id="<?php echo esc_attr($this->id); ?>" class="widefat customize-wysiwyg-editor" rows="8" <?php $this->link(); ?>><?php echo esc_textarea($this->value()); ?></textarea>
            </label>
    <?php
        }
    }
}

function complete_theme_footer_setup()
{

    for ($i = 1; $i <= 5; $i++) {
        register_sidebar([
            'id'            => 'footer-col-' . $i,
            'name'          => 'Footer Column ' . $i,
            'before_widget' => '<div class="nav-col">',
            'after_widget'  => '</div>',
            'before_title'  => '<h2 class="col-title">',
            'after_title'   => '</h2>',
        ]);
    }

    add_action('customize_register', function ($wp_customize) {
        $wp_customize->add_section('complete_theme_footer', [
            'title' => 'Footer Settings',
            'priority' => 100,
        ]);
        $fields = [
            'footer_tagline'    => ['label' => 'Tagline',          'default' => ''],
            'footer_address'    => ['label' => 'Address',          'default' => ''],
            'footer_address_url' => ['label' => 'Address Map URL',  'default' => ''],
            'footer_phone'      => ['label' => 'Phone',            'default' => ''],
            'footer_facebook'   => ['label' => 'Facebook URL',     'default' => ''],
            'footer_twitter'    => ['label' => 'Twitter/X URL',    'default' => ''],
            'footer_youtube'    => ['label' => 'YouTube URL',      'default' => ''],
            'footer_instagram'  => ['label' => 'Instagram URL',    'default' => ''],
            'footer_linkedin'   => ['label' => 'LinkedIn URL',     'default' => ''],
        ];
        foreach ($fields as $key => $args) {
            $wp_customize->add_setting($key, ['default' => $args['default'], 'sanitize_callback' => 'sanitize_text_field']);
            $wp_customize->add_control($key, ['label' => $args['label'], 'section' => 'complete_theme_footer', 'type' => 'text']);
        }

        $wp_customize->add_setting('footer_disclaimer', ['default' => '', 'sanitize_callback' => 'wp_kses_post']);
        $wp_customize->add_control(new Complete_Theme_Wysiwyg_Control($wp_customize, 'footer_disclaimer', [
            'label'   => 'Disclaimer Text',
            'section' => 'complete_theme_footer',
        ]));

        // Legal links (up to 5)
        foreach (range(1, 5) as $n) {
            $wp_customize->add_setting("footer_legal_{$n}_label", ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
            $wp_customize->add_control("footer_legal_{$n}_label", ['label' => "Legal Link {$n} Label", 'section' => 'complete_theme_footer', 'type' => 'text']);
            $wp_customize->add_setting("footer_legal_{$n}_url", ['default' => '', 'sanitize_callback' => 'esc_url_raw']);
            $wp_customize->add_control("footer_legal_{$n}_url", ['label' => "Legal Link {$n} URL", 'section' => 'complete_theme_footer', 'type' => 'text']);
        }
        // Compliance logo image uploads (up to 8)
        foreach (range(1, 8) as $n) {
            $wp_customize->add_setting("footer_comp_logo_{$n}");
            $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, "footer_comp_logo_{$n}", [
                'label'   => "Compliance Logo {$n}",
                'section' => 'complete_theme_footer',
            ]));
            $wp_customize->add_setting("footer_comp_url_{$n}", ['default' => '#', 'sanitize_callback' => 'esc_url_raw']);
            $wp_customize->add_control("footer_comp_url_{$n}", ['label' => "Compliance Logo {$n} URL", 'section' => 'complete_theme_footer', 'type' => 'text']);
            $wp_customize->add_setting("footer_comp_alt_{$n}", ['default' => '', 'sanitize_callback' => 'sanitize_text_field']);
            $wp_customize->add_control("footer_comp_alt_{$n}", ['label' => "Compliance Logo {$n} Alt Text", 'section' => 'complete_theme_footer', 'type' => 'text']);
        }
    });
}
add_action('after_setup_theme', 'complete_theme_footer_setup');

add_action('customize_controls_enqueue_scripts', function () {
    if (function_exists('wp_enqueue_editor')) {
        wp_enqueue_editor();
    }
});

add_action('customize_controls_print_footer_scripts', function () {
    ?>
    <script>
        (function($) {
            function bindWysiwygControl($textarea) {
                if (!$textarea.length || $textarea.data('wysiwyg-bound')) {
                    return;
                }
                if (typeof wp === 'undefined' || !wp.editor || !wp.editor.initialize) {
                    return;
                }

                var editorId = $textarea.attr('id');
                $textarea.data('wysiwyg-bound', true);

                wp.editor.initialize(editorId, {
                    tinymce: {
                        wpautop: true,
                        toolbar1: 'bold italic bullist numlist link unlink undo redo',
                        toolbar2: ''
                    },
                    quicktags: true,
                    mediaButtons: false
                });

                $(document).on('tinymce-editor-init', function(event, editor) {
                    if (editor.id === editorId) {
                        editor.on('change keyup NodeChange', function() {
                            $textarea.val(editor.getContent()).trigger('change');
                        });
                    }
                });
            }

            function initWysiwygControls() {
                $('.customize-control-wysiwyg textarea.customize-wysiwyg-editor').each(function() {
                    bindWysiwygControl($(this));
                });
            }

            $(document).ready(function() {
                initWysiwygControls();
            });

            if (window.wp && wp.customize) {
                wp.customize.bind('ready', function() {
                    initWysiwygControls();
                    wp.customize.section('complete_theme_footer', function(section) {
                        section.expanded.bind(function(isExpanded) {
                            if (isExpanded) {
                                setTimeout(initWysiwygControls, 100);
                            }
                        });
                    });
                });
            }
        })(jQuery);
    </script>
<?php
});

function complete_theme_footer_data()
{
    $footer_data = [
        'tagline'     => get_theme_mod('footer_tagline',     ''),
        'address'     => get_theme_mod('footer_address',     ''),
        'address_url' => get_theme_mod('footer_address_url', ''),
        'phone'       => get_theme_mod('footer_phone',       ''),
        'facebook'    => get_theme_mod('footer_facebook',    ''),
        'twitter'     => get_theme_mod('footer_twitter',     ''),
        'youtube'     => get_theme_mod('footer_youtube',     ''),
        'instagram'   => get_theme_mod('footer_instagram',   ''),
        'linkedin'    => get_theme_mod('footer_linkedin',    ''),
        'disclaimer'  => get_theme_mod('footer_disclaimer',  ''),
    ];

    $phone_href = 'tel:+1' . preg_replace('/\D/', '', $footer_data['phone']);

    // ── Legal links from Customizer (up to 5) ─────────────────────────────
    $legal_links = [];
    for ($i = 1; $i <= 5; $i++) {
        $label = get_theme_mod("footer_legal_{$i}_label", '');
        $url   = get_theme_mod("footer_legal_{$i}_url",   '');
        if ($label && $url) {
            $legal_links[] = ['label' => $label, 'url' => $url];
        }
    }

    // ── Compliance logos from Customizer (up to 8) ────────────────────────
    $comp_logos = [];
    for ($i = 1; $i <= 8; $i++) {
        $src = get_theme_mod("footer_comp_logo_{$i}", '');
        if ($src) {
            $comp_logos[] = [
                'src' => $src,
                'url' => get_theme_mod("footer_comp_url_{$i}", '#'),
                'alt' => get_theme_mod("footer_comp_alt_{$i}", ''),
            ];
        }
    }

    // ── Active widget sidebars ─────────────────────────────────────────────
    $footer_sidebars = [];
    for ($i = 1; $i <= 5; $i++) {
        if (is_active_sidebar('footer-col-' . $i)) {
            $footer_sidebars[] = 'footer-col-' . $i;
        }
    }
    $has_widgets = ! empty($footer_sidebars);

    return compact('footer_data', 'phone_href', 'legal_links', 'comp_logos', 'footer_sidebars', 'has_widgets');
}
