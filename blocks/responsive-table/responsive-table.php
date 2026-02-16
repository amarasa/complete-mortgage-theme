<?php
$classes = '';
$id = '';
$acfKey = '';

if (!empty($block['className'])) {
    $classes .= sprintf(' %s', $block['className']);
}

if (!empty($block['anchor'])) {
    $id = sprintf(' id="%s"', esc_attr($block['anchor']));
}

?>
<section class="responsive-table-section cmt-block <?php echo esc_attr($classes); ?> px-8" <?php echo $id; ?> data-block-name="<?php echo $acfKey; ?>">
    <?php $table_builder_or_markdown = get_field('table_builder_or_markdown'); ?>
    <?php if ($table_builder_or_markdown) { ?>
        <?php $md = get_field('markdown'); // textarea, New Lines = None
        if ($md) {
            echo vv_markdown_light($md);
        } ?>
    <?php } else { ?>
    <?php
        $headers_raw  = get_field('table_headers');
        $rows         = get_field('table_rows');

        if ($headers_raw || $rows) {
            echo '<table class="responsive-table px-8">';

            // Collect headers for data-attr labels
            $headers = [];
            if (!empty($headers_raw)) {
                echo '<thead><tr>';
                foreach ($headers_raw as $h) {
                    $label = isset($h['text']) ? $h['text'] : '';
                    $headers[] = $label;
                    echo '<th scope="col">' . esc_html($label) . '</th>';
                }
                echo '</tr></thead>';
            }

            // Body
            if (!empty($rows)) {
                echo '<tbody>';
                foreach ($rows as $row) {
                    $cells = $row['cells'] ?? [];
                    if (empty($cells)) {
                        continue;
                    }
                    echo '<tr>';
                    foreach ($cells as $i => $cell) {
                        $content = $cell['content'] ?? '';
                        // Fallback if we have more cells than headers
                        $label   = $headers[$i] ?? 'Column ' . ($i + 1);
                        echo '<td data-label="' . esc_attr($label) . '">';
                        // Allow WYSIWYG HTML safely
                        echo wp_kses_post($content);
                        echo '</td>';
                    }
                    echo '</tr>';
                }
                echo '</tbody>';
            }

            echo '</table>';
        }
    }
    ?>
</section>