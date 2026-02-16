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


?>
<section class="frequently-asked-questions cmt-block px-8 lg:px-0 max-w-[730px] mb-12 mx-auto <?php echo esc_attr($classes); ?>" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <h2><?php echo get_field('headline'); ?></h2>

    <?php if (get_field('introduction_text')) { ?>
        <div class="mb-6 faq-intro-text">
            <?php echo get_field('introduction_text'); ?>
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
                    <?php echo get_sub_field("faq_question"); ?>
                </div>
                <div id="<?php echo esc_attr($panel_id); ?>"
                    class="a-panel <?php if (get_field('remove_default_gradient')) { ?>border-t border-solid border-t-[1px] <?php } else { ?>bg-gradient-to-b from-topGradient to-bottomGradient<?php } ?>"
                    role="region"
                    aria-labelledby="faq-btn-<?php echo esc_attr($faq_index); ?>">
                    <div class="py-8 mb-0"><?php echo get_sub_field("faq_answer"); ?></div>
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
            "name" => $item['faq_question'] ?? '',
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