<?php
class Social_Media_Widget extends WP_Widget
{

    public function __construct()
    {
        parent::__construct(
            'social_media_widget',
            __('Social Media Widget', 'text_domain'),
            array('description' => __('Displays social media icons with links.', 'text_domain'))
        );
    }

    public function widget($args, $instance)
    {
        echo $args['before_widget'];

        echo '<div class="social-icons">';
        foreach ($instance as $key => $url) {
            if (!empty($url)) {
                echo '<a href="' . esc_url($url) . '" target="_blank" rel="noopener noreferrer" class="social-link">
                        <i class="fab fa-' . esc_attr($key) . '"></i>
                      </a>';
            }
        }
        echo '</div>';

        echo $args['after_widget'];
    }

    public function form($instance)
    {
        $socials = array('facebook', 'twitter', 'instagram', 'linkedin', 'youtube');
        foreach ($socials as $social) {
            $url = !empty($instance[$social]) ? $instance[$social] : '';
            echo '<p>';
            echo '<label for="' . $this->get_field_id($social) . '">' . ucfirst($social) . ' URL:</label>';
            echo '<input class="widefat" id="' . $this->get_field_id($social) . '" name="' . $this->get_field_name($social) . '" type="text" value="' . esc_attr($url) . '">';
            echo '</p>';
        }
    }

    public function update($new_instance, $old_instance)
    {
        $instance = array();
        foreach (array('facebook', 'twitter', 'instagram', 'linkedin', 'youtube') as $social) {
            $instance[$social] = (!empty($new_instance[$social])) ? esc_url_raw($new_instance[$social]) : '';
        }
        return $instance;
    }
}

function register_social_media_widget()
{
    register_widget('Social_Media_Widget');
}
add_action('widgets_init', 'register_social_media_widget');
