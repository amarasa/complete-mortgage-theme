<?php
$classes = '';
$id = '';
$acfKey = 'group_6328cfe10337b';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

$gradient_background_top_raw = trim((string) get_field('gradient_background_top'));
$gradient_background_bottom_raw = trim((string) get_field('gradient_background_bottom'));
$rgba_pattern = '/^rgba?\(\s*(\d{1,3}\s*,\s*){2}\d{1,3}(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/i';
$gradient_background_top = preg_match($rgba_pattern, $gradient_background_top_raw) ? $gradient_background_top_raw : 'rgba(255,255,255,1)';
$gradient_background_bottom = preg_match($rgba_pattern, $gradient_background_bottom_raw) ? $gradient_background_bottom_raw : $gradient_background_top;
$panel_gradient_style = sprintf(
    'background: linear-gradient(180deg, %1$s 0%%, %2$s 100%%);',
    $gradient_background_top,
    $gradient_background_bottom
);

?>
<section class="frequently-asked-questions cmt-block px-8 lg:px-0 max-w-[730px] mb-12 mx-auto <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo esc_attr($acfKey); ?>">
    <h2><?php echo esc_html(get_field('headline')); ?></h2>

    <?php if (get_field('introduction_text')) { ?>
        <div class="mb-6 faq-intro-text">
            <?php echo wp_kses_post(get_field('introduction_text')); ?>
        </div>
    <?php } ?>

    <div class="accordion faq-accordion" role="presentation">
        <?php
        $faq_index = 0;
        while (have_rows("faq_section")) :
            the_row();
            $faq_index++;
            $is_first = ($faq_index === 1);
            $is_active = $is_first ? 'active' : '';
            $aria_expanded = $is_first ? 'true' : 'false';
            $panel_id = 'faq-panel-' . $acfKey . '-' . $faq_index;
        ?>
            <div class="a-container <?php echo $is_active; ?>">
                <div class="a-btn"
                    id="faq-btn-<?php echo esc_attr($faq_index); ?>"
                    role="button"
                    tabindex="0"
                    aria-expanded="<?php echo $aria_expanded; ?>"
                    aria-controls="<?php echo esc_attr($panel_id); ?>">
                    <?php echo esc_html(get_sub_field("faq_question")); ?>
                </div>
                <div id="<?php echo esc_attr($panel_id); ?>"
                    class="a-panel"
                    role="region"
                    aria-labelledby="faq-btn-<?php echo esc_attr($faq_index); ?>"
                    style="<?php echo esc_attr($panel_gradient_style); ?>">
                    <div class="pb-3 pt-2 mb-0"><?php echo wp_kses_post(get_sub_field("faq_answer")); ?></div>
                </div>
            </div>
        <?php
        endwhile; ?>
    </div>
</section>

<?php
// FAQ Schema - properly escaped JSON-LD
$faq_items = get_field("faq_section");
if ($faq_items && is_array($faq_items)) :
    $faq_schema = [
        "@context" => "https://schema.org",
        "@type" => "FAQPage",
        "mainEntity" => []
    ];

    foreach ($faq_items as $item) {
        $faq_schema["mainEntity"][] = [
            "@type" => "Question",
            "name" => wp_strip_all_tags($item['faq_question'] ?? ''),
            "acceptedAnswer" => [
                "@type" => "Answer",
                "text" => wp_strip_all_tags($item['faq_answer'] ?? '')
            ]
        ];
    }
?>
    <script type="application/ld+json">
        <?php echo wp_json_encode($faq_schema, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES); ?>
    </script>
<?php endif; ?>